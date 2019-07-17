import ConfiguratorContext from './webgl/configurator-context';
import { KernelParameter, KernelPart, KernelVector3, PlanObject, VariantsList } from '../../typings/kernel';
import CommonKernelAccess from './services/common-kernel-access';
import { ConfigurationHash, ConfigurationString, RapiPrice, ArticleNumber } from '../../typings/rapi-types';
import { CommonConfiguratorKernelCallbackI } from './common-configurator-kernel-callback';
import { LoadOptions } from '../../configurator-core/src/roomle-configurator';
export interface ConfiguratorKernelCallbackI extends CommonConfiguratorKernelCallbackI {
    planObjectCreated(conversationId: number, planObjectId: number): void;
    planObjectUpdated(planObject: PlanObject): void;
    planObjectConfigurationUpdated(planObjectId: number, configuration: ConfigurationString, hash: string): void;
    configurationLoaded(conversationId: number, objectId: number, componentId: number, hash: string, errors: any): void;
    Editor3dAddDockPreview(componentId: number, previewId: number): void;
    Editor3dSetPreviewPointAssociations(dockPairs: any, previewId: number): void;
    Editor3dSetPreviewLineAssociations(dockLines: any, previewId: number): void;
    Editor3dPreviewConstructionDone(componentId: number, objectId: number): void;
    Editor3dPlanObjectConstructionDone(planObjectId: number): void;
    Editor3dComponentDocked(componentId: number, parentId: number, componentPosition: KernelVector3, componentRotation: KernelVector3): void;
    finishParameterChange(resolve: () => void, reject: () => void): void;
}
export default class KernelAccess extends CommonKernelAccess {
    private _unitFormatter;
    private _memoryManager;
    private _configuratorKernelAccessCallback;
    private _configuratorContext;
    muteKernelCallbacks: boolean;
    private _lastPartListHash;
    constructor(creator: string);
    private _loadSuccess;
    private _loadError;
    selectedComponent(componentId: number): void;
    uiRequestConfiguration(objectId: number): void;
    private _updateComponentParameters;
    selectionChange(componentId: number, isRoot: boolean): void;
    multiSelectionChange(runtimeComponentIds: number[], rootComponentId: number): void;
    private _updateCommonComponentDependencies;
    private _updateComponentChildren;
    private _updateComponentDependencies;
    private _updatePlanObjectParameters;
    private _enableRootComponentParametersAsGlobal;
    private _updatePlanObjectChildren;
    updatePlanObjectDependencies(planObjectId: number): void;
    private _updateConfigurationHasChildren;
    dockComponent(parentId: number, parentDockId: number, childId: number, childDockId: number): void;
    changeUseOfHDGeometry(context: ConfiguratorContext, useHDGeometry: boolean): void;
    webGlPreviewDockings(context: ConfiguratorContext, dragIn: boolean): void;
    previewDockingsWithDrag(componentId: number, planObjectId: number): void;
    loadConfiguration(configuration: ConfigurationString, options: LoadOptions): void;
    getConfigurationData(planObjectId: number): Promise<{}>;
    changeCommonComponentParameter(componentIds: number[], parameterKey: string, type: string, value: string, resolve: () => void, reject: () => void): void;
    changeComponentParameter(componentId: number, parameterKey: string, type: string, value: string, resolve: () => void, reject: () => void): void;
    changePlanObjectParameter(planObjectId: number, parameterKey: string, type: string, value: string, resolve: () => void, reject: () => void): void;
    private _finishParameterChange;
    requestDeleteComponents(componentIds: number[]): void;
    private _calcPrice;
    loadComponentIntoKernel(component: string): void;
    requestPartListAndUpdatePricesOfParts(hash?: ConfigurationHash, prices?: Map<ArticleNumber, RapiPrice>): Promise<void>;
    addUiDataToPartList(partList: KernelPart[], hash: string): KernelPart[];
    requestSync(conversationId: number, planObjectId: number): void;
    getGlobalParameters(planObjectId: number, rootComponentParametersAsGlobal: boolean): Promise<KernelParameter[]>;
    getPartList(): Promise<{}>;
    getConfigurationHash(context: ConfiguratorContext): Promise<{}>;
    requestPlanObjectConstruction(objectId: number): void;
    isReady(): void;
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
    planObjectConfigurationUpdated(planObjectId: number, configuration: ConfigurationString, hash: string): Promise<void>;
    private _onBoundsUpdate;
    planObjectDeleted(): void;
    requestPlanObjectDimensions(): void;
    requestExternalMesh(meshId: string, quality: number): Promise<{}>;
    Editor3dComponentCreated(id: number, position: KernelVector3, eulerAngles: KernelVector3, parent: number): void;
    Editor3dRootComponentCreated(id: number, position: KernelVector3, eulerAngles: KernelVector3, parentObjectId: number): void;
    Editor3dGeometryReady(id: number): void;
    Editor3dGeometryNotReady(id: number): void;
    Editor3dPlanObjectConstructionDone(planObjectId: number): Promise<{
        totalSum: number;
        partMap: Map<string, KernelPart>;
    }>;
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
    getRuntimeComponentIdOfRootComponent(planObjectId: number): number;
    resume(): void;
    listOfVariants: (componentId: string, list: VariantsList) => void;
    listOfVariantsError: () => void;
}
export declare function logKernelCall(target: any, propertyName: string): void;
