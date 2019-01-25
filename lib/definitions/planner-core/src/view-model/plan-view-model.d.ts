import PlanObjectViewModel from './plan-object-view-model';
import KernelViewModel from './kernel-view-model';
import { Plan } from '../../../typings/planner';
import { KernelComponent, KernelVector3 } from '../../../typings/kernel';
import { ConfiguratorKernelCallbackI } from '../services/planner-kernel-access';
import { RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
import PlannerSceneEventHandler from '../webgl/planner-scene-event-handler';
import StaticPlanObjectViewModel from './static-plan-object-view-model';
export default class PlanViewModel extends KernelViewModel implements ConfiguratorKernelCallbackI {
    private _configurablePlanObjectViewModels;
    private _staticPlanObjectViewModels;
    private _components;
    private _componentsToMerge;
    private _mergeInProgress;
    private _geometriesMerged;
    private _mergeThreshold;
    private _componentFactory;
    private _plannerKernelAccess;
    private _plannerMeshGenerator;
    private _plannerSceneEventHandler;
    constructor(plan: Plan);
    clearReference(): void;
    getCorePlan(): Plan;
    addPlanObjectViewModel(planObjectViewModel: PlanObjectViewModel): void;
    private _addComponent;
    private _addMeshToComponentId;
    private _updateComponentInformation;
    private _getPlanObjectViewModelForRuntimeId;
    getPlanObjectForId(id: number): PlanObjectViewModel;
    Editor3dComponentCreated(id: number, position: KernelVector3, eulerAngles: KernelVector3, parentObjectRuntimeId: number, isRootComponent: boolean): void;
    Editor3dAddBakedMesh(runtimeComponentId: number, materialId: string, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
    Editor3dAddNamedMesh(runtimeComponentId: number, meshId: string, materialId: string, transform: Float32Array, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
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
    private _addMeshToComponent;
    tryToMergeComponents(): void;
    private _mergeComponent;
    updateComponentMetaInformation(component: KernelComponent): void;
    setPlannerSceneEventHandler(plannerSceneEventHandler: PlannerSceneEventHandler): void;
    Editor3dComponentDocked(componentId: number, parentId: number, componentPosition: KernelVector3, componentRotation: KernelVector3): void;
    Editor3dBeginConstruction(componentId: number): void;
    Editor3dGeometryNotReady(id: number): void;
    sceneCleared(): void;
    componentDeleted(componentId: number): void;
    getStaticPlanObjectViewModels(): StaticPlanObjectViewModel[];
    getComponent(id: number): RoomleComponent;
    setGeometriesMergedListener(fun: () => void): void;
    removeGeometriesMergedListener(): void;
    setMergeThreshold(threshold: number): void;
}
