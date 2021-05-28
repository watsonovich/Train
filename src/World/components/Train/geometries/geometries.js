import { BoxBufferGeometry, CylinderBufferGeometry } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createGeometries() {

    const cabin = new BoxBufferGeometry(2, 2.5, 1.5);

    const nose = new CylinderBufferGeometry(.75, .75, 3, 12);

    const wheel = new CylinderBufferGeometry(.4, .4, 1.75, 16);

    const chimney = new CylinderBufferGeometry(.3, .1, .5);

    return { cabin, nose, wheel, chimney };

};

export { createGeometries };