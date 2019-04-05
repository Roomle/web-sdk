import PlanObjectViewModel from '../../../common-core/src/view-model/plan-object-view-model';
import { Plan } from '../../../typings/planner';
import { RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
import PlannerSceneEventHandler from '../webgl/planner-scene-event-handler';
import StaticPlanObjectViewModel from './static-plan-object-view-model';
import ConfiguratorViewModel from '../../../common-core/src/view-model/configurator-view-model';
import { KernelEnum, KernelVector3 } from '../../../typings/kernel';
import CommonKernelAccess from '../../../common-core/src/services/common-kernel-access';
export default class PlanViewModel extends ConfiguratorViewModel {
    private _coreReference;
    private _configurablePlanObjectViewModels;
    private _staticPlanObjectViewModels;
    private _plannerMeshGenerator;
    private _plannerSceneEventHandler;
    constructor(creator: string);
    protected _getKernelAccess(): CommonKernelAccess;
    setReference(plan: Plan): void;
    clearReference(): void;
    getCorePlan(): Plan;
    addPlanObjectViewModel(planObjectViewModel: PlanObjectViewModel): void;
    protected _addRootComponent(component: RoomleComponent): void;
    private _getPlanObjectViewModelForRuntimeId;
    getPlanObjectForId(id: number): PlanObjectViewModel;
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
    protected _generateMesh(meshId: string, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array, newGeometryInstance?: boolean): THREE.Mesh;
    protected _setMaterial(mesh: THREE.Mesh, material: any, type?: KernelEnum): void;
    Editor3dComponentCreated(id: number, position: KernelVector3, eulerAngles: KernelVector3, parentObjectRuntimeId: number, isRootComponent: boolean): void;
}
