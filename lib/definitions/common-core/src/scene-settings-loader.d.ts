import { EnvironmentSetting } from './environment/dynamic-environment-setting-loader';
import { DynamicLight } from './lightsetting/dynamic-light-setting-loader';
export interface SceneSettings {
    environment: EnvironmentSetting;
    lights: DynamicLight[];
}
export default class SceneSettingsLoader {
}
