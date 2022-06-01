import * as THREE from 'three'


// Scene
export function init(selector) {

  // const canvas = document.querySelector('canvas.webgl')
  const canvas = selector
  // const gui = new GUI()
  const scene = new THREE.Scene()
  const loader = new THREE.TextureLoader()
  const texture = loader.load('./assets/img/textures/liquidNormalMap4.png')
  const displacementTexture = loader.load('./assets/img/textures/liquidNormalMap4.png')
  
  // Objects
  const geometry = new THREE.SphereGeometry(2.8, 64, 64)
  const material = new THREE.MeshStandardMaterial({ 
    color: 0x7196FF, 
    roughness: 1.5, 
    metalness: -1.3, 
    map: texture,
    displacementMap: displacementTexture,
    displacementScale: .7
  })
  const sphere = new THREE.Mesh(geometry, material)
  scene.add(sphere)
  
  const geometry2 = new THREE.SphereGeometry(4, 32, 32)
  const geometry3 = new THREE.SphereGeometry(3.6, 32, 32)
  const material2 = new THREE.PointsMaterial({ 
    size: 0.008,
    color: 0x7196FF
  })
  const sphere2 = new THREE.Points(geometry2, material2)
  // sphere2.position.x = 1.6
  const sphere3 = new THREE.Points(geometry3, material2)
  // sphere3.position.x = 1.8
  scene.add(sphere2)
  scene.add(sphere3)
  
  
  // Lights
  const rectLight = new THREE.PointLight(0x2A5EE8, 3, 100)
  rectLight.position.set(0, -2.2, 16)
  scene.add(rectLight)
  
  // const rectLight2 = new THREE.RectAreaLight(0xA8FFFF, 1.5, 2, 2)
  // rectLight2.position.set(1.3, 0, 2)
  // scene.add(rectLight2)
  
  // const pointLight = new THREE.PointLight(0xffffff)
  // pointLight.intensity = 5
  // // pointLight.power = 3
  // pointLight.position.set(1, 0, 0)
  // scene.add(pointLight)
  
  // const h = new THREE.PointLightHelper(pointLight, 1)
  // scene.add(h)
  
  
  // Sizes

  const getCanvHeight = () => {
    return window.innerWidth <= 600 ? 500 : 800
  }

  const $container = document.querySelector('#first')
  const sizes = {
    width: $container.offsetWidth,
    height: getCanvHeight()
  }
  
  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = $container.offsetWidth
    sizes.height = getCanvHeight()
  
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
  
    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  })
  
  // Camera
  const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
  camera.position.set(0, 0, 7)
  scene.add(camera)
  const helper = new THREE.CameraHelper( camera );
  // scene.add( helper );
  
  // Controls
  // const controls = new OrbitControls(camera, canvas)
  // controls.enableDamping = true
  
  // Renderer
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  
  // Animate
  
  let mouseX = 0; let mouseY = 0
  let targetX = 0; let targetY = 0
  const windowX = window.innerWidth / 2
  const windowY = window.innerHeight / 2
  
  function onFirstMouseMove(e) {
    mouseX = (e.clientX - windowX)
    mouseY = (e.clientY - windowY)
  }
  
  document.addEventListener('mousemove', onFirstMouseMove)
  
  const clock = new THREE.Clock()
  
  const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    sphere.rotation.set(0, .3 * elapsedTime, 0)
    sphere.position.z = 0
    
    targetX = mouseX * .001
    targetY = mouseY * .001
    sphere.rotation.y += .3 * (targetX - sphere.rotation.y)
    sphere.rotation.x += .3 * (targetY - sphere.rotation.x)
    sphere.position.z += .5 * (targetY - sphere.position.x)
  
    const elapsedTime2 = clock.getElapsedTime()
    sphere2.rotation.set(0, -0.3 * elapsedTime2, 1)
    sphere2.position.z = 0
    
    sphere2.rotation.y += .3 * (targetX - sphere2.rotation.y)
    sphere2.rotation.x += .3 * (targetY - sphere2.rotation.x)
    sphere2.position.z += .3 * (targetY - sphere2.position.x)
  
    sphere3.rotation.y = 0; sphere3.rotation.x = -.5; sphere3.rotation.z = -1; sphere3.position.z = 0
    sphere3.rotation.y += -.3 * (targetX - sphere2.rotation.y)
    sphere3.rotation.x += -.3 * (targetY - sphere2.rotation.x)
    sphere3.position.z += -.3 * (targetY - sphere2.position.x)

    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
    
  }
  tick()

}