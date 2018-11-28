import { KernelVector3 } from '../../../typings/kernel';
import CommonKernelAccess from '../../../common-core/src/services/common-kernel-access';
import { ConfigurationString } from '../../../typings/rapi-types';
export default class KernelAccess extends CommonKernelAccess {
    private _eventHandler;
    private _unitFormatter;
    private _memoryManager;
    constructor(creator: string);
    private _loadSuccess;
    private _loadError;
    private _webGlSelectedComponent;
    private _webGlSelectionCancel;
    private _uiRequestConfiguration;
    private _updateComponentParameters;
    private _webGlSelectionChange;
    private _webGlMultiSelectionChange;
    private _updateCommonComponentDependencies;
    private _updateComponentChildren;
    private _updateComponentDependencies;
    private _updatePlanObjectParameters;
    private _updatePlanObjectChildren;
    private _updatePlanObjectDependencies;
    private _updateConfigurationHasChildren;
    private _webGlDockComponent;
    private _changeUseOfHDGeometry;
    private _webGlDockComponentWithPosition;
    private _webGlPreviewDockings;
    private _webGlPreviewDockingsWithDrag;
    private _loadConfiguration;
    private _getConfigurationData;
    private _changeCommonComponentParameter;
    private _changeComponentParameter;
    private _changePlanObjectParameter;
    private _finishParameterChange;
    private _requestDeleteComponent;
    private _requestDeleteComponents;
    private _calcPrice;
    private _loadComponentIntoKernel;
    private _requestPartList;
    private _requestSync;
    private _getGlobalParameters;
    private _getPartList;
    private _getConfigurationHash;
    private _requestPlanObjectConstruction;
    isReady(): void;
    onLoadComponentError(error: Error): void;
    configurationLoaded(conversationId: number, objectId: number, componentId: number, hash: string, errors: any): void;
    componentDefinitionLoaded(conversationId: number, componentId: number): void;
    componentDefinitionLoadingError(conversationId: number, errorMessage: string): void;
    configurationLoadingError(): void;
    componentConfigurationUpdated(componentId: number): void;
    componentMetaUpdated(componentId: number): void;
    componentParameters(): void;
    componentDeleted(componentId: number): void;
    requestComponentDimensions(): void;
    planObjectCreated(conversationId: number, planObjectId: number): void;
    planObjectUpdated(planObjectId: number): void;
    planObjectConfigurationUpdated(planObjectId: number, configuration: ConfigurationString, hash: string): void;
    planObjectDeleted(): void;
    requestPlanObjectDimensions(): void;
    sceneCleared(): void;
    requestExternalMesh(meshId: string, quality: number): Promise<{}>;
    Editor3dComponentCreated(id: number, position: KernelVector3, eulerAngles: KernelVector3, parent: number): void;
    Editor3dRootComponentCreated(id: number, position: KernelVector3, eulerAngles: KernelVector3, parentObjectId: number): void;
    Editor3dBeginConstruction(id: number): void;
    Editor3dEndConstruction(id: number): void;
    Editor3dGeometryReady(id: number): void;
    Editor3dGeometryNotReady(id: number): void;
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
    Editor3dComponentDocked(componentId: number, parentId: number, componentPosition: KernelVector3, componentRotation: KernelVector3): void;
    Editor3dUpdatePlanObjectPosition(): void;
    Editor3dUpdatePlanObjectRotation(): void;
    Editor3dUpdatePlanObjectTransform(): void;
    Editor3dUpdatePlanComponentPosition(): void;
    Editor3dUpdatePlanComponentRotation(): void;
    Editor3dUpdatePlanComponentTransform(): void;
    Editor3dAddBakedMesh(runtimeComponentId: number, materialId: string, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
    Editor3dAddNamedMesh(runtimeComponentId: number, meshId: string, materialId: string, transform: Float32Array, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
}
