export default abstract class LightSetting {
    protected _scene: THREE.Scene;
    private _cameraContainer;
    constructor(scene: THREE.Scene, oldLightSetting?: LightSetting);
    needsBounds(): boolean;
    updateBounds(bounds: THREE.Box3): void;
    abstract addToScene(): void;
    abstract removeFromScene(): void;
    abstract reload(): void;
    abstract showGUI(): void;
    getCameraContainer(): THREE.Object3D;
}
