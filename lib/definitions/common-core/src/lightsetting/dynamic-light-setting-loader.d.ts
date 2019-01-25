import { Vector3 } from 'three';
import { SceneSettings } from '../scene-settings-loader';
export declare const PREDEFINED_LIGHTSETTING: {
    SOFA: string;
    SHELF: string;
    SHELF_FRONT: string;
};
/**
 * Description of fields:
 - type: 'ambient'/'rectarea'/'spot'
 - name: set a name for this light to identify it more easily
 - intensity: light intensity/brightness
 - color: light color as hex ('#ffffff')
 - position: position of the light, for example `{"x": 0,"y": 0, "z": 0}`, coords are right hand y up
 - target: position to which the light should shine, defaults to center
 - castShadow: defines if this light casts shadows
 - angle: used for spotlights, defines the light cone of the spotlight
 - penumbra: used for spotlights, defines how hard the edges of the light are
 - width: used for rect area light, width of the area
 - height: used for rect area light, height of the area
 - movesWithCamera: if true the light will always have the same position and angle as the camera
 */
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
