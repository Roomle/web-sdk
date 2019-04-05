export default class EmbedInterface {
    private _api;
    constructor();
    private getAvailableMethods;
    setApi(api: any): void;
    initDone(): void;
    private postMessage;
    handleEvent(event: MessageEvent): any;
}
