import { CommunicationInterfaceCallback, WORKER_MESSAGE } from './communication-interface';
export default class AssetLoaderMain implements CommunicationInterfaceCallback {
    private _loader;
    private _communicationInterface;
    constructor();
    onCommand(command: WORKER_MESSAGE, conversationId: number, data: any): void;
}
