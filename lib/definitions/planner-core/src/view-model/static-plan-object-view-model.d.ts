import { PlanObject } from '../../../typings/planner';
import PlanObjectViewModel from './plan-object-view-model';
import { RapiItem } from '../../../typings/rapi-types';
export default class StaticPlanObjectViewModel extends PlanObjectViewModel {
    private _staticItemLoader;
    constructor(planObject: PlanObject);
    setRapiItem(rapiItem: RapiItem): Promise<void>;
    private _addStaticItem;
    private _getGLBUrl;
}
