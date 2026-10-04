import * as THREE from 'three';

// All attachment points are in avatar.root coordinates. Objects face positive Z.
const V = p => new THREE.Vector3(...p);
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const material = (color, extra = {}) => new THREE.MeshStandardMaterial({color, roughness: .78, ...extra});
function mesh(parent, geometry, mat, position = [0, 0, 0]) {
  const o = new THREE.Mesh(geometry, mat);
  o.position.fromArray(position); o.castShadow = true; o.receiveShadow = true;
  parent.add(o); return o;
}
function group(parent, name, position = [0, 0, 0]) {
  const g = new THREE.Group(); g.name = name; g.position.fromArray(position); parent.add(g); return g;
}
function ball(parent, size, mat, p = [0, 0, 0]) {
  const o = mesh(parent, new THREE.SphereGeometry(1, 24, 16), mat, p); o.scale.fromArray(size); return o;
}
function roundShape(w, h, r) {
  const s = new THREE.Shape(), x = -w / 2, y = -h / 2;
  r = Math.min(r, w / 2, h / 2);
  s.moveTo(x + r, y); s.lineTo(x + w - r, y);
  s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r);
  s.quadraticCurveTo(x + w, y + h, x + w - r, y + h); s.lineTo(x + r, y + h);
  s.quadraticCurveTo(x, y + h, x, y + h - r); s.lineTo(x, y + r);
  s.quadraticCurveTo(x, y, x + r, y); s.closePath(); return s;
}
function box(parent, size, mat, p = [0, 0, 0], radius = .025) {
  const [w, h, d] = size, b = Math.min(radius * .35, d * .25, h * .15);
  const geometry = new THREE.ExtrudeGeometry(roundShape(w - b * 2, h - b * 2, radius), {
    depth: Math.max(.001, d - b * 2), bevelEnabled: true, bevelSize: b,
    bevelThickness: b, bevelSegments: 3, curveSegments: 8, steps: 1
  });
  geometry.translate(0, 0, -(d - b * 2) / 2); return mesh(parent, geometry, mat, p);
}
function tube(parent, points, radius, mat, closed = false) {
  const path = new THREE.CatmullRomCurve3(points.map(V), closed, 'centripetal');
  return mesh(parent, new THREE.TubeGeometry(path, Math.max(20, points.length * 4), radius, 8, closed), mat);
}
function rod(parent, a, b, radius, mat) {
  const start = V(a), end = V(b), delta = end.clone().sub(start);
  const o = mesh(parent, new THREE.CylinderGeometry(radius, radius, delta.length(), 16), mat);
  o.position.copy(start.add(end).multiplyScalar(.5));
  o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize()); return o;
}
function ellipse(parent, rx, rz, y, radius, mat) {
  return tube(parent, Array.from({length: 48}, (_, i) => {
    const a = i / 48 * Math.PI * 2; return [Math.cos(a) * rx, y, Math.sin(a) * rz];
  }), radius, mat, true);
}
function star(parent, radius, mat, p = [0, 0, 0], depth = .025) {
  const shape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const a = Math.PI / 2 + i * Math.PI / 5, r = radius * (i % 2 ? .46 : 1);
    if (!i) shape.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else shape.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  shape.closePath();
  const geo = new THREE.ExtrudeGeometry(shape, {depth, bevelEnabled: true, bevelSegments: 3,
    bevelSize: radius * .07, bevelThickness: radius * .07, steps: 1});
  geo.translate(0, 0, -depth / 2); return mesh(parent, geo, mat, p);
}
function flower(parent, r, petal, center, p = [0, 0, 0]) {
  const f = group(parent, 'flower', p);
  for (let i = 0; i < 5; i++) {
    const a = i * Math.PI * .4, q = ball(f, [r * .47, r * .69, r * .23], petal,
      [Math.sin(a) * r * .64, Math.cos(a) * r * .64, 0]); q.rotation.z = -a;
  }
  ball(f, [r * .4, r * .4, r * .3], center, [0, 0, r * .15]); return f;
}

// Headwear is fitted before decorations are added. Keeping a fixed mesh list
// prevents later rays from accidentally seating glasses on a hat or an eye.
function contactSurface(avatar) {
  const root = avatar.root, headMeshes = [], trunkMeshes = [];
  root.updateMatrixWorld(true);
  const collect = (parent, list) => parent?.traverse(o => {
    if (!o.isMesh || !o.geometry || !o.visible) return;
    for (let p = o; p && p !== parent; p = p.parent) if (p === avatar.face) return;
    list.push(o);
  });
  collect(avatar.head || root, headMeshes); collect(avatar.torso, trunkMeshes);
  const headCoreMeshes = headMeshes.filter(o => !/ear|gill|muzzle|beak|facial-disc|twin-top-lobe/.test(o.name) && o.geometry.type !== 'TubeGeometry');
  const inverse = root.matrixWorld.clone().invert(), normalMatrix = new THREE.Matrix3();
  const ray = new THREE.Raycaster(), reach = (avatar.height || 3) + (avatar.width || 3) + 4;
  function cast(origin, direction, objects = headMeshes) {
    ray.set(V(origin).applyMatrix4(root.matrixWorld), V(direction).transformDirection(root.matrixWorld));
    const hit = ray.intersectObjects(objects, false)[0];
    if (!hit) return null;
    const point = hit.point.clone().applyMatrix4(inverse);
    normalMatrix.getNormalMatrix(inverse.clone().multiply(hit.object.matrixWorld));
    const normal = hit.face.normal.clone().applyMatrix3(normalMatrix).normalize();
    return {point, normal};
  }
  return {
    cast, reach,
    top(x, z, fallback) {return cast([x, reach, z], [0, -1, 0])?.point.y ?? fallback;},
    front(x, y, fallback, trunk = false) {return cast([x, y, reach], [0, 0, -1], trunk ? [...headMeshes, ...trunkMeshes] : headMeshes)?.point.z ?? fallback;},
    side(sign, y, z) {return cast([sign * reach, y, z], [-sign, 0, 0]);},
    ornament(origin, direction) {return cast(origin, direction, headMeshes.filter(o => o.name !== 'hair-strands'));},
    around(origin, direction, trunk = false, core = false) {
      const d = V(direction).normalize(), start = V(origin).addScaledVector(d, reach);
      return cast(start.toArray(), d.negate().toArray(), trunk ? [...headMeshes, ...trunkMeshes] : core ? headCoreMeshes : headMeshes);
    }
  };
}

function closedOutline(points) {
  return new THREE.CatmullRomCurve3(points.map(([x, y]) => new THREE.Vector3(x, y, 0)), true, 'centripetal').getPoints(64).slice(0, -1);
}

function upperEnvelope(points) {
  const ordered = [...points].sort((a, b) => a[0] - b[0]), hull = [];
  for (const point of ordered) {
    if (hull.length && Math.abs(point[0] - hull.at(-1)[0]) < .00001) {
      if (point[1] <= hull.at(-1)[1]) continue;
      hull.pop();
    }
    while (hull.length >= 2) {
      const a = hull.at(-2), b = hull.at(-1), cross = (b[0] - a[0]) * (point[1] - b[1]) - (b[1] - a[1]) * (point[0] - b[0]);
      if (cross < -.00001) break;
      hull.pop();
    }
    hull.push(point);
  }
  const envelope = hull.length >= 3 ? hull.reverse() : points;
  const width = Math.abs(envelope[0][0] - envelope.at(-1)[0]), arched = [];
  for (let i = 0; i < envelope.length; i++) {
    const a = envelope[i], b = envelope[i + 1]; arched.push(a);
    if (!b) continue;
    const span = Math.abs(b[0] - a[0]);
    // Bridging two equal-height lobes leaves a rigid horizontal beam. Give only
    // those broad, nearly level spans a low arch; preserve every contact end.
    if (span > width * .16 && Math.abs(b[1] - a[1]) < width * .025) {
      const lift = Math.min(width * .038, span * .10);
      for (let j = 1; j < 8; j++) {
        const t = j / 8;
        arched.push([THREE.MathUtils.lerp(a[0], b[0], t), THREE.MathUtils.lerp(a[1], b[1], t) + Math.sin(t * Math.PI) * lift,
          THREE.MathUtils.lerp(a[2], b[2], t)]);
      }
    }
  }
  return arched;
}

// A sewn beret has a gathered lower opening, a rounded crown and a soft slope.
// Its opening follows the crown itself; its upper volume remains smooth.
function softBeret(parent, {rx, rz, s, contact, center}, felt) {
  const count = 48, samples = 16, contactHeights = [];
  for (let i = 0; i < samples; i++) {
    const angle = i / samples * Math.PI * 2;
    contactHeights.push(contact.top(center[0] + Math.cos(angle) * rx * .70,
      center[2] + Math.sin(angle) * rz * .70, center[1] - .16 * s) - .018 * s);
  }
  const baseY = contactHeights.reduce((a, b) => a + b, 0) / samples;
  const heightAt = angle => {
    const t = (angle / (Math.PI * 2) * samples + samples) % samples, i = Math.floor(t), f = t - i;
    return THREE.MathUtils.lerp(contactHeights[i], contactHeights[(i + 1) % samples], f);
  };
  const profile = new THREE.CatmullRomCurve3([
    [0, -.08, .8], [.48, -.035, .95], [.70, 0, 1], [.88, .075, .75],
    [1, .18, .38], [.92, .33, .12], [.67, .46, 0], [.30, .52, 0], [0, .535, 0]
  ].map(V), false, 'catmullrom', .3);
  const vertices = [], uvs = [], indices = [], rings = 32;
  for (let j = 0; j <= rings; j++) {
    const profilePoint = profile.getPoint(j / rings), r = Math.max(0, profilePoint.x), lift = profilePoint.y, follow = clamp(profilePoint.z, 0, 1);
    for (let i = 0; i <= count; i++) {
      const angle = i / count * Math.PI * 2, x = Math.cos(angle) * rx * r - .06 * s * (1 - r), z = Math.sin(angle) * rz * r;
      const deviation = heightAt(angle) - baseY, tilt = .17 * Math.cos(angle) * rx;
      vertices.push(center[0] + x, baseY + lift * s + .17 * x + (deviation - tilt * .70) * follow, center[2] + z);
      uvs.push(i / count, j / rings);
      if (j < rings && i < count) {const a = j * (count + 1) + i, b = a + count + 1; indices.push(a, b, a + 1, b, b + 1, a + 1);}
    }
  }
  const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2)); geometry.setIndex(indices); geometry.computeVertexNormals();
  const crown = mesh(parent, geometry, felt); crown.name = 'soft-beret-crown';
  const tipX = center[0] - .06 * s, tipY = baseY + .535 * s;
  tube(parent, [[tipX, tipY - .018 * s, center[2]], [tipX + .014 * s, tipY + .041 * s, center[2]],
    [tipX + .036 * s, tipY + .060 * s, center[2] + .008 * s]], .025 * s, felt);
  parent.userData.contactFit = {kind: 'crown', samples, baseY, min: Math.min(...contactHeights), max: Math.max(...contactHeights)};
}

export function decorateAvatar(avatar, c) {
  const root = avatar.root, anchors = avatar.anchors || {}, colors = c.colors || {};
  const animalShapes = ['shiba', 'cat', 'rabbit', 'fox', 'panda', 'bear', 'otter', 'capybara', 'axolotl', 'penguin', 'owl', 'hedgehog'];
  const human = c.shape === 'human', animal = root.userData.anatomy === 'animal' || animalShapes.includes(c.shape);
  const bird = animal && ['penguin', 'owl'].includes(c.shape);
  const h = avatar.height || (human ? 2.8 : animal ? 2.5 : 2.1), w = avatar.width || 2.3;
  const s = clamp(Math.min(w / (human ? 1.5 : animal ? 1.8 : 2.3), h / (human ? 2.8 : animal ? 2.5 : 2.1)), .7, 1.3);
  const head = anchors.crown || anchors.headTop || [0, h, 0], face = anchors.face || [0, h * .58, w * .3];
  const neck = anchors.neck || [0, h * (human ? .49 : .34), face[2] * .82];
  const a = c.accessories || {}, action = c.action || 'idle', parts = [], animated = [];
  const accent = material(colors.accessory || '#33465a'), secondary = material(colors.secondary || '#f6ead9');
  const dark = material('#23272d', {roughness: .58}), gold = material('#e7bc72', {metalness: .24, roughness: .4});
  const naturalHand = human ? root.getObjectByName('hand')?.material : bird ? root.getObjectByName('wing-tip')?.material : null;
  const handMat = naturalHand || material(human ? colors.skin || '#e9bea2' : colors.body || '#319ceb');
  const armMat = human || bird ? root.getObjectByName('upper-arm')?.material || material(colors.clothing || colors.body || '#338c81') : handMat;
  const muted = material(new THREE.Color(colors.accessory || '#33465a').lerp(new THREE.Color('#ffffff'), .22));
  const part = (name, p) => {const g = group(root, name, p); parts.push(g); return g;};
  const point = (g, p) => V(p).applyMatrix4(g.matrix).toArray();
  let targets = null, prop = action === 'sleep' ? 'none' : (a.prop || 'none');
  const actionProp = {work: 'macbook', flowers: 'flowers', magic: 'wand', drink: 'tea', camera: 'camera', read: 'book'};
  if (actionProp[action]) prop = actionProp[action];
  const front = face[2] + .16 * s;

  const contact = contactSurface(avatar);
  const sideAtFace = [-1, 1].map(sign => contact.side(sign, face[1], head[2]));
  const headHalfWidth = Math.max(.35 * s, ...sideAtFace.map(hit => hit ? Math.abs(hit.point.x - head[0]) : w * .36));
  const hatRadius = clamp(headHalfWidth * .77, .43 * s, .85 * s);
  const headStyle = action === 'listen' ? 'headphones' : a.head || 'none';
  if (headStyle !== 'none') {
    const hat = part('head-' + headStyle);
    const headAccent=material(colors.headAccessory||colors.accessory||'#292A2D');
    const felt = headAccent.clone(); felt.roughness = 1;
    if (headStyle === 'beret') {
      softBeret(hat, {rx: hatRadius, rz: hatRadius * .78, s, contact,
        center: [head[0] - .045 * s, head[1], head[2] + .02 * s]}, felt);
    } else if (headStyle === 'headphones') {
      // Sample the actual head cross-section. A rounded triangle and a sphere
      // need different arcs and cup angles even when their total width matches.
      const earY = Math.min(head[1] - .26 * s, face[1] - .23 * s), z = head[2] + .015 * s;
      const center = [head[0], earY, z], pts = [];
      for (let i = 0; i <= 24; i++) {
        const angle = .055 + i / 24 * (Math.PI - .110), direction = [Math.cos(angle), Math.sin(angle), 0];
        const hit = contact.around(center, direction, false, true);
        const p = hit ? hit.point.addScaledVector(V(direction), .055 * s) : V(center).add(V([Math.cos(angle) * headHalfWidth, Math.sin(angle) * (head[1] - earY), 0]));
        pts.push(p.toArray());
      }
      // The band bridges grooves between curls and lobes instead of copying
      // every dent into a wavy wire. Ears remain in front of the headband.
      tube(hat, upperEnvelope(pts), .035 * s, headAccent);
      for (const sign of [-1, 1]) {
        const hit = contact.side(sign, earY, z), normal = hit?.normal || V([sign, 0, 0]);
        if (normal.x * sign < .2) normal.set(sign, .15, 0).normalize();
        const surface = hit?.point || V([head[0] + sign * headHalfWidth, earY, z]);
        const cup = group(hat, 'earcup-' + sign, surface.clone().addScaledVector(normal, .040 * s).toArray());
        cup.quaternion.setFromUnitVectors(V([1, 0, 0]), normal);
        ball(cup, [.14 * s, .270 * s, .198 * s], dark, [-.006 * s, 0, 0]);
        ball(cup, [.135 * s, .286 * s, .220 * s], headAccent, [.090 * s, 0, 0]);
        cup.userData.contactFit = {kind: 'side', point: surface.toArray(), normal: normal.toArray()};
      }
    } else {
      // Structured hats use a softly inset opening. Only the beret has an
      // asymmetric drape; bowler and top hat keep their own recognizable crown.
      const radius = hatRadius * (headStyle === 'wizard' ? .75 : .82), rz = radius * .83;
      const rimSamples = Array.from({length: 12}, (_, i) => {
        const angle = i / 12 * Math.PI * 2;
        return contact.top(head[0] + Math.cos(angle) * radius * .77,
          head[2] + Math.sin(angle) * rz * .77, head[1] - .10 * s);
      });
      const seatY = rimSamples.reduce((a, b) => a + b, 0) / rimSamples.length - .035 * s;
      hat.position.set(head[0], seatY, head[2]);
      if (headStyle === 'tuft') {
        hat.position.set(head[0],head[1]-.025*s,head[2]);
        for(const [i,x] of [-.16,0,.16].entries()){const petal=ball(hat,[.095*s,(i===1?.22:.17)*s,.105*s],felt,[x*s,.08*s,0]);petal.rotation.z=(1-i)*.40;petal.name='tuft-lobe';petal.userData.surfaceMaterial='plush';avatar.surfaces?.push(petal);}
      } else if (headStyle === 'pom') {
        hat.position.set(head[0], head[1] + .23 * s, head[2]);
        const pom = ball(hat, [.255 * s, .26 * s, .255 * s], felt); pom.name = 'hat-pom';
        pom.userData.surfaceMaterial = 'micro'; avatar.surfaces?.push(pom);
      } else if (['beanie', 'cap'].includes(headStyle)) {
        const cap = headStyle === 'cap', dome = mesh(hat,
          new THREE.SphereGeometry(radius, 36, 24, 0, Math.PI * 2, 0, Math.PI / 2), felt);
        dome.scale.set(1, cap ? .87 : 1.07, .83);
        // A single soft cuff avoids the previous pair of hard black rings.
        ellipse(hat, radius * .97, rz * .97, .010 * s, (cap ? .024 : .040) * s, felt);
        if (cap) {
          const visor = ball(hat, [radius * .81, .034 * s, radius * .56], accent, [0, -.008 * s, rz * .81]);
          visor.rotation.x = -.10;
          ball(hat, [.035 * s, .017 * s, .035 * s], muted, [0, radius * .875, 0]);
        } else {
          for (let i = 0; i < 16; i++) {
            const phi = i * Math.PI * 2 / 16, pts = [];
            for (let j = 0; j <= 12; j++) {
              const t = .10 + j / 12 * 1.43;
              pts.push([Math.sin(t) * Math.cos(phi) * (radius + .002), Math.cos(t) * radius * 1.07,
                Math.sin(t) * Math.sin(phi) * (rz + .002)]);
            }
            tube(hat, pts, .0025 * s, muted);
          }
        }
      } else if (headStyle === 'crown') {
        const crownRx = radius * .85, crownRz = rz * .85, count = 80, thickness = .022 * s;
        const position = [], index = [], topEdge = [];
        for (let i = 0; i <= count; i++) {
          const angle = i / count * Math.PI * 2, ca = Math.cos(angle), sa = Math.sin(angle);
          const base = -.025 * s;
          const high = base + (.115 + .145 * ((Math.cos((angle - Math.PI / 2) * 5) + 1) * .5) ** 2) * s;
          position.push(ca * crownRx, base, sa * crownRz, ca * crownRx, high, sa * crownRz,
            ca * (crownRx - thickness), high, sa * (crownRz - thickness), ca * (crownRx - thickness), base, sa * (crownRz - thickness));
          topEdge.push([ca * crownRx, high, sa * crownRz]);
          if (i < count) for (let j = 0; j < 4; j++) {const a = i * 4 + j, b = i * 4 + (j + 1) % 4; index.push(a, a + 4, b, b, a + 4, b + 4);}
        }
        const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.Float32BufferAttribute(position, 3)); geometry.setIndex(index); geometry.computeVertexNormals();
        mesh(hat, geometry, accent);
        tube(hat, topEdge.slice(0, -1), .013 * s, accent, true);
        for (let i = 0; i < 5; i++) {const p = topEdge[(count / 4 + i * count / 5) % count]; ball(hat, [.025 * s, .027 * s, .025 * s], accent, p);}
      } else if (headStyle === 'bowler' || headStyle === 'topHat') {
        const top = headStyle === 'topHat', crownHeight = radius * (top ? 1.15 : .91);
        const profile = top ? [[0, -.025], [.69, -.025], [.73, .08], [.69, .88], [.67, 1], [0, 1]]
          : [[0, -.025], [.78, -.025], [.87, .11], [.86, .46], [.71, .79], [.40, .98], [0, 1.04]];
        const curve = new THREE.CatmullRomCurve3(profile.map(([r, y]) => V([r * radius, y * crownHeight, 0])), false, 'catmullrom', .20);
        const geometry = new THREE.LatheGeometry(curve.getPoints(32).map(p => new THREE.Vector2(Math.max(0, p.x), p.y)), 48);
        const crown = mesh(hat, geometry, felt); crown.scale.z = .83;
        const brim = ball(hat, [radius * 1.08, .045 * s, rz * 1.06], felt, [0, .005 * s, 0]);
        const bandMat = material(new THREE.Color(colors.accessory || '#33465a').lerp(new THREE.Color('#77828f'), .12), {roughness: .76});
        ellipse(hat, radius * (top ? .705 : .862), rz * (top ? .705 : .862), .11 * s, .022 * s, bandMat);
      } else if (headStyle === 'flower') {
        let attachment = null;
        // A star has no surface beside its highest tip. First find the real
        // top at the chosen horizontal position, then seat the flower just
        // below that local edge on the visible front surface.
        for (const fraction of [.67, .52, .36, .18, 0]) {
          const x = head[0] - headHalfWidth * fraction;
          const top = contact.ornament([x, contact.reach, head[2]], [0, -1, 0]);
          if (!top) continue;
          for (const drop of [.14, .20, .28, .36]) {
            const hit = contact.ornament([x, top.point.y - drop * s, contact.reach], [0, 0, -1]);
            if (!hit) continue;
            attachment = hit;
            if (hit.normal.z >= .58) break;
          }
          if (attachment) break;
        }
        // Valid avatar heads provide a sampled point above. The center-face ray
        // is a geometric fallback too, so an absent side surface never floats.
        attachment ||= contact.ornament([face[0], face[1], contact.reach], [0, 0, -1]);
        if (attachment) {
          hat.position.copy(attachment.point).addScaledVector(attachment.normal, .010 * s);
          hat.quaternion.setFromUnitVectors(V([0, 0, 1]), attachment.normal); hat.rotateZ(-.2);
          hat.userData.contactFit = {kind: 'ornament', point: attachment.point.toArray(), normal: attachment.normal.toArray(), offset: .010 * s};
        }
        flower(hat, .15 * s, secondary, gold);
        ball(hat, [.042 * s, .055 * s, .023 * s], material('#678b62'), [0, 0, -.020 * s]);
        const leaf = ball(hat, [.044 * s, .115 * s, .021 * s], material('#678b62'), [.105 * s, -.06 * s, -.025 * s]);
        leaf.rotation.z = -.8;
      } else if (headStyle === 'wizard') {
        ball(hat, [radius * 1.14, .042 * s, rz * 1.14], accent);
        const profile = [[.92, 0], [.88, .10], [.69, .27], [.47, .43], [.22, .58], [.06, .65], [0, .66]];
        const geometry = new THREE.LatheGeometry(profile.map(p => new THREE.Vector2(p[0] * radius, p[1] * s)), 40);
        const pos = geometry.attributes.position;
        for (let i = 0; i < pos.count; i++) pos.setX(i, pos.getX(i) + .15 * s * (pos.getY(i) / (.66 * s)) ** 2);
        geometry.computeVertexNormals(); mesh(hat, geometry, accent);
        ellipse(hat, radius * .88, radius * .88, .10 * s, .022 * s, secondary);
        star(hat, .062 * s, gold, [.03 * s, .28 * s, radius * .69], .012 * s);
      }
    }
  }

  // Each lens follows its own eye's surface normal. The front of the eyeball
  // determines lens depth; a rigid plane across both eyes cuts into curved heads.
  if (a.face && a.face !== 'none') {
    root.updateMatrixWorld(true);
    const inverseRoot = root.matrixWorld.clone().invert(), rootQ = root.getWorldQuaternion(new THREE.Quaternion()).invert();
    const eyePoses = avatar.eyeGroups?.length >= 2 ? avatar.eyeGroups.map(eye => {
      const center = eye.getWorldPosition(new THREE.Vector3()).applyMatrix4(inverseRoot);
      const quaternion = rootQ.clone().multiply(eye.getWorldQuaternion(new THREE.Quaternion()));
      const frameInverse = new THREE.Matrix4().compose(center, quaternion, V([1, 1, 1])).invert();
      const bounds = new THREE.Box3();
      eye.traverse(o => {
        if (!o.isMesh || !o.geometry || !o.visible) return;
        o.geometry.computeBoundingBox();
        bounds.union(o.geometry.boundingBox.clone().applyMatrix4(frameInverse.clone().multiply(inverseRoot).multiply(o.matrixWorld)));
      });
      return {center, quaternion, bounds};
    }) : [-1, 1].map(sign => ({center: V([sign * w * .13, face[1], face[2]]), quaternion: new THREE.Quaternion(),
      bounds: new THREE.Box3(V([-.07 * s, -.12 * s, 0]), V([.07 * s, .12 * s, .04 * s]))}));
    eyePoses.sort((l, r) => l.center.x - r.center.x);
    const glasses = part('face-' + a.face), shade = ['sunglasses', 'catEye', 'roundSun'].includes(a.face);
    const monocle = a.face === 'monocle', spacing = Math.abs(eyePoses[1].center.x - eyePoses[0].center.x);
    const lenses = material(shade ? '#15202a' : '#d6eef5', {transparent: !shade, opacity: shade ? 1 : .065,
      roughness: shade ? .33 : .18, metalness: shade ? .06 : 0, depthWrite: shade, side: THREE.DoubleSide});
    const lensFrames = [];
    eyePoses.forEach(({center, quaternion, bounds}, i) => {
      if (monocle && i === 0) return;
      const sign = i ? 1 : -1, eyeWidth = bounds.max.x - bounds.min.x, eyeHeight = bounds.max.y - bounds.min.y;
      const rx = Math.max(c.shape==='triangle'&&a.face==='round'?.25*s:c.shape==='diamond'&&a.face==='sunglasses'?.34*s:0,clamp(spacing * (a.face==='roundSun'?.43:.41), .11 * s, .27 * s), eyeWidth * .5 + .024 * s);
      const ry = Math.max(c.shape==='triangle'&&a.face==='round'?.31*s:0,rx * (a.face === 'square' || a.face === 'sunglasses' ? .81 : 1.04), eyeHeight * .5 + .021 * s);
      const offset = Math.max(.025 * s, bounds.max.z + .022 * s);
      const g = group(glasses, 'lens-' + i, center.clone().addScaledVector(V([0, 0, 1]).applyQuaternion(quaternion), offset).toArray());
      g.quaternion.copy(quaternion);
      let outline;
      if (a.face === 'catEye') {
        outline = closedOutline([[-.96, .48], [-.86, -.31], [-.35, -.64], [.34, -.62], [.83, -.29],
          [1.13, .77], [.57, .60], [0, .54]].map(([x, y]) => [x * rx * sign, y * ry]));
      } else if (a.face === 'sunglasses') {
        outline=closedOutline([[-.96,.66],[-.38,.72],[.34,.69],[.98,.61],[.90,-.22],[.64,-.69],[0,-.76],[-.65,-.62],[-.90,-.21]].map(([x,y])=>[x*rx,y*ry]));
      } else if (a.face === 'square') {
        outline = roundShape(rx * 2.08, ry * 1.94, rx * .28).getPoints(12).slice(0, -1).map(p => V([p.x, p.y, 0]));
      } else outline = Array.from({length: 64}, (_, j) => {const t = j / 64 * Math.PI * 2; return V([Math.cos(t) * rx, Math.sin(t) * ry, 0]);});
      tube(g, outline.map(p => p.toArray()), (shade ? .019 : .013) * s, accent, true);
      const shape = new THREE.Shape(outline.map(p => new THREE.Vector2(p.x, p.y)));
      // Clear frames leave the eye color untouched in both renderers. Only
      // opaque sunglasses need a filled lens surface in this stylized model.
      if (shade) {const lens = mesh(g, new THREE.ShapeGeometry(shape, 48), lenses, [0, 0, .001 * s]); lens.name = 'eyewear-lens';}
      g.updateMatrix();
      g.userData.contactFit = {kind: 'eye', offset, eyeDepth: bounds.max.z, normal: V([0, 0, 1]).applyQuaternion(quaternion).toArray()};
      lensFrames.push({i, sign, g, rx, ry, center, outer: point(g, [sign * rx, .03 * ry, 0]), inner: point(g, [-sign * rx, .03 * ry, 0])});
      if (!monocle) {
        const outer = point(g, [sign * rx, .03 * ry, 0]), endZ = head[2] + .015 * s;
        const hit = contact.side(sign, center.y - .022 * s, endZ);
        const end = hit ? hit.point.addScaledVector(hit.normal, -.025 * s).toArray()
          : [head[0] + sign * headHalfWidth, center.y - .022 * s, endZ];
        tube(glasses, [outer, [outer[0] + sign * .025 * s, outer[1], outer[2] - .042 * s],
          [THREE.MathUtils.lerp(outer[0], end[0], .65), THREE.MathUtils.lerp(outer[1], end[1], .65), THREE.MathUtils.lerp(outer[2], end[2], .72)], end], .012 * s, accent);
      }
    });
    if (monocle) {
      const lens = lensFrames[0], start = point(lens.g, [lens.rx * .72, -lens.ry * .72, 0]);
      const tailX = start[0] + .15 * s, tailY = start[1] - .25 * s;
      tube(glasses, [start, [start[0] + .025 * s, start[1] - .095 * s, start[2] - .015 * s],
        [tailX, tailY, contact.front(tailX, tailY, start[2] - .065 * s) + .023 * s],
        [tailX + .048 * s, tailY + .012 * s, contact.front(tailX + .048 * s, tailY + .012 * s, start[2] - .09 * s) + .023 * s]], .011 * s, accent);
    } else {
      const left = lensFrames[0].inner, right = lensFrames[1].inner;
      const middleX = (left[0] + right[0]) / 2, middleY = (left[1] + right[1]) / 2 + .033 * s;
      const middleZ = Math.max((left[2] + right[2]) / 2, contact.front(middleX, middleY, face[2]) + .032 * s);
      tube(glasses, [left, [middleX, middleY, middleZ], right], .013 * s, accent);
    }
  }

  if (a.neck && a.neck !== 'none') {
    const neckY = neck[1];
    const g = part('neck-' + a.neck, [0, neckY, 0]);
    const rx = human ? .32 * s : animal ? .46 * s : w * .46;
    const rz = contact.front(0, neckY, anchors.neckFront?.[2] || face[2] * .86, true) + .018 * s;
    if (a.neck === 'bow') {
      for (const sign of [-1, 1]) {
        const shape = new THREE.Shape(); shape.moveTo(0, 0);
        shape.bezierCurveTo(.056 * s, .025 * s, .17 * s, .12 * s, .225 * s, .11 * s);
        shape.quadraticCurveTo(.25 * s, .1 * s, .25 * s, 0);
        shape.quadraticCurveTo(.25 * s, -.10 * s, .215 * s, -.11 * s);
        shape.bezierCurveTo(.15 * s, -.10 * s, .052 * s, -.03 * s, 0, 0);
        const geometry = new THREE.ExtrudeGeometry(shape, {depth: .032 * s, bevelEnabled: true,
          bevelSize: .014 * s, bevelThickness: .022 * s, bevelSegments: 4, curveSegments: 16});
        const wing = mesh(g, geometry, accent, [sign * .005 * s, 0, rz + .019 * s]); wing.scale.set(sign*(c.family==='dots'?1.85:1),c.family==='dots'?1.65:1,1); wing.rotation.z = sign * -.04;
      }
      ball(g, [(c.family==='dots'?.075:.052) * s, (c.family==='dots'?.090:.065) * s, .059 * s], accent, [0, 0, rz + .040 * s]);
    } else {
      const ring = Array.from({length: 24}, (_, i) => {
        const angle = i / 24 * Math.PI * 2, direction = [Math.cos(angle), 0, Math.sin(angle)];
        const hit = contact.around([0, neckY, 0], direction, true);
        return hit ? hit.point.addScaledVector(V(direction), .008 * s).sub(V([0, neckY, 0])).toArray()
          : [Math.cos(angle) * rx, 0, Math.sin(angle) * rz];
      });
      tube(g, ring, (a.neck === 'scarf' ? .070 : .034) * s, accent, true);
      if (a.neck === 'scarf') {
        for (const [x, length, tilt] of [[-.12, .36, -.13], [.04, .27, .13]]) {
          const end = group(g, 'scarf-end', [x * s, -.075 * s, rz + .02 * s]); end.rotation.z = tilt;
          box(end, [.135 * s, length * s, .065 * s], accent, [0, -length * s / 2, 0], .04 * s);
          for (let i = 0; i < 5; i++) box(end, [.105 * s, .006 * s, .005 * s], muted,
            [0, (-length + .03 + i * .027) * s, .035 * s], .002 * s);
          animated.push(t => {end.rotation.z = tilt + Math.sin(t * 1.3 + x) * .016;});
        }
      } else ball(g, [.068 * s, .081 * s, .025 * s], gold, [0, -.085 * s, rz + .043 * s]);
    }
  }

  if (prop === 'macbook') {
    const y = Math.min(h * .28, face[1] - .60 * s), g = part('prop-macbook', [0, Math.max(.28 * s, y), front]);
    g.rotation.y = -.64;
    const ww = 1.10 * s, dd = .69 * s, sh = clamp(face[1] - g.position.y - .22 * s, .29 * s, .38 * s);
    const silver = material('#bdc3ca', {metalness: .7, roughness: .31}), keys = material('#4a5058', {roughness: .62});
    box(g, [ww, .043 * s, dd], silver, [0, 0, 0], .045 * s);
    for (let row = 0; row < 3; row++) for (let col = 0; col < 10; col++)
      box(g, [.078 * s, .009 * s, .055 * s], keys, [(col - 4.5) * .098 * s, .026 * s, (row * .079 - .06) * s], .014 * s);
    box(g, [.32 * s, .004 * s, .135 * s], muted, [0, .024 * s, -.225 * s], .018 * s);
    const lid = group(g, 'laptop-lid', [0, .025 * s, dd * .45]); lid.rotation.x = .54;
    box(lid, [ww, sh, .055 * s], silver, [0, sh / 2, 0], .043 * s);
    const screen = material('#203943', {roughness: .42, emissive: '#214c58', emissiveIntensity: .23});
    box(lid, [ww - .07 * s, sh - .055 * s, .005 * s], screen, [0, sh / 2, -.024 * s], .027 * s);
    const ui = material('#8daea7', {emissive: '#618c83', emissiveIntensity: .15});
    for (let row = 0; row < 3; row++) box(lid, [(row ? .38 : .63) * s, .012 * s, .004 * s], ui,
      [-.11 * s, sh * .67 - row * .05 * s, -.028 * s], .003 * s);
    ball(lid, [.009 * s, .009 * s, .004 * s], dark, [0, sh - .018 * s, -.025 * s]);
    g.updateMatrix(); targets = [[-.28 * s, .060 * s, -.055 * s], [.28 * s, .060 * s, -.055 * s]].map(p => point(g, p));
  } else if (prop === 'flowers') {
    const y = Math.min(h * .33, face[1] - .60 * s), g = part('prop-flowers', [0, y, front + .03 * s]);
    g.rotation.z = -.08;
    const green = material('#6c8d64'), paper = material('#e1c7ac', {side: THREE.DoubleSide});
    mesh(g, new THREE.CylinderGeometry(.25 * s, .065 * s, .36 * s, 32, 1, true), paper, [0, .02 * s, 0]);
    const blooms = [[-.18, .36, .02], [.16, .39, 0], [0, .47, -.03], [-.07, .28, .14], [.13, .27, .15]];
    const petals = [material('#f0bbbd'), secondary, material('#dda375'), material('#d4b5ce'), secondary];
    blooms.forEach((p, i) => {
      rod(g, [0, -.25 * s, 0], p.map(n => n * s), .014 * s, green);
      const f = flower(g, .12 * s, petals[i], gold, p.map(n => n * s)); f.rotation.x = -.18;
    });
    const leaf = ball(g, [.065 * s, .16 * s, .027 * s], green, [.22 * s, .20 * s, -.02 * s]); leaf.rotation.z = -.7;
    ellipse(g, .077 * s, .075 * s, -.12 * s, .018 * s, accent);
    g.updateMatrix(); targets = [[-.105 * s, -.11 * s, .025 * s], [.105 * s, -.07 * s, .025 * s]].map(p => point(g, p));
  } else if (prop === 'wand') {
    const g = part('prop-wand', [w * .48, h * .43, front]); g.rotation.z = -.12;
    rod(g, [0, -.20 * s, 0], [0, .48 * s, 0], .029 * s, gold);
    star(g, .16 * s, secondary, [0, .56 * s, 0], .04 * s);
    const sparkles = [[-.19, .65, 0], [.21, .48, .015], [.15, .78, -.02]].map((p, i) =>
      star(g, (.03 + i * .008) * s, gold, p.map(n => n * s), .009 * s));
    animated.push(t => sparkles.forEach((o, i) => {o.rotation.z = Math.sin(t * .8 + i) * .2; o.scale.setScalar(.84 + Math.sin(t * 1.4 + i) * .16);}));
    g.updateMatrix(); targets = [null, point(g, [0, 0, 0])];
  } else if (prop === 'tea') {
    const drinking = c.mouth !== 'none' && action === 'drink';
    const y = Math.min(h * (drinking ? .49 : .34), face[1] - (drinking ? .58 : .53) * s);
    const g = part('prop-tea', [w * .13, y, front + .05 * s]), milk = material('#cba981');
    mesh(g, new THREE.CylinderGeometry(.165 * s, .128 * s, .35 * s, 36), milk);
    mesh(g, new THREE.CylinderGeometry(.175 * s, .175 * s, .032 * s, 36), secondary, [0, .185 * s, 0]);
    const mouth = anchors.mouth || [face[0], face[1] - .25 * s, face[2]];
    const strawTop = drinking ? [mouth[0] - g.position.x, mouth[1] - y, mouth[2] + .025 * s - g.position.z]
      : [.04 * s, .48 * s, -.05 * s];
    tube(g, [[.04 * s, .18 * s, -.02 * s], [.04 * s, .18 * s + (strawTop[1] - .18 * s) * .64, -.025 * s], strawTop], .019 * s, accent);
    for (let i = 0; i < 6; i++) {
      const ang = i * 1.83; ball(g, [.019 * s, .019 * s, .013 * s], dark, [Math.sin(ang) * .08 * s, (-.125 + i % 2 * .03) * s, .121 * s]);
    }
    g.updateMatrix(); targets = [[-.095 * s, -.17 * s, 0], [.16 * s, .0, 0]].map(p => point(g, p));
  } else if (prop === 'camera') {
    const g = part('prop-camera', [0, Math.min(face[1] - .28 * s, h * .61), front + .04 * s]);
    box(g, [.65 * s, .36 * s, .25 * s], accent, [0, 0, 0], .06 * s);
    box(g, [.15 * s, .09 * s, .18 * s], dark, [0, .205 * s, -.015 * s], .025 * s);
    const barrel = mesh(g, new THREE.CylinderGeometry(.148 * s, .153 * s, .19 * s, 40), dark, [.03 * s, 0, .19 * s]); barrel.rotation.x = Math.PI / 2;
    const rim = mesh(g, new THREE.TorusGeometry(.124 * s, .014 * s, 8, 40), gold, [.03 * s, 0, .29 * s]);
    const lens = material('#203b4c', {metalness: .35, roughness: .15});
    ball(g, [.12 * s, .12 * s, .018 * s], lens, [.03 * s, 0, .287 * s]);
    box(g, [.115 * s, .061 * s, .015 * s], secondary, [-.20 * s, .105 * s, .135 * s], .014 * s);
    ball(g, [.045 * s, .02 * s, .04 * s], dark, [.22 * s, .194 * s, .015 * s]);
    g.updateMatrix(); targets = [[-.31 * s, -.045 * s, .015 * s], [.31 * s, .015 * s, .015 * s]].map(p => point(g, p));
  } else if (prop === 'book') {
    const g = part('prop-book', [0, Math.min(h * .34, face[1] - .47 * s), front + .07 * s]);
    const pages = material('#f5eddd'), ink = material('#bcc0b1'); g.rotation.x = .12;
    for (const sign of [-1, 1]) {
      const half = group(g, 'book-half'); half.rotation.z = sign * .16;
      box(half, [.48 * s, .029 * s, .59 * s], accent, [sign * .238 * s, 0, 0], .018 * s);
      for (let i = 0; i < 3; i++) box(half, [.45 * s, .013 * s, .55 * s], pages,
        [sign * .227 * s, (.022 + i * .014) * s, 0], .013 * s);
      for (let i = 0; i < 5; i++) box(half, [(.25 - i % 2 * .04) * s, .003 * s, .007 * s], ink,
        [sign * .245 * s, .059 * s, (i - 2) * .068 * s], .002 * s);
    }
    g.updateMatrix(); targets = [[-.39 * s, .03 * s, .035 * s], [.39 * s, .03 * s, .035 * s]].map(p => point(g, p));
  }

  // Preserve sculpted resting limbs. Rebuild a pair only when a gesture or a
  // prop requires new contact targets; hind paws remain part of the body.
  const gestures = ['wave', 'thinking', 'dance', 'celebrate', 'love'];
  const needsArms = human || animal || prop !== 'none' || gestures.includes(action) || c.pose === 'chin' || ['hands', 'both'].includes(c.limbs);
  const preserveRest = (human || animal) && prop === 'none' && !gestures.includes(action) && c.pose !== 'chin';
  const arms = preserveRest ? [...(avatar.arms || [])] : [], palms = [];
  if (!preserveRest) (avatar.arms || []).forEach(o => {o.visible = false;});
  if (needsArms && !preserveRest) {
    const restY = human ? h * .22 : animal && !bird ? .13 : animal ? h * .17 : h * .32;
    const starts = [anchors.shoulderL || [-w * .4, h * .46, 0], anchors.shoulderR || [w * .4, h * .46, 0]];
    const ends = starts.map((p,i)=>[animal&&!bird?p[0]*.84:(i?1:-1)*w*(animal?.30:.39),restY,animal&&!bird?Math.max(.48,face[2]*.78):face[2]*.73]);
    if (targets) targets.forEach((p, i) => {if (p) ends[i] = p;});
    if (!targets) {
      if (action === 'wave') ends[1] = [w * .57, face[1] + .27 * s, face[2] * .67];
      if (action === 'thinking' || c.pose === 'chin') ends[1] = [w * .20, face[1] - .25 * s, face[2] + .07 * s];
      if (action === 'dance') {
        ends[0] = [-w * .58, h * .44, face[2] * .60]; ends[1] = [w * .56, h * .64, face[2] * .67];
      }
      if (action === 'celebrate') for (let i = 0; i < 2; i++) ends[i] = [(i ? 1 : -1) * w * .53, face[1] + .31 * s, face[2] * .70];
      if (action === 'love') for (let i = 0; i < 2; i++) ends[i] = [(i ? 1 : -1) * .12 * s, face[1] - .39 * s, front];
    }
    for (let i = 0; i < 2; i++) {
      const sign = i ? 1 : -1, end = V(ends[i]);
      if (!human && !animal) {
        // A plush symbol grows a short mitten arm out of its visible side,
        // instead of stretching a long hose from an invisible rear shoulder.
        const x = sign * (targets ? Math.min(w * .32, Math.abs(end.x) + .15 * s) : w * .40);
        const y = targets ? clamp(end.y + .12 * s, h * .23, face[1] - .20 * s) : h * .43;
        starts[i] = [x, y, contact.front(x, y, face[2] * .60) - .050 * s];
      }
      const start = V(starts[i]), d = end.clone().sub(start);
      // The group is the shoulder pivot; its curve and palm are shoulder-local.
      const arm = part('posed-arm-' + i, starts[i]), radius = (human ? .078 : animal ? .115 : .102) * s;
      const elbow = d.clone().multiplyScalar(.48); elbow.x += sign * (animal&&!bird&&!targets?.035:.11) * s;
      elbow.y -= .11 * s; elbow.z += .05 * s;
      const wrist = d.clone().multiplyScalar(.85); wrist.z += .013 * s;
      const limb = tube(arm, [[0, 0, 0], elbow.toArray(), wrist.toArray(), d.toArray()], radius, armMat);
      // Broad at the embedded shoulder, narrower at the wrist, with no separate
      // elbow beads. This keeps the silhouette soft without adding extra limbs.
      {
        const geometry = limb.geometry, positions = geometry.attributes.position;
        const {path, tubularSegments, radialSegments} = geometry.parameters;
        for (let ring = 0; ring <= tubularSegments; ring++) {
          const t = ring / tubularSegments, center = path.getPointAt(t), thickness = 1.12 - .35 * t + .035 * Math.sin(t * Math.PI);
          for (let j = 0; j <= radialSegments; j++) {
            const k = ring * (radialSegments + 1) + j;
            positions.setXYZ(k, center.x + (positions.getX(k) - center.x) * thickness,
              center.y + (positions.getY(k) - center.y) * thickness, center.z + (positions.getZ(k) - center.z) * thickness);
          }
        }
        geometry.computeVertexNormals();
      }
      if (bird) {
        // Flatten each tube cross-section around its own centerline, retaining contact.
        const geometry = limb.geometry, positions = geometry.attributes.position;
        const {path, tubularSegments, radialSegments} = geometry.parameters;
        for (let ring = 0; ring <= tubularSegments; ring++) {
          const t = ring / tubularSegments, center = path.getPointAt(t), breadth = .85 + Math.sin(t * Math.PI) * .64;
          for (let j = 0; j <= radialSegments; j++) {
            const k = ring * (radialSegments + 1) + j;
            positions.setXYZ(k, center.x + (positions.getX(k) - center.x) * breadth,
              center.y + (positions.getY(k) - center.y) * breadth, center.z + (positions.getZ(k) - center.z) * .4);
          }
        }
        geometry.computeVertexNormals();
      }
      limb.userData.region = human ? 'clothing' : 'body';
      limb.userData.surfaceMaterial = human ? armMat.name || 'knit' : c.material || 'plush';
      limb.userData.furLength = c.material === 'micro' ? .011 : .024;
      const palm = group(arm, (bird ? 'wing-tip-' : 'hand-') + i, d.toArray()), rr = (human ? .102 : animal ? .128 : .115) * s;
      const palmMesh = ball(palm, [rr, rr * (bird ? 1.10 : human ? 1.05 : .83), rr * (bird ? .40 : .82)], handMat);
      palmMesh.userData.region = human ? 'skin' : 'body';
      palmMesh.userData.surfaceMaterial = human ? handMat.name || 'skin' : c.material || 'plush';
      palmMesh.userData.furLength = c.material === 'micro' ? .011 : .024;
      if (human) {
        // Four short rounded fingertips and a separate thumb read as a doll hand.
        palm.rotation.x = prop === 'macbook' ? Math.PI * .4 : -.22;
        for (let j = 0; j < 4; j++) ball(palm, [.023 * s, (.065 - Math.abs(j - 1.5) * .008) * s, .025 * s], handMat,
          [(j - 1.5) * .043 * s, .067 * s, .018 * s]);
        const thumb = ball(palm, [.055 * s, .059 * s, .035 * s], handMat, [-sign * .09 * s, .006 * s, .035 * s]);
        thumb.rotation.z = sign * .42;
      }
      arms.push(arm); palms.push(palm);
      if (Array.isArray(avatar.surfaces)) avatar.surfaces.push(limb, palmMesh);
      if (!targets && (action === 'wave' && i === 1 || action === 'celebrate'))
        animated.push(t => {arm.rotation.z = Math.sin(t * 3.2 + i * .6) * .075;});
      if (!targets && action === 'dance') animated.push(t => {arm.rotation.z = Math.sin(t * 3 + i * 1.1) * .065;});
      if (prop === 'macbook') animated.push(t => {palm.rotation.z = Math.sin(t * 4.2 + i * 1.7) * .022;});
    }
  }
  avatar.arms = arms;

  // Reparent without moving the finished attachments; subsequent poses follow anatomy.
  root.updateMatrixWorld(true);
  for (const attachment of parts) {
    if (avatar.head && (attachment.name.startsWith('head-') || attachment.name.startsWith('face-')))
      avatar.head.attach(attachment);
    else if (human && avatar.torso && attachment.name.startsWith('neck-'))
      avatar.torso.attach(attachment);
  }
  root.updateMatrixWorld(true);
  return {parts, constraintNotes: [], tick(t) {for (const update of animated) update(Number.isFinite(t) ? t : 0);}};
}
