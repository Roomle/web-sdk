import LightSetting from '../../../../common-core/src/lightsetting/light-setting';
export default class DefaultLightSetting extends LightSetting {
    private _hemiLight;
    private _directionalLight1;
    private _directionalLight2;
    constructor(scene: THREE.Scene, oldLightSetting?: LightSetting);
    addToScene(): void;
    removeFromScene(): void;
    reload(): void;
    showGUI(): void;
}
