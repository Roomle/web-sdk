import { PlanObject } from '../../../typings/planner';
import PlanElementViewModel from './plan-element-view-model';
export default class PlanObjectViewModel extends PlanElementViewModel {
    constructor(planObject: PlanObject);
    getPlanObject(): PlanObject;
    getSize(): THREE.Vector3;
    update(): void;
}
