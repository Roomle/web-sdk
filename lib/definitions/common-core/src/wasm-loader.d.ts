export default class WasmLoader {
    static DB_KEY: string;
    static getCompiledModuleFromIndexedDB(wasmUrl: string, wasmVersion: string, importObject: any, receiveInstanceCallback: (instance: any) => void): void;
    static handleUpgradeDB(event: Event): void;
    static loadWebAssemblyFromFile(dbConnection: IDBDatabase, wasmUrl: string, wasmVersion: string, importObject: any, receiveInstanceCallback: (instance: any) => void): void;
}
