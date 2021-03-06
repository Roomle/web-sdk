import { UiPossibleChild, KernelParameter } from '../../../../typings/kernel';
import { RapiId } from '../../../../typings/rapi-types';
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
    getParameterByKey(id: string): KernelParameter;
    getPossibleChild(id: RapiId): UiPossibleChild;
}
