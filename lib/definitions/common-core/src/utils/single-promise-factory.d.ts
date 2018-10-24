export declare const enum PROMISE_CATEGORY {
    OFFLINE_CATALOG_SYNC = 0,
    OFFLINE_FLOOR_TAG_SYNC = 1,
    OFFLINE_TPYE_CHANGE_TAG_SYNC = 2,
    START_HSC = 3,
    START_GLB = 4
}
export default class SinglePromiseFactory {
    private _promises;
    create<T>(promiseCategory: PROMISE_CATEGORY, promiseIdentifier: string, workToDo: (resolve: (data?: T) => void, reject: (error: Error) => void) => void): Promise<any>;
}
