import Environment from './environment';
export default class GltfEnvironment extends Environment {
    private _backgroundMesh;
    private _backgroundMaterial;
    private _gltfLoaderPromise;
    private _gltfLoader;
    private _scriptLoader;
    constructor(scene: THREE.Scene, oldEnvironment?: Environment);
    needsBounds(): boolean;
    needsCamera(): boolean;
    updateBounds(bounds: THREE.Vector3): void;
    updateCamera(camera: THREE.PerspectiveCamera): void;
    addToScene(): void;
    removeFromScene(): void;
    loadBackground(url: string, material?: THREE.Material): void;
    private _onBackgroundLoaded;
    showGUI(): void;
}
