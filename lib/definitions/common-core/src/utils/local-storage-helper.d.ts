import { Context } from '../di/context';
interface LocalStorageEntry {
    id: string;
    date: number;
    payload: any;
}
interface Store {
    entries: LocalStorageEntry[];
}
export declare const DEFAULT_STORE = "rml_default";
export declare const DEFAULT_STORE_SIZE = 5;
export default class LocalStorageHelper implements Context {
    _context_: string;
    _creator_: string;
    private _localStorage;
    constructor(_context_: string);
    getStore(storeId?: string): Store;
    saveStore(storeId: string, store: Store): void;
    addItem(id: string, payload: any, storeId?: string, limit?: number): void;
    getItem(id: string, storeId?: string): any;
}
export {};
