import * as THREE from "three";

export function Wheel(positionX) {
  const wheel = new THREE.Mesh(
    new THREE.BoxGeometry(12, 33, 12),
    new THREE.MeshLambertMaterial({
      color: "#000000",
      flatShading: true,
    }),
  );
  wheel.position.x = positionX;
  wheel.position.z = 6;
  return wheel;
}
