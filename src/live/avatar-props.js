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

  // Compact hats sit partly inside the crown so that no floating gap is visible.
  const headStyle = action === 'listen' ? 'headphones' : a.head || 'none';
  if (headStyle !== 'none') {
    const hat = part('head-' + headStyle, [head[0], head[1] - .11 * s, head[2]]);
    if (headStyle === 'beret') {
      hat.rotation.z = -.16; hat.position.x -= .08 * s;
      ball(hat, [.56 * s, .14 * s, .45 * s], accent, [0, .105 * s, 0]);
      ellipse(hat, .425 * s, .36 * s, 0, .035 * s, accent);
      tube(hat, [[.035 * s, .225 * s, 0], [.045 * s, .29 * s, 0], [.10 * s, .305 * s, .015 * s]], .027 * s, accent);
    } else if (headStyle === 'beanie' || headStyle === 'cap') {
      const cap = headStyle === 'cap', radius = (cap ? .48 : .5) * s;
      const dome = mesh(hat, new THREE.SphereGeometry(radius, 36, 24, 0, Math.PI * 2, 0, Math.PI / 2), accent);
      dome.scale.y = cap ? .65 : .78;
      ellipse(hat, radius, radius * .96, .015 * s, (cap ? .025 : .055) * s, muted);
      const count = cap ? 6 : 22;
      for (let i = 0; i < count; i++) {
        const phi = i * Math.PI * 2 / count, pts = [];
        for (let j = 0; j <= 12; j++) {
          const t = .05 + j / 12 * 1.49;
          pts.push([Math.sin(t) * Math.cos(phi) * (radius + .004), Math.cos(t) * radius * dome.scale.y,
            Math.sin(t) * Math.sin(phi) * (radius + .004)]);
        }
        tube(hat, pts, (cap ? .007 : .005) * s, muted);
      }
      if (cap) {
        ball(hat, [.44 * s, .035 * s, .30 * s], accent, [0, -.015 * s, .40 * s]);
        ball(hat, [.045 * s, .02 * s, .045 * s], muted, [0, .32 * s, 0]);
      }
    } else if (headStyle === 'flower') {
      hat.position.set(head[0] - w * .24, head[1] - .17 * s, head[2] + .24 * s);
      flower(hat, .18 * s, secondary, gold); hat.rotation.z = -.2;
      const leaf = ball(hat, [.055 * s, .14 * s, .025 * s], material('#678b62'), [.13 * s, -.07 * s, -.025 * s]);
      leaf.rotation.z = -.8;
    } else if (headStyle === 'wizard') {
      ellipse(hat, .42 * s, .36 * s, .01 * s, .065 * s, accent);
      const profile = [[.33, 0], [.30, .10], [.235, .27], [.16, .43], [.075, .58], [.02, .65], [0, .66]];
      const geometry = new THREE.LatheGeometry(profile.map(p => new THREE.Vector2(p[0] * s, p[1] * s)), 40);
      const pos = geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) pos.setX(i, pos.getX(i) + .15 * s * (pos.getY(i) / (.66 * s)) ** 2);
      geometry.computeVertexNormals(); mesh(hat, geometry, accent);
      ellipse(hat, .307 * s, .307 * s, .10 * s, .034 * s, secondary);
      star(hat, .068 * s, gold, [.03 * s, .28 * s, .225 * s], .012 * s);
      star(hat, .035 * s, gold, [-.13 * s, .16 * s, .27 * s], .01 * s);
    } else if (headStyle === 'headphones') {
      hat.position.set(0, 0, 0);
      const earY = Math.min(head[1] - .32 * s, face[1] + .05 * s), rx = w * .5 + .025 * s;
      const ry = head[1] - earY + .12 * s, z = head[2] - .14 * s, pts = [];
      for (let i = 0; i <= 36; i++) {
        const t = i / 36 * Math.PI; pts.push([head[0] + Math.cos(t) * rx, earY + Math.sin(t) * ry, z]);
      }
      tube(hat, pts, .052 * s, accent);
      for (const sign of [-1, 1]) {
        ball(hat, [.10 * s, .22 * s, .18 * s], dark, [head[0] + sign * (rx - .02 * s), earY, z]);
        ball(hat, [.075 * s, .20 * s, .172 * s], accent, [head[0] + sign * (rx + .06 * s), earY, z]);
        rod(hat, [sign * rx, earY + .10 * s, z], [sign * rx, earY + .24 * s, z], .024 * s, gold);
      }
    }
  }

  // Individual eye anchors also work when the avatar's head has a local transform.
  if (a.face && a.face !== 'none') {
    root.updateMatrixWorld(true);
    const eyes = avatar.eyeGroups?.length >= 2 ? avatar.eyeGroups.map(e => root.worldToLocal(e.getWorldPosition(new THREE.Vector3())).toArray())
      : [[-w * .13, face[1], face[2]], [w * .13, face[1], face[2]]];
    eyes.sort((l, r) => l[0] - r[0]);
    const glasses = part('face-' + a.face), shade = a.face === 'sunglasses', square = a.face !== 'round';
    const r = clamp(Math.abs(eyes[1][0] - eyes[0][0]) * .43, .135 * s, .225 * s);
    const lenses = material(shade ? '#172331' : '#d6eef5', {transparent: true, opacity: shade ? .97 : .10,
      roughness: shade ? .26 : .13, metalness: .12, depthWrite: shade, side: THREE.DoubleSide});
    eyes.forEach((e, i) => {
      const g = group(glasses, 'lens-' + i, [e[0], e[1], e[2] + .085 * s]);
      if (square) {
        const outline = roundShape(r * 2.12, r * 1.75, r * .32).getPoints(10).map(p => [p.x, p.y, 0]);
        outline.pop(); tube(g, outline, (shade ? .024 : .015) * s, accent, true);
        box(g, [r * 1.98, r * 1.63, .014 * s], lenses, [0, 0, 0], r * .29);
      } else {
        mesh(g, new THREE.TorusGeometry(r, .014 * s, 8, 48), accent);
        mesh(g, new THREE.CircleGeometry(r - .009 * s, 40), lenses);
      }
      const sign = i ? 1 : -1;
      tube(glasses, [[e[0] + sign * r, e[1], e[2] + .085 * s], [sign * Math.max(w * .39, Math.abs(e[0]) + r + .06 * s), e[1], e[2] - .09 * s],
        [sign * w * .43, e[1] - .035 * s, e[2] - .28 * s]], .013 * s, accent);
    });
    tube(glasses, [[eyes[0][0] + r, eyes[0][1], eyes[0][2] + .085 * s], [0, (eyes[0][1] + eyes[1][1]) / 2 + .035 * s, Math.max(eyes[0][2], eyes[1][2]) + .10 * s],
      [eyes[1][0] - r, eyes[1][1], eyes[1][2] + .085 * s]], .014 * s, accent);
  }

  if (a.neck && a.neck !== 'none') {
    const neckY = human || animal ? neck[1] : Math.max(neck[1], h * .27);
    const g = part('neck-' + a.neck, [0, neckY, 0]);
    const rx = human ? .32 * s : animal ? .46 * s : w * .46;
    const rz = Math.max(human ? .25 * s : .34 * s, anchors.neckFront?.[2] || face[2] * .86);
    if (a.neck === 'bow') {
      for (const sign of [-1, 1]) {
        const b = ball(g, [.15 * s, .115 * s, .055 * s], accent, [sign * .13 * s, 0, rz + .06 * s]); b.rotation.z = sign * .3;
      }
      ball(g, [.07 * s, .075 * s, .065 * s], muted, [0, 0, rz + .09 * s]);
    } else {
      ellipse(g, rx, rz, 0, (a.neck === 'scarf' ? .085 : .044) * s, accent);
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
    const ww = 1.17 * s, dd = .69 * s, sh = clamp(face[1] - g.position.y - .22 * s, .32 * s, .51 * s);
    const silver = material('#bdc3ca', {metalness: .7, roughness: .31}), keys = material('#4a5058', {roughness: .62});
    box(g, [ww, .043 * s, dd], silver, [0, 0, 0], .045 * s);
    for (let row = 0; row < 3; row++) for (let col = 0; col < 10; col++)
      box(g, [.078 * s, .009 * s, .055 * s], keys, [(col - 4.5) * .098 * s, .026 * s, (row * .079 - .06) * s], .014 * s);
    box(g, [.32 * s, .004 * s, .135 * s], muted, [0, .024 * s, -.225 * s], .018 * s);
    const lid = group(g, 'laptop-lid', [0, .025 * s, dd * .45]); lid.rotation.x = .20;
    box(lid, [ww, sh, .039 * s], silver, [0, sh / 2, 0], .043 * s);
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

  // Replace the original pair as a unit; animal hind paws remain untouched.
  const gestures = ['wave', 'thinking', 'dance', 'celebrate', 'love'];
  const needsArms = human || animal || prop !== 'none' || gestures.includes(action) || c.pose === 'chin' || ['hands', 'both'].includes(c.limbs);
  const arms = [], palms = [];
  (avatar.arms || []).forEach(o => {o.visible = false;});
  if (needsArms) {
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
      const sign = i ? 1 : -1, start = V(starts[i]), end = V(ends[i]), d = end.clone().sub(start);
      // The group is the shoulder pivot; its curve and palm are shoulder-local.
      const arm = part('posed-arm-' + i, starts[i]), radius = (human ? .078 : animal ? .115 : .102) * s;
      const elbow = d.clone().multiplyScalar(.48); elbow.x += sign * (animal&&!bird&&!targets?.035:.11) * s;
      elbow.y -= .11 * s; elbow.z += .05 * s;
      const wrist = d.clone().multiplyScalar(.85); wrist.z += .013 * s;
      const limb = tube(arm, [[0, 0, 0], elbow.toArray(), wrist.toArray(), d.toArray()], radius, armMat);
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
        const thumb = ball(palm, [.039 * s, .059 * s, .035 * s], handMat, [-sign * .09 * s, .006 * s, .035 * s]);
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
