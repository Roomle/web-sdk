import { WasmDbEntry } from '../../../typings/kernel';
export declare const NOT_FOUND_ERROR = "404";
export default class IndexedDbAdapter {
    static openDb(dbName: string, dbVersion: number, upgradeDbCallback: (this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any): Promise<IDBDatabase>;
    static getObjectStore(dbConnection: IDBDatabase, storeName: string, transactionMode: IDBTransactionMode): IDBObjectStore;
    static getRecordFromObjectStore(dbConnection: IDBDatabase, storeName: string, recordId: string): Promise<WasmDbEntry>;
    static deleteRecordFromObjectStore(dbConnection: IDBDatabase, storeName: string, recordId: string): Promise<{}>;
    static saveRecordToObjectStore(dbConnection: IDBDatabase, storeName: string, objRecord: WasmDbEntry): Promise<{}>;
}
