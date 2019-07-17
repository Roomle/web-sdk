import PlanObjectViewModel from '../../../common-core/src/view-model/plan-object-view-model';
import { Plan, PlanElement } from '../../../typings/planner';
import { PlannerKernelCallbackI } from '../services/planner-kernel-access';
import { RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
import PlannerSceneEventHandler from '../webgl/planner-scene-event-handler';
import StaticPlanObjectViewModel from './static-plan-object-view-model';
import ConfiguratorViewModel from '../../../common-core/src/view-model/configurator-view-model';
import { KernelEnum, KernelVector3 } from '../../../typings/kernel';
import CommonKernelAccess from '../../../common-core/src/services/common-kernel-access';
import PlanElementViewModel from '../../../common-core/src/view-model/plan-element-view-model';
export default class PlanViewModel extends ConfiguratorViewModel implements PlannerKernelCallbackI {
    private _coreReference;
    private _configurablePlanObjectViewModels;
    private _staticPlanObjectViewModels;
    private _constructionGroup;
    private _ceilingGroup;
    private _plannerMeshGenerator;
    private _plannerSceneEventHandler;
    constructor(creator: string);
    protected _getKernelAccess(): CommonKernelAccess;
    setReference(plan: Plan): void;
    clearReference(): void;
    getCorePlan(): Plan;
    addPlanElementViewModel(planElementViewModel: PlanElementViewModel): void;
    protected _addRootComponent(component: RoomleComponent): void;
    private _getPlanObjectViewModelForRuntimeId;
    getPlanObjectForId(id: number): PlanObjectViewModel;
    getConstructionGroup(): THREE.Group;
    getCeilingGroup(): THREE.Group;
    getBoundingBox(): THREE.Box3;
    /**
     * Merges geometries on the fly when creating them
     *
     * @param runtimeComponentId
     * @param meshId
     * @param materialId
     * @param transform
     * @param vertices
     * @param indices
     * @param uvCoords
     * @param normals
     * @private
     */
    setPlannerSceneEventHandler(plannerSceneEventHandler: PlannerSceneEventHandler): void;
    sceneCleared(): void;
    getStaticPlanObjectViewModels(): StaticPlanObjectViewModel[];
    getComponent(id: number): RoomleComponent;
    protected _generateMesh(meshId: string, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array, type?: KernelEnum, newGeometryInstance?: boolean): THREE.Mesh;
    protected _setMaterial(mesh: THREE.Mesh, material: any, type?: KernelEnum): void;
    Editor3dComponentCreated(id: number, position: KernelVector3, eulerAngles: KernelVector3, parentObjectRuntimeId: number, isRootComponent: boolean): void;
    addPlanObjectToScene(object3D: THREE.Object3D): void;
    handlerSwitchedPlans(planViewModel: PlanViewModel): void;
    planCompletelyLoaded(plan: Plan): void;
    beginPlanConstruction(plan: Plan): void;
    addPlanMesh(plan: Plan, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array, type: KernelEnum): void;
    endPlanConstruction(plan: Plan): void;
    planElementChanged(plan: Plan, planObject: PlanElementViewModel): void;
    planObjectConfigurationLoaded(plan: Plan, element: PlanElement, success: boolean): void;
    addMesh(planElement: PlanElement, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
}
