import * as THREE from "three";

import { tileSize } from "../../constants.js";
import { Wheel } from "./Wheel.js";

export function Car(initialTileIndex, direction, color) {
  const car = new THREE.Group();
  car.position.x = initialTileIndex * tileSize;
  if (!direction) car.rotation.z = Math.PI;

  const carBody = new THREE.Mesh(
    new THREE.BoxGeometry(60, 30, 15),
    new THREE.MeshLambertMaterial({
      color: color,
      flatShading: true,
    }),
  );

  carBody.position.z = 10;
  carBody.castShadow = true
  car.add(carBody);

  const carWindshield = new THREE.Mesh(
    new THREE.BoxGeometry(33, 24, 12),
    new THREE.MeshLambertMaterial({
      color: "white",
      flatShading: true,
    }),
  );

  carWindshield.position.z = 25;
  carWindshield.position.x = -5;
  carWindshield.castShadow = true
  car.add(carWindshield);

  const frontTire = Wheel(18);
  const rearTire = Wheel(-18);
  car.add(frontTire);
  car.add(rearTire);
  return car;
}
