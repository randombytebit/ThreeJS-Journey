# Create nodeJS project

CLI of checking version Node.js is installed
```
node -v
```

CLI of initialize a NodeJS project
```
npm init -y
```

CLI of install dependencies
```
VITE: npm install vite
THREE.JS: npm install three
```

# Create a basic website
1. Create an index.html file in the project folder
2. Change "script" part in package.json file with
```
{
  // ...
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  // ...
}
```

# Add JavaScript
1. Simply type ! and generate template of html in index.html file
2. Create an script.js file in the project folder
3. Add JavaScript to index.html
```
<!-- ... -->
<body>
    <script type="module" src="script.js"></script>
</body>
```

# Using Three.js
1. Import three dependency in script.js for using
```
import * as THREE from 'three'
```
2. console.log(THREE)  is gonna show all the method inside it

# Rendering
1. Add canvas to index.html file
```
<canvas class="webgl"></canvas>
```

2. Get canvas in script.js file by document.querySelector
```
const canvas = document.querySelector('canvas.webgl')
```

3. Create renderer and resize
```
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
```

4. Sending scene and camera to renderer
```
renderer.render(scene, camera)
```

# For downloading others project
Remember to `npm install` to install their dependencies