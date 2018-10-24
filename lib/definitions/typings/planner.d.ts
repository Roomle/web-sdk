import { KernelCube, KernelVector3 } from './kernel';
export interface EMSReference {
    jsObject: any;
    delete(): any;
}
export interface KernelObject {
    extRef: EMSReference;
    clone(): KernelObject;
    delete(): void;
}
export interface Plan extends KernelObject {
    getPlanObjects(): any;
    getBounds(): KernelCube;
}
export interface PlanElement extends KernelObject {
    getType(): any;
    getCenter(): KernelVector3;
}
export interface PlanObject extends PlanElement {
    size: KernelVector3;
    rotation: number;
    customColor: number;
    flipX: boolean;
    flipY: boolean;
    fixedZ: boolean;
    getId(): number;
    hasConfiguration(): boolean;
    getCatalogItemId(): string;
    getConfigurationRuntimeId(): number;
    getObjectType(): string;
}
