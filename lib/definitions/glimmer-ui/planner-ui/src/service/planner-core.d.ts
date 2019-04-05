export default class PlannerCore {
    constructor();
    readonly api: import("../../../../planner-core/src/roomle-planner").default;
    readonly initData: any;
    private _notifyListeners;
    private _registerEventListeners;
    addEventListener(event: string, callback: (...args: any[]) => any): void;
}
