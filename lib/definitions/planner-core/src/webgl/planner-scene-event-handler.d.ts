import EventDispatcher from '../../../configurator-core/src/utils/event-dispatcher';
import InputManager from '../../../common-core/src/input/input-manager';
import PlanObjectViewModel from '../view-model/plan-object-view-model';
export declare const enum PLANNER_SCENE_EVENT {
    SELECT_PLAN_OBJECT = 0
}
export declare class SceneEventInfo {
    planObject: PlanObjectViewModel;
    resetCamera: boolean;
    constructor(data: {
        planObject?: PlanObjectViewModel;
        resetCamera?: boolean;
    });
}
export declare const enum COMPONENT_EVENT {
    CLICK = "select"
}
export interface PlanObjectEventInfo {
    hasListener: boolean;
    priority: number;
    roomleId: number;
}
export default class PlannerSceneEventHandler extends EventDispatcher<SceneEventInfo> {
    private _raycastHelper;
    private _debug;
    constructor(scene: THREE.Scene, camera: THREE.Camera, inputManager: InputManager);
    addPlanObjectHandlers(planObjectViewModel: PlanObjectViewModel): void;
    private _addPlanObjectHandlers;
    private _clickComponent;
    setCamera(camera: THREE.Camera): void;
}
