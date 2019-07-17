import { KernelEnum, KernelVector3 } from '../../../typings/kernel';
import PlanViewModel from '../view-model/plan-view-model';
import { KernelObject, Plan, PlanElement, PlanInteractionHandler, PlanObject } from '../../../typings/planner';
import CommonKernelAccess from '../../../common-core/src/services/common-kernel-access';
import { ConfigurationString, RapiItem } from '../../../typings/rapi-types';
import RoomlePlannerUiCallback from '../roomle-planner-ui-callback';
import PlanElementViewModel from '../../../common-core/src/view-model/plan-element-view-model';
export interface PlannerKernelCallbackI {
    handlerSwitchedPlans(planViewModel: PlanViewModel): void;
    planCompletelyLoaded(plan: Plan): void;
    beginPlanConstruction(plan: Plan): void;
    addMesh(planElement: PlanElement, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
    addPlanMesh(plan: Plan, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array, type: KernelEnum): void;
    endPlanConstruction(plan: Plan): void;
    addPlanObjectToScene(object3D: THREE.Object3D): void;
    planElementChanged(plan: Plan, planObject: PlanElementViewModel): void;
    planObjectConfigurationLoaded(plan: Plan, element: PlanElement, success: boolean): void;
}
export default class PlannerKernelAccess extends CommonKernelAccess {
    private _kernelAccessCallback;
    private _roomlePlannerUiCallback;
    private _planInteractionHandler;
    private _plannerKernelCallbackListener;
    readonly kernelContainer: any;
    constructor(creator: string);
    private _loadSuccess;
    private _loadError;
    private _createPlanInteractionHandler;
    addPlannerListener(listener: PlannerKernelCallbackI): void;
    removePlannerListener(listener: PlannerKernelCallbackI): void;
    isReady(): void;
    readonly callbacks: RoomlePlannerUiCallback;
    readonly planInteractionHandler: PlanInteractionHandler;
    readonly planModelViewHelper: any;
    catalogItemLoaded(catalogItem: RapiItem): void;
    insertItems(itemList: RapiItem[]): Promise<void>;
    private _rapiItemToKernelItem;
    onLoadComponentError(error: Error): void;
    configurationLoaded(conversationId: number, objectId: number, componentId: number, hash: string, errors: any): void;
    componentDefinitionLoaded(conversationId: number, componentId: number): void;
    componentDefinitionLoadingError(conversationId: number, errorMessage: string): void;
    configurationLoadingError(): void;
    componentConfigurationUpdated(componentId: number): void;
    componentParameters(): void;
    requestComponentDimensions(): void;
    planObjectCreated(conversationId: number, planObjectId: number): void;
    planObjectUpdated(planObjectId: number): void;
    planObjectConfigurationUpdated(planObjectId: number, configuration: ConfigurationString, hash: string): void;
    planObjectDeleted(): void;
    requestPlanObjectDimensions(): void;
    cleanUpCallbacks(): void;
    registerCallbacks(): void;
    requestExternalMesh(meshId: string, quality: number): Promise<{}>;
    Editor3dRootComponentCreated(id: number, position: KernelVector3, eulerAngles: KernelVector3, parentObjectRuntimeId: number): void;
    Editor3dPlanObjectConstructionDone(planObjectId: number): void;
    Editor3dBeginGroup(): void;
    Editor3dEndGroup(): void;
    Editor3dSetMaterial(): void;
    Editor3dLoadMaterial(): void;
    Editor3dAddDockPreview(componentId: number, previewId: number): void;
    Editor3dSetPreviewPointAssociations(dockPairs: any, previewId: number): void;
    Editor3dSetPreviewLineAssociations(dockLines: any, previewId: number): void;
    Editor3dPreviewConstructionDone(componentId: number, objectId: number): void;
    Editor3dTranslateBy(): void;
    Editor3dRotateBy(): void;
    Editor3dRotateAround(): void;
    Editor3dAddCube(): void;
    Editor3dAddCubeUVMod(): void;
    Editor3dAddSphere(): void;
    Editor3dAddSphereUVMod(): void;
    Editor3dAddRectangle(): void;
    Editor3dAddRectangleUVMod(): void;
    Editor3dAddMesh(): void;
    Editor3dAddMeshUVMod(): void;
    Editor3dAddMeshUVCoord(): void;
    Editor3dAddCylinder(): void;
    Editor3dAddCylinderUVMod(): void;
    Editor3dAddPrism(): void;
    Editor3dAddPrismUVMod(): void;
    Editor3dAddFittingPoint(): void;
    Editor3dAddFittingLine(): void;
    Editor3dSelectObject(): void;
    Editor3dCopy(): void;
    Editor3dUpdatePlanObjectPosition(): void;
    Editor3dUpdatePlanObjectRotation(): void;
    Editor3dUpdatePlanObjectTransform(): void;
    Editor3dUpdatePlanComponentPosition(): void;
    Editor3dUpdatePlanComponentRotation(): void;
    Editor3dUpdatePlanComponentTransform(): void;
    planElementRemoved(element: PlanElement): void;
    handlerSwitchedPlans(fromPlan: Plan, toPlan: Plan): void;
    planBoundsChanged(): void;
    planCleared(): void;
    planCompletelyLoaded(plan: Plan): void;
    planElement3dMeshChanged(plan: Plan, element: PlanElement): void;
    planElementAdded(plan: Plan, element: PlanElement): void;
    planElementChanged(plan: Plan, element: KernelObject): void;
    planHistoryStateChanged(): void;
    planObjectConfigurationCreated(plan: Plan, element: PlanObject): void;
    planObjectConfigurationLoaded(plan: Plan, element: PlanElement, success: boolean): void;
    requestCatalogItem(catalogItemId: string): void;
    startedDrawing(): void;
    stoppedDrawing(): void;
    updateMesh2d(): void;
    beginConstruction(): void;
    addMesh(planElement: PlanElement, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
    endConstruction(): void;
    beginPlanConstruction(plan: Plan): void;
    addPlanMesh(plan: Plan, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array, type: KernelEnum): void;
    endPlanConstruction(plan: Plan): void;
    private _coupleReferences;
    private _decoupleReferences;
}
