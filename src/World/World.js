import { createCamera } from './components/camera.js';
import { createAxesHelper, createGridHelper } from './components/helpers.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';
import { Train } from './components/Train/Train.js';
import { createControls } from './systems/controls.js';
import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';


//create module scoped variables not accessible outside the World app

let camera;
let renderer;
let scene;
let loop;

class World {
//1. create and instance of the World app
constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);
    const { ambientLight, mainLight, hemiLight } = createLights();
    const train = new Train();    

    mainLight.visible = true;
    ambientLight.visible = false;
    hemiLight.visible = true;

    loop.updatables.push(controls, train);
    scene.add(ambientLight, mainLight, hemiLight, train);
    
    const resizer = new Resizer(container, camera, renderer);

    scene.add(createAxesHelper(), createGridHelper());
    
}

//2. render the scene
render() {
    //draw a single frame
    renderer.render(scene, camera);
}

start() {
    loop.start();
}

stop() {
    loop.stop();
}

}

export { World };