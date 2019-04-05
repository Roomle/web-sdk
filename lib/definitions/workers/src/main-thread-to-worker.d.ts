import { CommunicationInterface, CommunicationInterfaceCallback, WORKER_MESSAGE } from './communication-interface';
export declare class MainThreadToWorker extends CommunicationInterface {
    private _promiseCallbacks;
    constructor(callback: CommunicationInterfaceCallback, eventListener: Worker | ServiceWorker | ServiceWorkerContainer);
    sendToWorker(command: WORKER_MESSAGE, data?: any, resolve?: (...args: any[]) => void, reject?: (...args: any[]) => void): void;
    resolvePromises(conversationId: number, data: any[]): void;
}
