import LightSetting from '../../../../common-core/src/lightsetting/light-setting';
export default class PlannerLightSetting extends LightSetting {
    private _hemiLight;
    private _ambientLight;
    private _mainDirLight;
    private _center;
    private _params;
    constructor(scene: THREE.Scene, oldLightSetting?: LightSetting);
    updateSunPosition(inclination: number, azimuth: number): void;
    addToScene(): void;
    removeFromScene(): void;
    reload(): void;
    needsBounds(): boolean;
    updateBounds(bounds: THREE.Box3): void;
    showGUI(): void;
}
