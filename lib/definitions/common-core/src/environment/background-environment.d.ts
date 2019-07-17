import Environment from './environment';
import BakedShadowEnvironment from './baked-shadow-environment';
export default class BackgroundEnvironment extends BakedShadowEnvironment {
    private readonly _oldBackground;
    private readonly _color;
    private readonly _canvas;
    private readonly _style;
    constructor(scene: THREE.Scene, oldEnvironment?: Environment, color?: THREE.Color, canvas?: HTMLCanvasElement, url?: string);
    needsBounds(): boolean;
    needsCamera(): boolean;
    needsRotation(): boolean;
    addToScene(): void;
    removeFromScene(): void;
}
