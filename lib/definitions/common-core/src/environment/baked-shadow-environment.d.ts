import Environment from './environment';
import { Pixotron } from '../../../typings/pixotron';
export default class BakedShadowEnvironment extends Environment {
    protected _pixotron: Pixotron;
    protected _shadowPlane: THREE.Mesh;
    private _pixotronGuard;
    private _wasAAEnabled;
    constructor(scene: THREE.Scene, oldEnvironment?: Environment);
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
