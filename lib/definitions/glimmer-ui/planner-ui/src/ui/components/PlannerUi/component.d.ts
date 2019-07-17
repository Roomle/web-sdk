import Component from '@glimmer/component';
export default class PlannerUi extends Component {
    private _loadingScreen;
    private _fatalError;
    private _plannerCore;
    private _embedInterface;
    state: {
        actualPlanId: string;
        isLoading: boolean;
        isCatalogOpen: boolean;
        useCatalog: any;
    };
    constructor(options: object);
    private _setSkinParameter;
    didInsertElement(): void;
    initPlannerCore(): void;
    getPlannerCoreApi(): import("../../../../../../planner-core/src/roomle-planner").default;
    getLoadingScreen(): any;
    openCatalog(): void;
    closeCatalog(): void;
}
