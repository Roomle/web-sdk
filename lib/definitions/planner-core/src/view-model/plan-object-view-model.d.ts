import KernelViewModel from './kernel-view-model';
import { PlanObject } from '../../../typings/planner';
export default class PlanObjectViewModel extends KernelViewModel {
    protected _object: THREE.Object3D;
    protected _boundingBox: THREE.Mesh;
    constructor(planObject: PlanObject);
    getBounds(): THREE.Box3;
    getBoundingBox(): THREE.Mesh;
    gePlanObject(): PlanObject;
    getMesh(): THREE.Object3D;
    getRuntimeId(): number;
    clear(): void;
}
