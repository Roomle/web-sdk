import { CommunicationInterface, CommunicationInterfaceCallback, WORKER_MESSAGE } from './communication-interface';
export declare class WorkerToMainThread extends CommunicationInterface {
    constructor(callback: CommunicationInterfaceCallback, eventListener?: Worker);
    sendToMainThread(command: WORKER_MESSAGE, conversationId: number, data: any): void;
}
