import Environment from './environment';
export default class BakedShadowEnvironment extends Environment {
    private _pixotron;
    private _shadowPlane;
    private _pixotronGuard;
    private readonly _oldBackground;
    private readonly _color;
    constructor(scene: THREE.Scene, oldEnvironment?: Environment, color?: THREE.Color);
    needsBounds(): boolean;
    needsCamera(): boolean;
    needsRotation(): boolean;
    setPixotron(pixotron: Pixotron): void;
    onShadowPlaneReady(): void;
    updateShadowPlane(): void;
    addToScene(): void;
    removeFromScene(): void;
    showGUI(): void;
}
