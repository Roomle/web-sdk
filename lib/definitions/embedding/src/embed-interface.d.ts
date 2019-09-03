import { EMBEDDING_EVENTS } from './utils';
export interface EmbedInterfaceContract {
    getAvailableCallbacks: (...args: any[]) => any;
    [key: string]: any;
}
export declare const CALLBACK_PREFIX = "callback.";
export declare const postMessageToIframe: (message: string | EMBEDDING_EVENTS, args?: any[]) => void;
export declare const triggerCallbackInIframe: (message: string | EMBEDDING_EVENTS, args?: any[]) => void;
export default class EmbedInterface {
    private _api;
    constructor();
    private getAvailableCallbacks;
    private getAvailableMethods;
    setApi(api: any): void;
    initDone(): void;
    handleEvent(event: MessageEvent): any;
}
