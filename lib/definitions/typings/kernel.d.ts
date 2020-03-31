import { PARAMETER_KERNEL_TYPE, PARAMETER_UNIT_TYPES } from '../common-core/src/utils/parameter-types';
import { ConfigurationHash, ConfigurationString, RapiElement, RapiId, RapiJson, RapiTag } from './rapi-types';
import { KernelObject } from './planner';
import { BindingError, InternalError, UnboundTypeError } from './ems';
export interface WasmDbEntry {
    key: string;
    wasmVersion: string;
    wasmModule: any;
}
export interface KernelVector3 {
    x: number;
    y: number;
    z: number;
}
export interface KernelValue {
    value: string;
    label: string;
    thumbnail: string;
}
export interface KernelRange {
    valueFrom: number;
    valueTo: number;
    type: string;
}
export interface UiKernelRange {
    valueFrom: string;
    valueTo: string;
    type: string;
}
export interface KernelCatalogItem {
    configuration: string;
    flipable: boolean;
    layer: number;
    orderable: boolean;
    scaleable: boolean;
    size: KernelVector3;
    type: string;
    detailType: string;
}
export interface ConfigurationObject extends Object {
    componentId: RapiId;
    configuration: ConfigurationString;
    [key: string]: any;
}
export interface KernelPossibleChild {
    componentId?: RapiId;
    itemId?: RapiId;
    isDefault?: boolean;
    possible: boolean;
    group: string;
}
export interface KernelPartList {
    originPart: KernelComponent;
    fullList: KernelPart[];
}
export interface KernelPart {
    articleNr: string;
    componentId: string;
    count: number;
    currencySymbol: string;
    label: string;
    parameters: KernelPartListParameter[];
    price: number;
    retailerPrice: number;
    [key: string]: any;
}
export interface KernelPartListParameter {
    label: string;
    type: string;
    unitType: string;
    value: string;
    valueLabel: string;
    valueThumbnail: string;
}
export interface KernelParameter {
    enabled: boolean;
    key: string;
    label: string;
    type: PARAMETER_KERNEL_TYPE;
    value: string;
    sort: number;
    unitType: PARAMETER_UNIT_TYPES;
    validGroups: [RapiId];
    validRange: KernelRange;
    validValues: KernelValue[];
    group: string;
}
export interface KernelParameterGroup {
    key: string;
    label: string;
    sort: number;
    collapsed: boolean;
}
export interface KernelEnum {
    value: number;
}
export interface UiKernelParameter extends KernelParameter {
    uiType: string;
    validRangeLabels?: UiKernelRange;
    groups: Promise<RapiJson[]>;
    valueLabel: string;
    grouping: KernelParameterGroup;
}
export interface UiPossibleChild extends RapiElement {
    isItem: boolean;
    isComponent: boolean;
    group: string;
}
export interface UiPossibleChildTag extends RapiTag {
    possibleChildren: UiPossibleChild[];
}
export interface DockPair {
    parentId: number;
    parentDockId: number;
    childId: number;
    childDockId: number;
    position: KernelVector3;
    rotation: KernelVector3;
    [key: string]: any;
}
export interface DockLine {
    parentId: number;
    parentDockId: number;
    childId: number;
    childDockId: number;
    position: KernelVector3;
    rotation: KernelVector3;
    lineFrom: KernelVector3;
    lineTo: KernelVector3;
    positionFrom: KernelVector3;
    positionTo: KernelVector3;
    [key: string]: any;
}
export interface KernelCube {
    origin: KernelVector3;
    size: KernelVector3;
}
export interface PlanObject {
    bounds: KernelVector3;
    boxForMeasurement: KernelCube;
    id: number;
    rootPlanComponentId: number;
    [key: string]: any;
}
export interface EmscriptenList {
    size: () => number;
    length: number;
}
export interface KernelComponent {
    id: number;
    hash: string;
    bounds: KernelVector3;
    boxForMeasurement: KernelCube;
    position: KernelVector3;
    rotation: KernelVector3;
    possibleChildren: KernelPossibleChild[];
    childIds: EmscriptenList;
    addOnSpots: AddOnSpot[];
    parameters: KernelParameter[];
    parameterGroups: KernelParameterGroup[];
    dimensionings: Dimensioning[];
    [key: string]: any;
}
export declare const enum DIMENSIONING_TYPE {
    X = 0,
    Y = 1,
    Z = 2
}
export interface Dimensioning {
    type: {
        value: DIMENSIONING_TYPE;
    };
    from: number;
    to: number;
    label: string;
    level: number;
    visible: boolean;
    maxLevel: number;
}
export interface AddOnSpot {
    position: KernelVector3;
    mask: string;
}
export interface KernelContainer {
    wasmBinaryFile: string;
    print: (msg: string) => void;
    printErr: (msg: string) => void;
    quit: (msg: string) => void;
    thisProgram: string;
    reallocBuffer: (size: string) => void;
    InternalError: InternalError;
    BindingError: BindingError;
    UnboundTypeError: UnboundTypeError;
    wasmTableSize: number;
    wasmMaxTableSize: number;
    run: (a: any) => void;
    abort: (msg: string) => void;
    noExitRuntime: boolean;
    usingWasm: boolean;
    calledRun: boolean;
    setExternalHelpers: (kernelIo: any, utils: any) => void;
    registerConfiguratorCallback: (callbacksObject: any) => void;
    unregisterConfiguratorCallback: (callbacksObject: any) => void;
}
export interface KernelDockPairToPoint {
    parentId: number;
    parentDockId: number;
    childId: number;
    childDockId: number;
    position: KernelVector3f;
    rotation: KernelVector3f;
}
export interface KernelVector2f {
    x: number;
    y: number;
    vectorInRoomleSpace(): KernelVector2f;
    vectorInKernelSpace(): KernelVector2f;
    convertToRoomleSpace(): void;
    convertToKernelSpace(): void;
}
export interface KernelVector3f {
    x: number;
    y: number;
    z: number;
}
export interface KernelDockPairToLine {
    parentId: number;
    parentDockId: number;
    childId: number;
    childDockId: number;
    position: KernelVector3f;
    rotation: KernelVector3f;
    positionFrom: KernelVector3f;
    positionTo: KernelVector3f;
    lineFrom: KernelVector3f;
    lineTo: KernelVector3f;
}
export interface KernelVariable {
    key: string;
    type: string;
    value: string;
}
export interface KernelParameterValue {
    value: string;
    label: string;
    thumbnail: string;
}
export interface KernelConfiguration {
    componentId: string;
    parameters: Map<string, string>;
    dockParent: string;
    dockPosition: string;
    children: KernelConfiguration[];
}
export interface KernelAddOnSpot {
    mask: string;
    position: KernelVector3f;
}
export interface KernelParamKeyValuePair {
    parameterKey: string;
    parameterValue: string;
}
export interface KernelVariant {
    componentId: string;
    articleNr: string;
    customerPrice: number;
    retailPrice: number;
    currencySymbol: string;
    parameterValues: KernelParameterValue[];
}
export interface ConfiguratorKernelClass {
    useHDGeometry(requestUseHDGeometry: boolean): void;
    clearScene(): void;
    clearAll(): void;
    loadConfiguration(kernelConversationId: number, configurationObject: ConfigurationString, position: KernelVector3): void;
    loadPlainComponent(conversationId: number, componentId: RapiId, configuration: ConfigurationString): void;
    loadFreeFlyingConfiguration(conversationId: number, configuration: ConfigurationString): void;
    loadComponent(conversationId: number, configurationString: ConfigurationString, configuration: ConfigurationObject, parentId: number): void;
    deleteComponent(componentId: number): void;
    deletePlanComponents(componentIds: any): void;
    resetPriceListIds(): void;
    addPriceList(newLocale: string): void;
    loadedSubComponent(parentId: number, partId: number, componentId: string, configuration: ConfigurationString): void;
    requestPlanObjectConstruction(planObjectId: number): void;
    requestPlanComponentConstruction(componentId: number): void;
    requestPlanComponentConstructionRecursive(componentId: number): void;
    requestPreviewGeometry(componentId: number, planObjectId: number): void;
    getComponentParameters(componentId: number): KernelParameter[];
    setComponentParameter(componentId: number, parameterKey: string, value: string): void;
    setPlanComponentParameters(componentIds: any, parameterKey: string, value: string): void;
    setEnvironmentVariable(key: string, value: any): void;
    getPlanObjectParameters(planObjectId: number): KernelParameter[];
    setPlanObjectParameter(planObjectId: number, parameterKey: string, value: string): void;
    dockComponent(parentId: number, parentDockId: number, childId: number, childDockId: number): void;
    dockComponentWithPosition(parentId: number, parentDockId: number, childId: number, childDockId: number, position: KernelVector3): void;
    getComponent(componentId: number): KernelComponent;
    getComponentId(componentId: number): RapiId;
    getPlanObject(planObjectId: number): PlanObject;
    getPlanComponentPossibleChildren(componentId: number): KernelPossibleChild[];
    getPlanObjectPossibleChildren(componentId: number): KernelPossibleChild[];
    getRootPlanComponentIdFromObjectId(planObjectId: number): number;
    getFullPartList(): KernelPartList;
    getSerializedConfiguration(planObjectOrComponentId: number): ConfigurationString;
    getHashOfConfiguration(aPlanObjectOrComponentId: number): ConfigurationHash;
    getPartList(getPartList: number): KernelPartList;
    getCommonPlanComponentParameters(componentIds: any): {
        parameters: KernelParameter[];
        parameterGroups: KernelParameterGroup[];
    };
    loadComponentDefinition(conversationId: number, component: string): void;
    syncPlanObjectToView(conversationId: number, planObjectId: number): void;
    addMeshCorto(meshId: string, quality: number, data: Uint8Array): void;
    setMaterialsInGroup(groupId: string, materialIds: string[]): void;
    setActiveGroupInView(groupId: string): void;
}
export interface KernelObjectPtrList {
    size(): void;
    push_back(object: KernelObject): void;
}
export interface ParamterKeyValue {
    parameterKey: string;
    parameterValue: string;
}
export interface VariantsList {
    componentId: string;
    parameterValues: ParamterKeyValue[];
    parts: KernelPart[];
}
