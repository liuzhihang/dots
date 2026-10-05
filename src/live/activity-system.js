import * as THREE from 'three';

export const ACTIVITY_ACTIONS = new Set(['thinking', 'processing', 'waiting', 'blocked', 'done']);
const TAU = Math.PI * 2;
const smooth = t => {t = THREE.MathUtils.clamp(t, 0, 1); return t * t * (3 - 2 * t);};

// Activity is part of the avatar scene, so pause, camera and PNG export share
// exactly the same state. Abstract particles keep the character's own palette.
export function createActivitySystem(avatar, config) {
  if (!ACTIVITY_ACTIONS.has(config.action)) return null;
  const group = new THREE.Group(); group.name = 'activity';
  const blob = avatar.root.userData.anatomy === 'blob';
  const effect = config.motionStyle === 'auto' || !config.motionStyle
    ? config.action === 'thinking' ? 'dots' : 'liquid' : config.motionStyle;
  const body = avatar.surfaces.find(mesh => mesh.name.startsWith('blob-'));
  const own = new Set(), particles = [], companions = [];
  const color = new THREE.Color(config.colors.body);
  // Pale characters retain contrast against the studio backdrop.
  if (color.getHSL({}).l > .84) color.lerp(new THREE.Color('#72848e'), .22);
  const particleMat = new THREE.MeshStandardMaterial({color, roughness: .43, metalness: .04});
  particleMat.name = 'activity-rubber'; own.add(particleMat);
  const geometry = new THREE.SphereGeometry(1, 20, 14); own.add(geometry);
  const droplet = geometry.clone(); own.add(droplet);
  const positions = droplet.attributes.position;
  for (let i = 0; i < positions.count; i++) {
    const y = positions.getY(i), taper = .45 + .55 * smooth((y + 1) / 2);
    positions.setXYZ(i, positions.getX(i) * taper, y < 0 ? y * 2.25 : y, positions.getZ(i) * taper);
  }
  positions.needsUpdate = true; droplet.computeVertexNormals();
  if (blob && body && effect === 'dots') {
    for (const side of [-1, 1]) {
      const clone = new THREE.Mesh(body.geometry, body.material);
      clone.name = 'thinking-companion'; clone.scale.copy(body.scale);
      const wrapper = new THREE.Group(); wrapper.visible=false; wrapper.add(clone); group.add(wrapper);
      companions.push({wrapper, side});
    }
  }
  for (let i = 0; i < 30; i++) {
    const mesh = new THREE.Mesh(effect === 'liquid' && i % 10 === 0 ? droplet : geometry, particleMat); mesh.castShadow = false;
    mesh.visible=false; group.add(mesh); particles.push(mesh);
  }
  const rest = avatar.root.userData, height = avatar.height || 2.1;
  return {
    group,
    bounds: new THREE.Box3(
      new THREE.Vector3(-1.34, Math.min(0,height*.5-.82), -.58),
      new THREE.Vector3(1.34, effect==='dots'&&!blob?height+.40:Math.max(height,height*.5+.82), .58)
    ),
    tick(t) {
      group.visible = true;
      const a = config.action, active = a === 'thinking' || a === 'processing';
      const cycle = t * (config.motionSpeed || 1), centerY = height * .50;
      for (const p of particles) p.visible = false;
      for (const c of companions) c.wrapper.visible = false;
      if (active && blob && effect === 'dots' && body) {
        const wave = Math.sin(cycle * 3.4), size = .30;
        avatar.root.scale.copy(rest.restScale).multiplyScalar(size);
        avatar.root.position.y = centerY - height * size * .50 + wave * .10;
        for (const {wrapper, side} of companions) {
          wrapper.visible = true; wrapper.scale.setScalar(size);
          wrapper.position.set(side * .86, centerY + Math.sin(cycle * 3.4 - side * .72) * .10, 0);
          wrapper.rotation.z = Math.sin(cycle * 2.1 - side) * .05;
        }
      } else if (active && effect === 'dots') {
        for(let i=0;i<3;i++){
          const p=particles[i];p.visible=true;p.position.set((i-1)*.28,height+.20+Math.sin(cycle*3.4-i*.72)*.045,.10);p.scale.setScalar(.065);
        }
      } else if (active) {
        const orbit = effect === 'orbit', count = orbit ? 12 : 30;
        if (blob) {
          const scale = orbit ? .57 : .47;
          avatar.root.scale.copy(rest.restScale).multiplyScalar(scale);
          avatar.root.position.y = centerY - height * scale * .50;
          avatar.root.rotation.z = Math.sin(cycle * 1.7) * .035;
        }
        const radius = blob ? 1.03 : .94;
        for (let i = 0; i < count; i++) {
          const p = particles[i], trail = i % 10, stream = Math.floor(i / 10);
          const angle = cycle * (orbit ? 1.3 : 1.85) + (orbit ? i / count * TAU : stream / 3 * TAU - trail * .072);
          const r = radius * (orbit ? 1 : .98 + .045 * Math.sin(cycle * 1.2 + stream * 1.8));
          const tail = orbit ? .052 : trail === 0 ? .093 : .052 * Math.pow(1 - trail / 10, 1.35);
          p.visible = true;
          p.position.set(Math.cos(angle) * r, centerY + Math.sin(angle) * r * (orbit ? .42 : .61), Math.sin(angle) * .44);
          p.scale.set(tail, tail * (!orbit && trail === 0 ? 1.18 : 1), tail * .86);
          p.rotation.z = angle;
        }
      } else if (a === 'waiting') {
        avatar.root.rotation.z += Math.sin(cycle * .9) * .065;
        for (const eye of avatar.eyeGroups) eye.scale.y = .52;
      } else if (a === 'blocked') {
        // A contained double nudge communicates attention without flashing.
        const phase = cycle % 3.4;
        avatar.root.rotation.z += phase < .48 ? Math.sin(phase * 25) * .055 * (1 - phase / .48) : 0;
        for (const eye of avatar.eyeGroups) eye.scale.y = 1.10;
      } else if (a === 'done') {
        const phase = cycle % 3.8, jump = phase < .8 ? Math.sin(phase / .8 * Math.PI) : 0;
        avatar.root.position.y += Math.max(0, jump) * .18;
        avatar.root.rotation.z += jump * .04;
        for (let i = 0; i < 6; i++) {
          const p = particles[i], life = (phase - .2) / .75;
          if (life < 0 || life > 1) continue;
          const angle = i / 6 * TAU;
          p.visible = true;
          p.position.set(Math.cos(angle) * (.55 + life * .48), height * .7 + Math.sin(angle) * (.3 + life * .3), .2);
          p.scale.setScalar(.038 * Math.sin(life * Math.PI));
        }
      }
    },
    dispose() { group.removeFromParent(); for (const item of own) item.dispose(); }
  };
}
