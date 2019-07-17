import { Position2 } from '../src/common-interfaces';
export default class MockInputEventDispatcher {
    private _element;
    constructor(element: HTMLElement);
    getElement(): HTMLElement;
    dispatchTouchEvent(type: string, { x, y }: Position2): void;
    dispatchMouseEvent(type: string, { x, y }: Position2, options?: any): void;
    dispatchGenericEvent(type: string, { x, y }: Position2): void;
    dispatchEvent(event: Event, options?: any): void;
}
