import React from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';
import { useEffect } from 'react';
import './ObjFile.css';

const ObjFile: React.FC<{}> = () => {

    useEffect(() => {
        const canvas = document.querySelector('#objFile') as any;
        const renderer = new THREE.WebGLRenderer({canvas});
    
        const fov = 45;
        const aspect = 2;  // the canvas default
        const near = 0.1;
        const far = 100;
        const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(-4, 1, 3);
    
        const controls = new OrbitControls(camera, canvas);
        controls.target.set(0, 0, 0);
        controls.update();
    
        const scene = new THREE.Scene();
        scene.background = new THREE.Color('black');
    
    
        {
            const skyColor = 0xB1E1FF;  // light blue
            const groundColor = 0xB97A20;  // brownish orange
            const intensity = 1;
            const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
            scene.add(light);
        }
    
        {
            const color = 0xFFFFFF;
            const intensity = 1;
            const light = new THREE.DirectionalLight(color, intensity);
            light.position.set(0, 10, 0);
            light.target.position.set(-5, 0, 0);
            scene.add(light);
            scene.add(light.target);
        }
    
        {
            const objLoader = new OBJLoader();
            const meterial = new THREE.MeshBasicMaterial({color: 0x44aa88});
            objLoader.load('/assets/Dog.obj', (root) => {
                scene.add(root);
            });
        }
    
        function resizeRendererToDisplaySize(renderer: any) {
            const canvas = renderer.domElement;
            const width = canvas.clientWidth;
            const height = canvas.clientHeight;
            const needResize = canvas.width !== width || canvas.height !== height;
            if (needResize) {
                renderer.setSize(width, height, false);
            }
            return needResize;
        }
    
        function render() {
            if (resizeRendererToDisplaySize(renderer)) {
                const canvas = renderer.domElement;
                camera.aspect = canvas.clientWidth / canvas.clientHeight;
                camera.updateProjectionMatrix();
            }
            renderer.render(scene, camera);       
            requestAnimationFrame(render);
        }
    
        requestAnimationFrame(render);
    })
    
    return (
        <canvas id='objFile'></canvas>
    )
}

export default ObjFile;
