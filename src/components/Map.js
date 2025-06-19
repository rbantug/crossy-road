import * as THREE from "three";

import { Car } from "./resources/Car.js";
import { Grass } from "./resources/Grass.js";
import { Road } from "./resources/Road.js";
import { Tree } from "./resources/Tree.js";
import { Truck } from "./resources/Truck.js";

const metadata = [
  {
    type: "forest",
    trees: [
      { tileIndex: -3, height: 50 },
      { tileIndex: -2, height: 30 },
      { tileIndex: -5, height: 50 },
    ],
  },
  {
    type: "car",
    direction: false, // the cars are moving right to left
    speed: 1, // how fast the cars are moving per second
    vehicles: [{ initialTileIndex: 2, color: 0xff0000 }],
  },
  {
    type: "forest",
    trees: [
      { tileIndex: -3, height: 50 },
      { tileIndex: 0, height: 30 },
      { tileIndex: 2, height: 50 },
    ],
  },
  {
    type: "truck",
    direction: true,
    speed: 1,
    vehicles: [{ initialTileIndex: -4, color: 0x00ff00 }],
  },
];

const map = new THREE.Group();

function initMap() {
  for (let rowIndex = 0; rowIndex > -5; rowIndex--) {
    const grass = Grass(rowIndex);
    map.add(grass);
  }

  addRows();
}

function addRows() {
  metadata.forEach((data, index) => {
    const rowIndex = index + 1;

    if (data.type === "forest") {
      const row = Grass(rowIndex);

      data.trees.forEach(({ tileIndex, height }) => {
        const tree = Tree(tileIndex, height);
        row.add(tree);
      });
      map.add(row);
    }

    if (data.type === "car") {
      const row = Road(rowIndex);

      data.vehicles.forEach((vehicle) => {
        const car = Car(
          vehicle.initialTileIndex,
          data.direction,
          vehicle.color,
        );
        row.add(car);
      });
      map.add(row);
    }

    if (data.type === "truck") {
      const row = Road(rowIndex);

      data.vehicles.forEach((vehicle) => {
        const truck = Truck(
          vehicle.initialTileIndex,
          data.direction,
          vehicle.color,
        );
        row.add(truck);
      });
      map.add(row);
    }
  });
}

export { initMap, map, metadata };
