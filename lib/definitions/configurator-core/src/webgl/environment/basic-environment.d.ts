import Environment from '../../../../common-core/src/environment/environment';
export default class BasicEnvironment extends Environment {
    private _color;
    private _oldBackground;
    private _shadowMesh;
    private _shadowMaterial;
    private _canvas;
    constructor(scene: THREE.Scene, oldEnvironment: Environment, color: THREE.Color, canvas?: HTMLCanvasElement, url?: string);
    private addBackground;
    private _generateShadowPlane;
    needsBounds(): boolean;
    needsCamera(): boolean;
    addToScene(): void;
    removeFromScene(): void;
    updateBounds(bounds: THREE.Vector3): void;
    showGUI(): void;
}
