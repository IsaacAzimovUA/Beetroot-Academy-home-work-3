import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const webglButton = document.querySelector('.webgl__button');

    webglButton.addEventListener('click', () => {
        object3d();
    })

export function object3d() {

    //Scene
    const scene = new THREE.Scene();


    //Random 3d object set

    const arr = [{ texture: "./dist/three/shous_1/textures/material_0_baseColor.png", model: "./dist/three/shous_1/scene.gltf" }, { texture: "../three/shous_2/textures/material_0_baseColor.png", model: "../three/shous_2/scene.gltf" }];
    function getRandomItem() {
        const randomIndex = Math.floor(Math.random() * arr.length);
        const randomTexture = arr[randomIndex].texture;
        const randomObject = arr[randomIndex].model;
        return [randomTexture, randomObject];
    }

    const [randomTexture, randomObject] = getRandomItem();

    // Textures 
    const textureLoader = new THREE.TextureLoader();
    const map = textureLoader.load(`${randomTexture}`);

    //Our 3d object
    const loader = new GLTFLoader();
    loader.load(`${randomObject}`, function (gltf) {
        let mesh = gltf.scene.children[0];
        mesh.material = new THREE.MeshPhongMaterial({
            map: map,
            color: 0xff00ff,
        });
        mesh.position.set(-30, -50, -40)
        mesh.rotation.y = Math.PI / 4;
        mesh.rotation.x = Math.PI / 6;
        mesh.rotation.z = Math.PI;
        mesh.scale.set(.9, .9, .9)

        scene.add(mesh);
        renderer.render(scene, camera);

    });

    //Sizes 

    const canvasWrapper = document.querySelector('.content--media');
    const sizes = {
        width: canvasWrapper.clientWidth,
        height: canvasWrapper.clientHeight
    }

    //Camera
    const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 500);
    camera.position.x = 150;
    camera.position.y = 200;
    camera.position.z = 300;
    scene.add(camera);

    //Light
    const light = new THREE.AmbientLight(0x404040, 12, 12);
    const light2 = new THREE.PointLight(0xffffff, 5);
    light2.position.set(100, 100, 100);
    scene.add(light, light2);

    //Renderer
    const canvas = document.querySelector('.webgl');
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);


    // Controls
    const controls = new OrbitControls(camera, canvas);


    controls.autoRotate = true;
    controls.enableDamping = false;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.enableRotate = true;

    canvasWrapper.addEventListener("click", () => {
        controls.reset()
    })

    //Resize 

    window.addEventListener("resize", () => {

        sizes.width = canvasWrapper.clientWidth;
        sizes.height = canvasWrapper.clientHeight;
        camera.updateProjectionMatrix();

        renderer.setSize(sizes.width, sizes.height)
        camera.aspect = sizes.width / sizes.height;
    })
    const loop = () => {
        controls.update();
        renderer.render(scene, camera);
        window.requestAnimationFrame(loop);
    }
    loop();
}






