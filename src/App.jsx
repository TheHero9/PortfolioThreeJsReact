import './App.css'
import { useEffect } from 'react'
import * as THREE from 'three';
import universe from "./universe.jpg"
import SceneInit from './Renderer.jsx';
// import ImportModel from './Shiba';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

function App() {

  useEffect(()=> {
    const test = new SceneInit("myThreeJsCanvas")
    test.initialize()
    test.animate()

    let loadedModel
    const gltfLoader = new GLTFLoader()
    gltfLoader.load("src/assets/shibaa/scene.gltf", (gltfScene) => {
        loadedModel = gltfScene
        test.scene.add(gltfScene.scene)
        gltfScene.scene.position.set(0,1,1)
      
      
      })

    //Axis Helper
    // const axisHelperr = new THREE.AxesHelper()
    // test.scene.add(axisHelperr)

    //Plane Helper
    const geometryPlane = new THREE.PlaneGeometry( 2, 3 );
    const materialPlane = new THREE.MeshBasicMaterial( {
        color: 0x50577A,
        side: THREE.DoubleSide,
        wireframe: false} );
    const plane = new THREE.Mesh( geometryPlane, materialPlane );
    test.scene.add( plane );
    plane.position.set(0,0,0)
    plane.rotation.x = -0.5 * Math.PI


    //Plane 1 
  const geometryPlane1 = new THREE.PlaneGeometry( 5, 5 );
  const materialPlane1 = new THREE.MeshBasicMaterial( {
      color: 0xFFFFFF,
      side: THREE.DoubleSide,
      wireframe: false} );
  const plane1 = new THREE.Mesh( geometryPlane1, materialPlane1 );
  plane1.position.set(0,2.5,-5)
  test.scene.add( plane1 );

  //Plane 2
  const geometryPlane2 = new THREE.PlaneGeometry( 5, 5 );
  const materialPlane2 = new THREE.MeshBasicMaterial( {
      color: 0xFFFFFF,
      side: THREE.DoubleSide,
      wireframe: false} );
  const plane2 = new THREE.Mesh( geometryPlane2, materialPlane2 );
  plane2.position.set(0,2.5, 5)
  test.scene.add( plane2 );

  //Plane 3
  const geometryPlane3 = new THREE.PlaneGeometry( 5, 5 );
  const materialPlane3 = new THREE.MeshBasicMaterial( {
      color: 0xFFFFFF,
      side: THREE.DoubleSide,
      wireframe: false} );
  const plane3 = new THREE.Mesh( geometryPlane3, materialPlane3 );
  plane3.position.set(-5, 2.5, 0)
  plane3.rotation.y = -0.5 * Math.PI
  test.scene.add(plane3);

  // //Plane 4
    const geometryPlane4 = new THREE.PlaneGeometry( 5, 5 );
    const materialPlane4 = new THREE.MeshBasicMaterial( {
        color: 0xFFFFFF,
        side: THREE.DoubleSide,
        wireframe: false} );
    const plane4 = new THREE.Mesh( geometryPlane4, materialPlane4 );
    plane4.position.set(5, 2.5, 0)
    plane4.rotation.y = -0.5 * Math.PI
    test.scene.add(plane4);

  // Texture Loader
  const TextureLoader = new THREE.TextureLoader()
  plane1.material.map = TextureLoader.load(universe)
  plane2.material.map = TextureLoader.load(universe)
  plane3.material.map = TextureLoader.load(universe)
  plane4.material.map = TextureLoader.load(universe)


  const animate = () => {
    // if(loadedModel){
    //   // loadedModel.scene.scale.set(10,10,10)
    //   // loadedModel.scene.rotation.x += 0.01
    //   // loadedModel.scene.rotation.y += 0.01
    //   // loadedModel.scene.rotation.z += 0.01

    // }
    requestAnimationFrame(animate)
  }  
animate()

  }, [])

  return (
    <>
      <canvas id="myThreeJsCanvas"/>
    </>
  )
}

export default App
