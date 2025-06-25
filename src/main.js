import "./style.css";
import "./collectUserInput.js"

import * as THREE from "three";

import { animatePlayer } from "./AnimatePlayer.js";
import { animateVehicles } from "./AnimateVehicles";
import { Camera } from "./components/Camera";
import { DirectionalLight } from "./components/DirectionalLight";
import { initMap, map } from "./components/Map";
import { player } from "./components/Player";
import { Renderer } from "./components/Renderer";

const scene = new THREE.Scene();
const ambientLight = new THREE.AmbientLight();
scene.add(ambientLight);

const dirLight = DirectionalLight();
scene.add(dirLight);

scene.add(player);

scene.add(map);

const camera = Camera();

// helpers
const axis = new THREE.AxesHelper(50);
axis.position.z = 60;
axis.position.y = 50;
const gridHelper = new THREE.GridHelper(500, 20);
gridHelper.rotation.x = 3.1416 / 2;
scene.add(axis);
scene.add(gridHelper);

function initGame() {
  initMap();
}

initGame();

const renderer = Renderer();
renderer.setAnimationLoop(animate);
function animate() {
  animateVehicles();
  animatePlayer()
  renderer.render(scene, camera);
}

// 33:38
