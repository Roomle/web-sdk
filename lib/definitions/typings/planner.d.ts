import { KernelClass, KernelCube, KernelVector3, PlanObjectPtrList } from './kernel';
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
    getTotalFloorArea(): number;
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
export interface PlanInteractionHandler {
    init(reference: PlanInteractionHandler, zoomFactor: number, viewSnapDist: number, snapObjectsToWalls: boolean, shouldSnap: boolean, drawingType: any): PlanInteractionHandler;
    getConfiguratorKernel(): KernelClass;
    loadPlanXML(xml: string): Plan;
    getPlan(): Plan;
    moveElementTo(planObjects: KernelObject, point: KernelVector3): void;
    moveElementBy(planObjects: KernelObject, distance: KernelVector3): void;
    moveObjectsBy(planObjects: PlanObjectPtrList, distance: KernelVector3): void;
}
