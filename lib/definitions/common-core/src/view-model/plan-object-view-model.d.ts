import KernelViewModel from './kernel-view-model';
import { PlanObject } from '../../../typings/planner';
export default class PlanObjectViewModel extends KernelViewModel {
    protected _container: THREE.Object3D;
    protected _boundingBox: THREE.Mesh;
    protected _object: THREE.Object3D;
    private _selectionMesh;
    constructor(planObject: PlanObject);
    update(): void;
    getPosition(): THREE.Vector3;
    getRotation(): number;
    getBounds(): THREE.Box3;
    getBoundingBox(): THREE.Mesh;
    getPlanObject(): PlanObject;
    getObject(): import("three").Object3D;
    getContainer(): THREE.Object3D;
    getId(): number;
    clear(): void;
    hidePreviewBox(): void;
    private _generateBoundingBox;
    select(): void;
    deselect(): void;
}
