import Environment from '../../../configurator-core/src/webgl/environment/environment';
import { SceneSettings } from '../scene-settings-loader';
export interface EnvironmentDetails {
    imageUrl: string;
    color: string;
    material: string;
    fog: boolean;
}
export interface EnvironmentSetting {
    type: string;
    details: EnvironmentDetails;
}
export default class DynamicEnvironmentSettingLoader {
    private _rapiAccess;
    parse(scene: THREE.Scene, canvas: HTMLCanvasElement, oldEnvironment: Environment, json: string): Promise<Environment>;
    load(scene: THREE.Scene, canvas: HTMLCanvasElement, oldEnvironment: Environment, jsonObject: SceneSettings): Promise<Environment>;
}
