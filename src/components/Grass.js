import * as THREE from "three";

import { tilePerRow, tileSize } from "../constants.js";

export function Grass(rowIndex) {
  const grass = new THREE.Group();
  grass.position.y = rowIndex * tileSize;

  const foundation = new THREE.Mesh(
    new THREE.BoxGeometry(tilePerRow * tileSize, tileSize, 3),
    new THREE.MeshLambertMaterial({ color: 0xbaf455 }),
  );
  foundation.position.z = 1.5;
  grass.add(foundation);
  return grass;
}
