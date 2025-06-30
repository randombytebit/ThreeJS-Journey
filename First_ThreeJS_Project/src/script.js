import * as THREE from "three"
import { Wireframe } from "three/examples/jsm/lines/webgpu/Wireframe.js"
import { color } from "three/tsl"

console.log(THREE)

// Scene
// Container to store everything, including objects, models, particles, lights, etc
const scene = new THREE.Scene()

// BoxGeometry Object 
// Parameters - width, height, depth, widthSegments, heightSegments, depthSegments
const boxGeometry = new THREE.BoxGeometry(1, 1, 1, 5, 5, 5)

// MeshBasicMaterial
const boxBasicMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
})

// Mesh
// Using Mesh as container to store the information of geometry and material
const boxMesh = new THREE.Mesh(boxGeometry, boxBasicMaterial)
boxMesh.rotation.y = Math.PI/4
boxMesh.rotation.z = Math.PI/4
scene.add(boxMesh)

// Camera
// When doing render of the scene, it will from the camera's point of view

// Sizes
const sizes = {
    width: 800, 
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)

// Get Canvas in html file
const canvas = document.querySelector('canvas.webgl')

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)


