import React from 'react';
import * as THREE from 'three';
import { useEffect } from 'react';

const Cube: React.FC<{}> = () => {
	useEffect(() => {
		const canvas = document.querySelector('#threeJSCanvas') as Element;
		const renderer = new THREE.WebGLRenderer({canvas});

		const cameraInfo = {
			fov: 75,
			aspect: 2,
			near: 0.1,
			far: 5,
		}
		const { fov, aspect, near, far } = cameraInfo;
		const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
		camera.position.z = 2;

		const scene = new THREE.Scene();

		const geometryInfo = {
			boxWidth: 1,
			boxHeight: 1,
			boxDepth: 1,
		}
		const { boxWidth, boxHeight, boxDepth } = geometryInfo;
		const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

		const meterial = new THREE.MeshBasicMaterial({color: 0x44aa88});
		const cube = new THREE.Mesh(geometry, meterial);

		scene.add(cube);

		renderer.render(scene, camera);
	}, []);

	return (
		<canvas id="threeJSCanvas"></canvas>
	);
}

export default Cube;
