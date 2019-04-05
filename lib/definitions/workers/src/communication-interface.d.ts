export declare const enum WORKER_CONSTANTS {
    PREFIX = "rml",
    SEPERATOR = "."
}
export declare const enum WORKER_MESSAGE {
    PREFIX = 0,
    INIT = 1,
    ERROR = 2,
    ASSET_LOADED = 3,
    INIT_DONE = 4,
    LOAD_ASSET = 5,
    SW_CLAIMED_CONTROL = 6
}
export declare const NO_CONVERSATION_ID = -1;
export interface CommunicationInterfaceCallback {
    onCommand(command: WORKER_MESSAGE, conversationId: number, data: any): void;
}
export declare const resetConversationIds: () => void;
export declare abstract class CommunicationInterface {
    private _callbacks;
    protected eventListener: any;
    private _eventPoster;
    protected readonly eventPoster: any;
    protected hasEventPoster(): boolean;
    constructor(_callbacks: CommunicationInterfaceCallback, eventListener: any);
    protected nextConversationId(): number;
    setEventPoster(eventPoster: any): void;
    handleEvent(e: MessageEvent): void;
}
