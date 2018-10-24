export declare const enum ERROR_CODES {
    OFFLINE = 0,
    GENERIC_RAPI_ERROR = 1,
    CONTENT_PROBLEM = 2
}
declare type ErrorListener = (...args: any[]) => void;
export declare class RoomleError extends Error {
    rmlErrorCode: ERROR_CODES;
}
export default class ErrorHandler {
    private _listeners;
    private _subscribe;
    subscribe(errorCode: ERROR_CODES, callback: ErrorListener): void;
    dispatch(errorCode: ERROR_CODES, args?: any[]): void;
    unsubscribe(errorCode: ERROR_CODES, callback: ErrorListener): void;
    softReject(resolve: (...args: any[]) => any, errorMessage: string, errorCode: ERROR_CODES): any;
}
export {};
