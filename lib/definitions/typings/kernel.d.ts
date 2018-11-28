import { PARAMETER_KERNEL_TYPE, PARAMETER_UNIT_TYPES } from '../common-core/src/utils/parameter-types';
import { ConfigurationHash, ConfigurationString, RapiElement, RapiId, RapiJson, RapiTag } from './rapi-types';
import { KernelObject } from './planner';
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
}
export interface KernelPartList {
    originPart: Component;
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
export declare const enum PLAN_VIEW_MODEL_TYPE {
    WALL = 1,
    CEILING = 7
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
export interface Component {
    id: number;
    bounds: KernelVector3;
    boxForMeasurement: KernelCube;
    position: KernelVector3;
    rotation: KernelVector3;
    childIds: EmscriptenList;
    addOnSpots: AddOnSpot[];
    parameterGroups: KernelParameterGroup[];
    [key: string]: any;
}
export interface AddOnSpot {
    position: KernelVector3;
    mask: string;
}
export interface KernelClass {
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
    requestPreviewGeometry(componentId: number, planObjectId: number): void;
    getComponentParameters(componentId: number): KernelParameter[];
    setComponentParameter(componentId: number, parameterKey: string, value: string): void;
    setPlanComponentParameters(componentIds: any, parameterKey: string, value: string): void;
    setEnvironmentVariable(key: string, value: any): void;
    getPlanObjectParameters(planObjectId: number): KernelParameter[];
    setPlanObjectParameter(planObjectId: number, parameterKey: string, value: string): void;
    dockComponent(parentId: number, parentDockId: number, childId: number, childDockId: number): void;
    dockComponentWithPosition(parentId: number, parentDockId: number, childId: number, childDockId: number, position: KernelVector3): void;
    getComponent(componentId: number): Component;
    getComponentId(componentId: number): RapiId;
    getPlanObject(planObjectId: number): PlanObject;
    getPlanComponentPossibleChildren(componentId: number): KernelPossibleChild[];
    getPlanObjectPossibleChildren(componentId: number): KernelPossibleChild[];
    getRootPlanComponentIdFromObjectId(planObjectId: number): number;
    getFullPartList(): KernelPartList;
    getSerializedConfiguration(planObjectOrComponentId: number): ConfigurationString;
    getHashOfPlanComponent(aPlanObjectOrComponentId: number): ConfigurationHash;
    getPartList(getPartList: number): KernelPartList;
    getCommonPlanComponentParameters(componentIds: any): {
        parameters: KernelParameter[];
        parameterGroups: KernelParameterGroup[];
    };
    loadComponentDefinition(conversationId: number, component: string): void;
    syncPlanObjectToView(conversationId: number, planObjectId: number): void;
}
export interface PlanObjectPtrList {
    size(): void;
    push_back(object: KernelObject): void;
}
