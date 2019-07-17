import EventDispatcher from '../../../configurator-core/src/utils/event-dispatcher';
import PlanElementViewModel from '../../../common-core/src/view-model/plan-element-view-model';
export declare const enum SELECTION_MODE {
    STANDARD = "standard",
    MULTISELECT = "multiselect"
}
export declare const enum SELECTION_EVENT {
    SELECT_PLAN_ELEMENT = 0,
    DESELECT_PLAN_ELEMENT = 1
}
export declare class PlannerSelectionHandlerEvent {
    planElementViewModel: PlanElementViewModel;
    constructor(data: {
        planElementViewModel?: PlanElementViewModel;
    });
}
export default class PlannerSelectionHandler extends EventDispatcher<PlannerSelectionHandlerEvent> {
    private _selectionMode;
    protected _selectedPlanElementViewModels: Map<number, PlanElementViewModel>;
    check(planElementViewModel: PlanElementViewModel): void;
    cancelSelection(): void;
    private _checkStandard;
    private _checkMulti;
    setSelectionMode(mode: SELECTION_MODE): void;
    getSelectionMode(): SELECTION_MODE;
    hasSelection(): boolean;
    getSelectedIds(): number[];
    isSelected(id: number): boolean;
}
