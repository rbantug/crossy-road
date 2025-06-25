import * as THREE from "three"

function Player() {
    const player = new THREE.Group()
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(15,15,20),
        new THREE.MeshLambertMaterial({
            color: "white",
            flatShading: true
        })
    )
    body.position.z = 10
    body.castShadow = true
    body.receiveShadow = true
    player.add(body)

    const cap = new THREE.Mesh(
        new THREE.BoxGeometry(2,4,2),
        new THREE.MeshLambertMaterial({
            color: "red",
            flatShading: true
        })
    )

    cap.position.z = 21
    cap.castShadow = true
    cap.receiveShadow = true
    player.add(cap)

    return player
}

const player = Player()

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
    movesQueue,
    player,
    position,
    queueMove,
    stepCompleted
}