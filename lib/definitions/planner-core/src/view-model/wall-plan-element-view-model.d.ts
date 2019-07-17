import { PlanObject } from '../../../typings/planner';
import PlanElementViewModel from '../../../common-core/src/view-model/plan-element-view-model';
export default class WallPlanElementViewModel extends PlanElementViewModel {
    constructor(planObject: PlanObject);
    addMesh(mesh: THREE.Mesh): void;
}
