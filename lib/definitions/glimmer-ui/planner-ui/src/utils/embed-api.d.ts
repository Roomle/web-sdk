import { RapiId } from '@roomle-web-utils/typings/rapi-types';
import PlannerUi from '../ui/components/PlannerUi/component';
export default class EmbeddingInterface {
    private _plannerUi;
    constructor(planner: PlannerUi);
    private _wrapInLoadingScreen;
    private _getPlan;
    loadPlan(id: RapiId): Promise<{}>;
    switch2D(): void;
    getPlanObjects(): Promise<Array<{
        id: RapiId;
    }>>;
    getTotalFloorArea(): Promise<any>;
}
