export default abstract class Environment {
    protected _scene: THREE.Scene;
    protected _bounds: THREE.Vector3;
    constructor(scene: THREE.Scene, oldEnvironment?: Environment);
    abstract needsBounds(): boolean;
    abstract needsCamera(): boolean;
    updateCamera(camera: THREE.PerspectiveCamera): void;
    abstract addToScene(): void;
    abstract removeFromScene(): void;
    abstract showGUI(): void;
    reload(): void;
    updateBounds(bounds: THREE.Vector3, force?: boolean): void;
    cleanUp(): void;
}
