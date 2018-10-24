import LightSetting from '../../../common-core/src/lightsetting/light-setting';
export default class PlannerLightSetting extends LightSetting {
    private _hemiTOLight;
    private _hemiLight;
    private _areaLight;
    private _ambientLight;
    private _sunLight;
    private _params;
    constructor(scene: THREE.Scene, oldLightSetting?: LightSetting);
    private _createSpotlight;
    updateSunPosition(inclination: number, azimuth: number): void;
    addToScene(): void;
    removeFromScene(): void;
    reload(): void;
    showGUI(): void;
}
