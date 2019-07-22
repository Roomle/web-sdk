import LightSetting from '../../../common-core/src/lightsetting/light-setting';
export default class GLBViewerLightSetting extends LightSetting {
    private _ambientLight;
    private _params;
    constructor(scene: THREE.Scene, oldLightSetting?: LightSetting);
    addToScene(): void;
    removeFromScene(): void;
    reload(): void;
    showGUI(): void;
}
