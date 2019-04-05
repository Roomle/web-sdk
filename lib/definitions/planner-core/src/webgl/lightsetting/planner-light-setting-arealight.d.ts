import LightSetting from '../../../../common-core/src/lightsetting/light-setting';
export default class PlannerLightSettingArealight extends LightSetting {
    private _areaLight;
    private _ambientLight;
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
