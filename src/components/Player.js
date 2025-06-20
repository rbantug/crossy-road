import * as THREE from "three"

function Player() {
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(15,15,20),
        new THREE.MeshLambertMaterial({
            color: "white",
            flatShading: true
        })
    )
    body.position.z = 10
    body.castShadow = true

    return body
}

const position = {
    currentRow: 0,
    currentTile: 0
}

const movesQueue = []

function queueMove(direction) {
    movesQueue.push(direction)
}

function stepCompleted() {
    const direction = movesQueue.shift()

    if (direction === 'forward') position.currentRow++
    if (direction === 'backward') position.currentRow--
    if (direction === 'left') position.currentTile--
    if (direction === 'right') position.currentTile++
}

export {
    Player,
    queueMove,
    stepCompleted
}