import { ConfiguratorKernelClass, KernelCube, KernelObjectPtrList, KernelVector3 } from './kernel';
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
    getId(): number;
}
export interface PlanObject extends PlanElement {
    size: KernelVector3;
    rotation: number;
    customColor: number;
    flipX: boolean;
    flipY: boolean;
    fixedZ: boolean;
    hasConfiguration(): boolean;
    getCatalogItemId(): string;
    getConfigurationRuntimeId(): number;
    getObjectType(): string;
}
export interface PlanInteractionHandler {
    init(reference: PlanInteractionHandler, zoomFactor: number, viewSnapDist: number, snapObjectsToWalls: boolean, shouldSnap: boolean, drawingType: any): PlanInteractionHandler;
    getConfiguratorKernel(): ConfiguratorKernelClass;
    loadPlanXML(xml: string): Plan;
    getPlan(): Plan;
    moveElementTo(planObject: KernelObject, point: KernelVector3): void;
    moveElementBy(planObject: KernelObject, distance: KernelVector3): void;
    moveObjectsBy(planObjects: KernelObjectPtrList, distance: KernelVector3): void;
    rotateObjectTo(planObject: KernelObject, angleInRad: number): void;
    setObjectRotation(planObject: KernelObject, angleInRad: number): void;
    addPlanObjects(list: KernelObjectPtrList): void;
}
export interface PlanOverview {
    area: number;
    bounds: KernelCube;
    objects: PlanObject[];
    outsideWalls: PlanElement[];
    rooms: PlanElement[];
}
export interface PlanModelViewHelper {
    getPlanOverview(planObject: KernelObject): PlanOverview;
}
