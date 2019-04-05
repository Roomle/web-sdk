import Environment from './environment';
import { Pixotron } from '../../../typings/pixotron';
export default class BakedShadowEnvironment extends Environment {
    private _pixotron;
    private _shadowPlane;
    private _pixotronGuard;
    private _wasAAEnabled;
    private readonly _oldBackground;
    private readonly _color;
    private readonly _canvas;
    private readonly _style;
    constructor(scene: THREE.Scene, oldEnvironment?: Environment, color?: THREE.Color, canvas?: HTMLCanvasElement, url?: string);
    needsBounds(): boolean;
    needsCamera(): boolean;
    needsRotation(): boolean;
    setPixotron(pixotron: Pixotron): void;
    onShadowPlaneReady(): Promise<void>;
    updateBounds(bounds: THREE.Vector3): void;
    addToScene(): void;
    removeFromScene(): void;
    showGUI(): void;
}
