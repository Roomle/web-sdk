import LightSetting from '../../../../common-core/src/lightsetting/light-setting';
export default class SofaLightSetting extends LightSetting {
    private _ambientLight;
    private _areaLight;
    private _sideSpot;
    private _backspot;
    private _params;
    constructor(scene: THREE.Scene, oldLightSetting?: LightSetting);
    private _createSpotlight;
    addToScene(): void;
    removeFromScene(): void;
    reload(): void;
    showGUI(): void;
}
