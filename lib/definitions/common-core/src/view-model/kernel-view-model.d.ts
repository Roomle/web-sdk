import { KernelObject } from '../../../typings/planner';
export default class KernelViewModel {
    protected _coreReference: KernelObject;
    constructor(reference: KernelObject);
    clearReference(): void;
}
