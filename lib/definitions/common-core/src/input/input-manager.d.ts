import { Position2 } from '../common-interfaces';
import EventDispatcher from '../../../configurator-core/src/utils/event-dispatcher';
export declare const enum INPUT_EVENT {
    DRAG_START = 0,
    DRAG = 1,
    DRAG_END = 2,
    DOWN = 3,
    UP = 4,
    CLICK = 5,
    MOVE = 6,
    ZOOM_IN = 7,
    ZOOM_OUT = 8
}
export declare const enum INPUT_EVENT_TYPE {
    UNKNOWN = 0,
    MOUSE = 1,
    TOUCH = 2
}
export declare class InputEvent {
    position: Position2;
    positionRelative: Position2;
    type: INPUT_EVENT_TYPE;
    constructor(position?: Position2, positionRelative?: Position2, type?: INPUT_EVENT_TYPE);
}
export declare const MIN_MOVE_DISTANCE: number;
export default class InputManager extends EventDispatcher<InputEvent> {
    private _debug;
    private _domHelper;
    private _position;
    private _positionRelative;
    private _downPosition;
    private _downPositionRelative;
    private _longClickTimer;
    private _delta;
    private _state;
    private _pinchDistance;
    private _firefoxDragPosition;
    private _lastMouseWheelEvent;
    private _lastTouchEvent;
    private _dragEnabled;
    private _dragTarget;
    private _dragMVName;
    private _dragMV;
    private _dragEVName;
    private _dragEV;
    constructor();
    enableDragIn(dragEvent?: DragEvent): void;
    private _dragM;
    private _dragE;
    addEvents(element: HTMLElement): void;
    private _onDocumentMouseMove;
    private _onDocumentTouchMove;
    private _dolly;
    private _move;
    private _onDocumentMouseDown;
    private _onDocumentTouchStart;
    private _longClick;
    private _onDocumentMouseLeave;
    private _onDocumentMouseEnter;
    private _onDocumentMouseCancel;
    private _onDocumentTouchEnd;
    private _onUp;
    private _onMouseWheel;
    private _onContextMenu;
    private _getTouchPosition;
    private _getTouchPositionRelative;
    private _getMousePosition;
    private _getMousePositionRelative;
    private _getDelta;
    setDragEnabled(enabled: boolean): void;
}
