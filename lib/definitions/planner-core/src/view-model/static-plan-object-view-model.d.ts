import { PlanObject } from '../../../typings/planner';
import PlanObjectViewModel from '../../../common-core/src/view-model/plan-object-view-model';
import { RapiItem } from '../../../typings/rapi-types';
export default class StaticPlanObjectViewModel extends PlanObjectViewModel {
    private _staticItemLoader;
    private _glbUrl;
    constructor(planObject: PlanObject);
    setRapiItem(rapiItem: RapiItem): Promise<void>;
    private _addStaticItem;
    needsRapiItem(): boolean;
    private _getGLBUrl;
    getGLBUrl(): string;
}
