import LightSetting from '../../../common-core/src/lightsetting/light-setting';
export default class GLBViewerLightSetting extends LightSetting {
    private _areaLight;
    private _ambientLight;
    constructor(scene: THREE.Scene, oldLightSetting?: LightSetting);
    addToScene(): void;
    removeFromScene(): void;
    reload(): void;
    showGUI(): void;
}
