import { PlanObject } from '../../typings/planner';
import { RapiItem } from '../../typings/rapi-types';
export declare const PLAN_OBJECT_ROTATION: number;
export declare const createPlanObject: () => PlanObject;
export declare const getRapiItem: () => RapiItem;
export declare const MOCK_RUNTIME_COMPONENTID = 49;
export declare const MOCK_MESHID = "adidas-focs:ShelfTable_Table_Large_Metall";
export declare const MOCK_MATERIALID = "adidas:Metal";
export declare const MOCK_TRANSFORM: Float32Array;
export declare const MOCK_VERTICES: Int32Array;
export declare const MOCK_INDICES: Int32Array;
export declare const MOCK_UVCOORDS: Float32Array;
export declare const MOCK_NORMALS: Float32Array;
export declare const MOCK_RAPIMATERIAL: any;
export declare const MOCK_PLANNER_SCENE_EVENT_HANDLER: {
    addPlanObjectHandlers: () => void;
};
