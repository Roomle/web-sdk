export default class LocalStorage {
    private readonly _localStorage;
    getItem(key: string): any;
    setItem<T>(key: string, value: T): void;
}
