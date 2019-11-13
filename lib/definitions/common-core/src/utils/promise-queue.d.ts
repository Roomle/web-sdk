export declare class PromiseQueue<T> {
    private _waitingPromises;
    private _callback;
    constructor(callback?: (results: T[]) => void);
    push(promise: Promise<T>): void;
    /**
     * Wait for current queue to finish
     */
    finished(): Promise<T[]>;
    /**
     * Callback whenever queue is finished
     */
    registerCallback(callback: (results: T[]) => void): void;
    unregisterCallback(): void;
    readonly length: number;
}
