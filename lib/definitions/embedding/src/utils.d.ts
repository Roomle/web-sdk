export interface EmbeddingInstance {
    [key: string]: (...args: any[]) => any;
}
export interface EmbeddingCommand {
    message: string | EMBEDDING_EVENTS;
    args: any[];
}
export interface EmbeddingResponse {
    result?: any;
    error?: string | Error;
}
export declare const enum EMBEDDING_EVENTS {
    ROOMLE_IFRAME_ESTABLISHED = 0
}
export declare const enum EMBEDDED_MODULE {
    PLANNER = 0,
    CONFIGURATOR = 1,
    GLB_VIEWER = 2
}
