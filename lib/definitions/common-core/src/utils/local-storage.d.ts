import { Context } from '../di/context';
export default class LocalStorage implements Context {
    _context_: string;
    _creator_: string;
    constructor(_context_: string);
    private readonly _localStorage;
    getItem(key: string): any;
    setItem<T>(key: string, value: T): void;
}
