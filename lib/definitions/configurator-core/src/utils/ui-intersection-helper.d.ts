import EventDispatcher from './event-dispatcher';
import { CanvasOffset } from '../../../common-core/src/common-interfaces';
export declare type UIIntersection = 'left' | 'top' | 'right' | 'bottom';
export declare type UIIntersections = UIIntersection[];
export declare const enum UI_INTERSECTION_EVENT {
    CHANGE = 0
}
export default class UiIntersectionHelper extends EventDispatcher<UIIntersections> {
    private _uiIntersectionMask;
    private _camera;
    private _boundingBox;
    private _clientWidth;
    private _clientHeight;
    private _boxVertices;
    private _offset;
    floorEnvironment: boolean;
    constructor(camera: THREE.PerspectiveCamera);
    updateToBounds(bounds: THREE.Vector3, clientWidth: number, clientHeight: number): void;
    canvasOffset: CanvasOffset;
    calculateUIIntersection(): void;
    private _checkPaddings;
}
