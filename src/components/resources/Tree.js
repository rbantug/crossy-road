import * as THREE from "three";

import { tileSize } from "../../constants.js";

function Tree(tileIndex, height) {
  const tree = new THREE.Group();
  tree.position.x = tileIndex * tileSize;

  const trunk = new THREE.Mesh(
    new THREE.BoxGeometry(15, 15, 20),
    new THREE.MeshLambertMaterial({ color: 0x4d2926, flatShading: true }),
  );
  const leaves = new THREE.Mesh(
    new THREE.BoxGeometry(30, 30, height),
    new THREE.MeshLambertMaterial({ color: 0x7aa21d, flatShading: true }),
  );

  trunk.position.z = 10;
  leaves.position.z = height / 2 + 20;
  tree.add(trunk);
  tree.add(leaves);
  tree.castShadow = true;
  return tree;
}

export { Tree };
