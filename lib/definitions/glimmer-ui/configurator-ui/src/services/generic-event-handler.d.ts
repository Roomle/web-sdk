import Service from './-utils/service';
export default class GenericEventHandler<T> extends Service {
    _listeners: Map<T, Array<(...args: any[]) => void>>;
    dispatch(eventname: T, args?: any[]): void;
    subscribe(eventname: T, listener: (...args: any[]) => void): void;
    unsubscribe(eventName: T, callback: (...args: any[]) => void): void;
}
