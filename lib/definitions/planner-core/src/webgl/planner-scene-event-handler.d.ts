import EventDispatcher from '../../../configurator-core/src/utils/event-dispatcher';
import InputManager from '../../../common-core/src/input/input-manager';
import PlanObjectViewModel from '../../../common-core/src/view-model/plan-object-view-model';
import { SELECTION_MODE } from '../utils/planner-selection-handler';
import PlanViewModel from '../view-model/plan-view-model';
import PlanElementViewModel from '../../../common-core/src/view-model/plan-element-view-model';
export declare const enum PLANNER_SCENE_EVENT {
    SELECT_PLAN_ELEMENT = 0,
    DESELECT_PLAN_ELEMENT = 1
}
export declare class SceneEventInfo {
    planElementViewModel: PlanElementViewModel;
    resetCamera: boolean;
    constructor(data: {
        planElementViewModel?: PlanElementViewModel;
        resetCamera?: boolean;
    });
}
export interface PlanObjectEventInfo {
    hasListener: boolean;
    priority: number;
    roomleId: number;
}
export default class PlannerSceneEventHandler extends EventDispatcher<SceneEventInfo> {
    private _plannerSelectionHandler;
    private _plannerKernelAccess;
    private _planViewModel;
    private _raycastHelper;
    private _debug;
    private _draggedObject;
    private _hoveredObject;
    constructor(scene: THREE.Scene, camera: THREE.Camera, inputManager: InputManager);
    addPlanObjectHandlers(planObjectViewModel: PlanObjectViewModel): void;
    addWallHandlers(planElementViewModel: PlanElementViewModel): void;
    private _addPlanObjectHandlers;
    private _addPlanElementHandlers;
    private _clickElement;
    private _hoverOn;
    private _hoverOff;
    private _setCursor;
    setCamera(camera: THREE.Camera): void;
    setScene(scene: THREE.Scene): void;
    getSelectedIds(): number[];
    setSelectionMode(selectionMode: SELECTION_MODE): void;
    setPlanViewModel(planViewModel: PlanViewModel): void;
    private _dragStart;
    private _drag;
    private _dragEnd;
    private _rotate;
}
