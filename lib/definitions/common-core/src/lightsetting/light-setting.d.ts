export default abstract class LightSetting {
    protected _scene: THREE.Scene;
    constructor(scene: THREE.Scene, oldLightSetting?: LightSetting);
    abstract addToScene(): void;
    abstract removeFromScene(): void;
    abstract reload(): void;
    abstract showGUI(): void;
}
