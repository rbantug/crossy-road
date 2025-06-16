import * as THREE from "three";

import { Grass } from "./Grass.js";
import { Tree } from "./Tree.js"

const metadata = [
  {
    type: "forest",
    trees: [
      { tileIndex: -3, height: 50 },
      { tileIndex: -2, height: 30 },
      { tileIndex: -5, height: 50 },
    ]
  }
]

const map = new THREE.Group();

function initMap() {
  const grass = Grass(0);
  map.add(grass);
  addRows()
}

function addRows() {
  metadata.forEach((data, index) => {
    const rowIndex = index + 1

    if (data.type === "forest") {
      const row = Grass(rowIndex)

      data.trees.forEach(({ tileIndex, height }) => {
        const tree = Tree(tileIndex, height)
        row.add(tree)
      })
      map.add(row)
    }
  })
}

export {
  initMap,
  map,
  metadata
}