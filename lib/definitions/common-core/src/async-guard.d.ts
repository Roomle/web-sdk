export default class AsyncGuard {
    private _promise;
    private _resolve;
    private _reject;
    constructor();
    private _init;
    resolve(): void;
    reject(e: Error): void;
    wait(): Promise<void>;
    reset(): void;
}
