import LightSetting from './light-setting';
import { SceneSettings } from '../scene-settings-loader';
export default class DynamicLightSetting extends LightSetting {
    private _lights;
    private _cameraLight;
    private _dynamicLightSettingLoader;
    constructor(scene: THREE.Scene, oldLightSetting?: LightSetting);
    loadFromJSON(json: string): Promise<void>;
    loadFromObject(sceneSettings: SceneSettings): Promise<void>;
    loadFromURL(url: string): Promise<void>;
    addToScene(): void;
    removeFromScene(): void;
    reload(): void;
    update(camera: THREE.PerspectiveCamera, target: THREE.Vector3): void;
    showGUI(): void;
    private _addToGUI;
    private _addRectAreaLightToGUI;
    private _addSpotLightToGUI;
    private _addAmbientLightToGUI;
    private _addDirectionalLightToGUI;
}
