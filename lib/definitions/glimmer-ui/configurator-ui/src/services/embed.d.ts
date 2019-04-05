import Service from './-utils/service';
export declare const EMBED_EVENTS: {
    PART_LIST_UPDATE: string;
    ON_ERROR: string;
    ON_CONFIGURATION_LABEL_CHANGE: string;
    ON_LOAD_CONFIGURATION_START: string;
    ON_LOAD_CONFIGURATION_FINISHED: string;
    ON_POP_UP_OPEN: string;
    ON_POP_UP_CLOSE: string;
    ON_UPDATE_POSSIBLE_CHILDREN: string;
    ON_DIMENSIONS_VISIBILITY_CHANGE: string;
};
export declare const EMBED_EVENTS_INCOMING: {
    RETURN_SHARE_URL: string;
    RETURN_PROCESSED_SHARE_URL: string;
    RETURN_CUSTOM_SCENE: string;
    INIT: string;
    GENERATE_IMAGES_OF_CURRENT_CONFIGURATION: string;
    SAVE_CURRENT_CONFIGURATION: string;
    GET_CURRENT_CONFIGRUATION_ID: string;
    FULLSCREEN_CHANGE: string;
    OPEN_INFO: string;
};
export default class Embed extends Service {
    private _interface;
    isEmbedded(): boolean;
    subscribe(eventName: string, callback: (...args: any[]) => void): void;
    sendToParent(eventName: string, data?: any[]): void;
    sendEventToParent(eventName: string, data?: any[]): void;
    remove(eventName: string, callback: (...args: any[]) => void): void;
}
