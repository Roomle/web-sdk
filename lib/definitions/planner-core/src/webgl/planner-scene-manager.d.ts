import { CanvasOffset } from '../../../common-core/src/common-interfaces';
import { PlannerKernelCallbackI } from '../services/planner-kernel-access';
import { Plan, PlanElement } from '../../../typings/planner';
import PlanViewModel from '../view-model/plan-view-model';
import SceneManager from '../../../common-core/src/webgl/scene-manager';
import { KernelEnum } from '../../../typings/kernel';
import { RoomlePlannerCallback } from '../roomle-planner';
import PlanObjectViewModel from '../../../common-core/src/view-model/plan-object-view-model';
import InputManager from '../../../common-core/src/input/input-manager';
import { CAMERA_TYPE } from '../../../common-core/src/cameracontrol/camera-type';
import PlanElementViewModel from '../../../common-core/src/view-model/plan-element-view-model';
import { BakedShadowParams } from '../../../typings/pixotron';
export default class PlannerSceneManager extends SceneManager implements PlannerKernelCallbackI {
    private _plannerKernelAccess;
    private _rapiAccess;
    private _plannerMeshGenerator;
    private _plannerInputManager;
    private _roomlePlannerUiCallback;
    private _localStorageHelper;
    private _outlinePass;
    private _plannerSceneEventHandler;
    private _planViewModel;
    private _roomlePlannerCallback;
    private _sky;
    private _bounds;
    private _planId;
    private _preloadScene;
    private _staticItemGuard;
    private _configurableItemGuard;
    constructor(creator: string, offset: CanvasOffset, plannerCallback: RoomlePlannerCallback, mode?: CAMERA_TYPE);
    protected _setupScene(offset?: CanvasOffset, transparent?: boolean): void;
    zoomToPlanObject(planObject: PlanObjectViewModel): void;
    protected onBeforeRender(): void;
    protected _getInputManager(): InputManager;
    protected createCameraControl(mode: CAMERA_TYPE): void;
    resetCamera(): void;
    resetCameraToState(): void;
    resetCameraPositionToStart(): void;
    private _getYRotationOfObject;
    loadStaticPlanObjects(): void;
    private _staticItemsLoaded;
    preload(id: string): void;
    planXMLLoaded(plan: Plan): void;
    planCompletelyLoaded(plan: Plan): void;
    handlerSwitchedPlans(planViewModel: PlanViewModel): void;
    private _itemsLoaded;
    beginPlanConstruction(plan: Plan): void;
    addPlanMesh(plan: Plan, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array, type: KernelEnum): void;
    endPlanConstruction(plan: Plan): void;
    addPlanObjectToScene(object3D: THREE.Object3D): void;
    planElementChanged(plan: Plan, planObject: PlanElementViewModel): void;
    exportGLB(exportObjects?: THREE.Object3D[], id?: string): void;
    importGLB(url: string): void;
    clearScene(): void;
    private _addSky;
    switchTo2D(): void;
    switchTo3D(): void;
    private _setCeiling;
    cameraControlChanged(): void;
    sceneChanged(): void;
    private _switchToHSC;
    closeHSC(): void;
    switchToFirstPerson(): void;
    protected _onKeyDown(event: KeyboardEvent): void;
    protected _onKeyUp(event: KeyboardEvent): void;
    setMode(mode: CAMERA_TYPE): void;
    private _highlight;
    destroy(): void;
    getPixotronParams(): any;
    getBakedShadowParams(): BakedShadowParams;
    planObjectConfigurationLoaded(plan: Plan, element: PlanElement, success: boolean): void;
    addMesh(planElement: PlanElement, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
    private _updateBounds;
}
