import { Context } from './di/context';
export interface KernelAccessCallbackI {
    isReady(): void;
    loadError(error?: any): void;
}
export default class KernelAccessCallback implements Context, KernelAccessCallbackI {
    _creator_: string;
    private _callbackListener;
    constructor(creator: string);
    addListener(listener: KernelAccessCallbackI): void;
    removeListener(listener: KernelAccessCallbackI): void;
    isReady(): void;
    loadError(error?: any): void;
}
