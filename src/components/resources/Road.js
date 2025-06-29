import * as THREE from "three";

import { tilePerRow, tileSize } from "../../constants.js";

export function Road(rowIndex) {
  const road = new THREE.Group();
  road.position.y = rowIndex * tileSize;

  const foundation = new THREE.Mesh(
    new THREE.PlaneGeometry(tilePerRow * tileSize, tileSize),
    new THREE.MeshLambertMaterial({ color: 0x454a59 }),
  );
  foundation.receiveShadow = true
  road.add(foundation);
  return road;
}
