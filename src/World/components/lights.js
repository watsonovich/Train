import { DirectionalLight, AmbientLight, HemisphereLight } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createLights() {

    //create a light
    const mainLight = new DirectionalLight('white', 4);
    //move the light away from the origin
    mainLight.position.set(0,10,10);

    const hemiLight = new HemisphereLight('white', 'darkslategrey' , 3);
    hemiLight.position.set(0,25,0);

    const ambientLight = new AmbientLight('white', 2);

    //const bottomLight = new DirectionalLight('white', 5);
    //bottomLight.position.set(0,-4, 0);

    //camera light position will remain at 0,0,0 because it will be added to the camera, not the scene.
    //const cameraLight = new DirectionalLight('red', 8);


    return { hemiLight, ambientLight, mainLight };
}

export { createLights };