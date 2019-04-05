import LightSetting from '../../../../common-core/src/lightsetting/light-setting';
export default class DefaultLightSetting extends LightSetting {
    private _ambientLight;
    private _mainDirectionalLight;
    private _secondDirectionalLight;
    private _params;
    constructor(scene: THREE.Scene, oldLightSetting?: LightSetting);
    needsBounds(): boolean;
    updateBounds(bounds: THREE.Box3): void;
    addToScene(): void;
    removeFromScene(): void;
    reload(): void;
    showGUI(): void;
}
