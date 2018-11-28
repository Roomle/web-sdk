import { PlanObject } from '../../../typings/planner';
import { RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
import PlanObjectViewModel from './plan-object-view-model';
export default class ConfiguratorPlanObjectViewModel extends PlanObjectViewModel {
    constructor(planObject: PlanObject);
    addRootComponent(component: RoomleComponent): void;
    getConfigurationRuntimeId(): number;
}
