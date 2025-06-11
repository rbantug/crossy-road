import * as THREE from "three";
import { Renderer } from "./components/Renderer";
import { Camera } from "./components/Camera";
import { player } from "./components/Player";
import "./style.css";

const scene = new THREE.Scene();
scene.add(player);

const camera = Camera();
scene.add();

const renderer = Renderer();
renderer.render(scene, camera);

// 3:16
