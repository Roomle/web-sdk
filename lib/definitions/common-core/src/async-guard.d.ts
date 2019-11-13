export default class AsyncGuard<T> {
    info: any;
    private _promise;
    private _resolve;
    private _reject;
    constructor(info?: any);
    private _init;
    resolve(value?: any): void;
    reject(e: Error): void;
    wait(): Promise<T>;
    reset(): void;
}
