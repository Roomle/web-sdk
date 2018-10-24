export interface KernelCallbackI {
    isReady(): void;
}
export default class KernelCallback implements KernelCallbackI {
    private _callbackListener;
    addListener(listener: KernelCallbackI): void;
    removeListener(listener: KernelCallbackI): void;
    isReady(): void;
}
