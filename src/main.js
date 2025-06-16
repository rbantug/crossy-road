import "./style.css";

import * as THREE from "three";

import { Camera } from "./components/Camera";
import { initMap, map } from "./components/Map";
import { Player } from "./components/Player";
import { Renderer } from "./components/Renderer";

const scene = new THREE.Scene();
const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight();
dirLight.position.set(-100, -100, 200);
scene.add(dirLight);

const player = Player();
scene.add(player);

scene.add(map)

const camera = Camera();

function initGame() {
    initMap()
}

initGame()

const renderer = Renderer();
renderer.render(scene, camera);

// 17:01
