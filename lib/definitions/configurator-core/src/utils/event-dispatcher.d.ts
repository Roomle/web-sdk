declare type ListenerFunction<T> = (arg: T) => void;
export interface Listener<T> {
    key: number;
    fun: ListenerFunction<T>;
}
export default class EventDispatcher<T> {
    private _listeners;
    private _addEventListener;
    addEventListener(eventName: number, callback: ListenerFunction<T>, scope: any): void;
    dispatchEvent(eventName: number, arg?: T): void;
    removeEventListener(eventName: number, fun: ListenerFunction<T>): void;
}
export {};
