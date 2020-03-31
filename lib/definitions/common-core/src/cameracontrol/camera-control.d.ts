import EventDispatcher, { Listener } from '../../../configurator-core/src/utils/event-dispatcher';
import DomHelper from '../utils/dom-helper';
import InputManager, { InputEvent } from '../input/input-manager';
import { Context } from '../di/context';
import { Position2 } from '../common-interfaces';
export declare const enum CAMERA_EVENT {
    ORBIT_START = 0,
    ORBIT_MOVE = 1,
    ORBIT_END = 2,
    ZOOM_IN = 3,
    ZOOM_OUT = 4,
    ZOOM_CHANGE = 5,
    KEYBOARD_PRESSED = 6,
    MOVING = 7,
    IDLE = 8
}
export interface CameraParameter {
    yaw: number;
    pitch: number;
    distance: number;
    targetX: number;
    targetY: number;
    targetZ: number;
    fov?: number;
    near?: number;
    far?: number;
    blockOtherTweens?: boolean;
}
export declare const INITIAL_YAW = -30;
export declare const INITIAL_PITCH = 10;
export declare const INITIAL_CAMERA_DISTANCE = -1;
export default abstract class CameraControl extends EventDispatcher<any> implements Context {
    _creator_: string;
    protected _domHelper: DomHelper;
    protected _width: number;
    protected _height: number;
    protected _cameraPosition: THREE.Vector3;
    protected _targetPosition: THREE.Vector3;
    protected _tweenEnd: CameraParameter;
    private _stateSaved;
    private _cameraStandingStill;
    protected _pitch: number;
    protected _yaw: number;
    protected _distance: number;
    protected _locked: boolean;
    private _inputManager;
    protected _inputListeners: Array<Listener<InputEvent>>;
    constructor(creator: string, inputManager: InputManager, initialCameraPosition?: THREE.Vector3);
    getCamera(): THREE.Camera;
    protected abstract _getCamera(): THREE.Camera;
    abstract updateCamera(): void;
    protected abstract _initInputListener(): void;
    private _addInputListeners;
    private _removeInputListeners;
    cleanUp(): void;
    animateCamera(delta: number): boolean;
    private _dispatchCameraIdle;
    protected _areEqual(a: CameraParameter, b: CameraParameter): boolean;
    protected _tweenCameraParameter(start: CameraParameter, end: CameraParameter, ignoreChecks: boolean): Promise<void>;
    protected _getCurrentCameraParameters(): CameraParameter;
    protected _rotateHorizontal(angle: number): void;
    protected _rotateVertical(angle: number): void;
    saveState(override: boolean): CameraParameter;
    resetToState(): void;
    setToState(start: CameraParameter, state: CameraParameter): void;
    hasSavedState(): boolean;
    lock(): void;
    unlock(): void;
    getTargetPosition(): THREE.Vector3;
    protected _saveYawAndPitch(): void;
    getInputPosition(position: Position2): import("three").Vector3;
    addLightContainer(container: THREE.Object3D): void;
    protected abstract _update(overrideTarget?: THREE.Vector3): void;
}
