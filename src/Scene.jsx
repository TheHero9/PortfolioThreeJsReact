import * as THREE from "three"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
// import universe from "./universe.jpg"
// import background from "./background.jpg"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {CSS2DRenderer, CSS2DObject} from "three/examples/jsm/renderers/CSS2DRenderer"
import React from "react"

const canvas = document.querySelector("canvas.webgl")
const scene = new THREE.Scene()

const size = {
    width: window.innerWidth,
    height: window.innerWidth
}



function Scene(){
    return(
    <>  
        <h1>Test the Scene</h1>
    </>
    )

}


export default Scene