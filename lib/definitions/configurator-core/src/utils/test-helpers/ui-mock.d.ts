export default class UIMock {
    private _element;
    private _possibleChildren;
    private _parameters;
    private _possibleChildrenWaiter;
    private _parametersWaiter;
    constructor(element: HTMLElement);
    private _onUpdateParameters;
    private _onUpdatePossibleChildren;
    initAndLoadId(id: RapiId): Promise<{}>;
    possibleChildrenUpdate(): Promise<{}>;
    parametersUpdate(): Promise<{}>;
    getParameterByKey(id: string): any;
    getPossibleChild(id: RapiId): any;
}
