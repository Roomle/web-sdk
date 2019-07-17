import KernelViewModel from './kernel-view-model';
import { PlanElement, PlanObject } from '../../../typings/planner';
export default class PlanElementViewModel extends KernelViewModel {
    protected _container: THREE.Object3D;
    protected _boundingBox: THREE.Mesh;
    protected _object: THREE.Object3D;
    private _selectionMesh;
    constructor(planObject: PlanObject);
    getSize(): THREE.Vector3;
    update(): void;
    getPosition(): THREE.Vector3;
    getRotation(): number;
    getBounds(): THREE.Box3;
    getBoundingBox(): THREE.Mesh;
    getPlanElement(): PlanElement;
    getObject(): import("three").Object3D;
    addMesh(mesh: THREE.Mesh): void;
    getMesh(material: any): THREE.Mesh;
    getContainer(): THREE.Object3D;
    getId(): number;
    clear(): void;
    hidePreviewBox(): void;
    protected _generateBoundingBox(size: THREE.Vector3, color: number): THREE.Mesh;
    select(): void;
    deselect(): void;
}
