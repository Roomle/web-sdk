import PlanObjectViewModel from '../view-model/plan-object-view-model';
import EventDispatcher from '../../../configurator-core/src/utils/event-dispatcher';
export declare const enum SELECTION_MODE {
    STANDARD = "standard",
    MULTISELECT = "multiselect"
}
export declare const enum SELECTION_EVENT {
    SELECT_PLAN_OBJECT = 0,
    DESELECT_PLAN_OBJECT = 1
}
export declare class PlannerSelectionHandlerEvent {
    planObjectViewModel: PlanObjectViewModel;
    constructor(data: {
        planObjectViewModel?: PlanObjectViewModel;
    });
}
export default class PlannerSelectionHandler extends EventDispatcher<PlannerSelectionHandlerEvent> {
    private _selectionMode;
    protected _selectedPlanObjectViewModels: Map<number, PlanObjectViewModel>;
    check(component: PlanObjectViewModel): void;
    cancelSelection(): void;
    private _checkStandard;
    private _checkMulti;
    setSelectionMode(mode: SELECTION_MODE): void;
    getSelectionMode(): SELECTION_MODE;
    hasSelection(): boolean;
    getSelectedIds(): number[];
    isSelected(id: number): boolean;
}
