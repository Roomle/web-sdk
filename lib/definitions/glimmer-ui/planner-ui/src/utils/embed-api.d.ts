import { RapiConfiguration, RapiId, RapiItem } from '@roomle-web-utils/typings/rapi-types';
import PlannerUi from '../ui/components/PlannerUi/component';
import { EmbedInterfaceContract } from '@roomle-web-utils/embedding/src/embed-interface';
export default class EmbeddingInterface implements EmbedInterfaceContract {
    private _plannerUi;
    constructor(planner: PlannerUi);
    private _wrapInLoadingScreen;
    private _getPlan;
    loadPlan(id: RapiId): Promise<{}>;
    switch2D(): void;
    getPlanObjects(): Promise<Array<RapiItem | RapiConfiguration>>;
    getTotalFloorArea(): Promise<any>;
    getPlanOverview(): Promise<{}>;
    getAvailableCallbacks(): (string | number | symbol)[];
}
