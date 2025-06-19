import * as THREE from "three";

import { tileSize } from "../../constants.js";
import { Wheel } from "./Wheel.js";

export function Truck(initialTileIndex, direction, color) {
  const truck = new THREE.Group();
  truck.position.x = initialTileIndex * tileSize;
  if (!direction) truck.rotation.z = Math.PI;

  const cargo = new THREE.Mesh(
    new THREE.BoxGeometry(70, 35, 35),
    new THREE.MeshLambertMaterial({
      color: 0xb4c6fc,
      flatShading: true,
    }),
  );

  cargo.position.z = 25;
  cargo.position.x = -15;
  truck.add(cargo);

  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(30, 30, 30),
    new THREE.MeshLambertMaterial({
      color: color,
      flatShading: true,
    }),
  );

  cabin.position.z = 20;
  cabin.position.x = 35;
  truck.add(cabin);

  const frontTire = Wheel(37);
  const middleTire = Wheel(5);
  const rearTire = Wheel(-35);
  truck.add(frontTire);
  truck.add(middleTire);
  truck.add(rearTire);
  truck.castShadow = true;
  return truck;
}
