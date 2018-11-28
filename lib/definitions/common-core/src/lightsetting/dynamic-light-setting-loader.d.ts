import { Vector3 } from 'three';
import { SceneSettings } from '../scene-settings-loader';
export declare const PREDEFINED_LIGHTSETTING: {
    SOFA: string;
    SHELF: string;
    SHELF_FRONT: string;
};
export interface DynamicLight {
    type: string;
    name?: string;
    intensity?: number;
    color?: string;
    position?: Vector3;
    target?: Vector3;
    castShadow?: boolean;
    angle?: number;
    penumbra?: number;
    width?: number;
    height?: number;
    movesWithCamera?: boolean;
}
export interface DynamicLightSettingSource {
    url?: string;
    json?: string;
    object?: SceneSettings;
}
export default class DynamicLightSettingLoader {
    static createDynamicLightSettingSource(dls: string, ls: string): DynamicLightSettingSource;
    parse(json: string): THREE.Light[];
    load(jsonObject: SceneSettings): THREE.Light[];
    private _parseAmbientLight;
    private _parseRectAreaLight;
    private _parseSpotLight;
    private _parseCommon;
}
