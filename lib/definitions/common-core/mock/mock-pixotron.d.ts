import { Pixotron } from '../../typings/pixotron';
export default class MockPixotron implements Pixotron {
    autoSAOClear: boolean;
    autoShadowsClear: boolean;
    enableAA: boolean;
    needsUpdate: boolean;
    blit(): void;
    getHighLightPass(): any;
    getSAOPass(): any;
    getShadowPass(): any;
    getShadowPlanePass(): any;
    highlightObjects(objects: THREE.Object3D[]): void;
    render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, renderTarget?: THREE.WebGLRenderTarget): void;
    setSize(width: number, height: number): void;
    updateShadowPlane(object: THREE.Object3D): void;
}
