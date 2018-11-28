import InputManager from '../input/input-manager';
import CameraControl, { CameraParameter } from './camera-control';
export declare class ZoomChangeEvent {
    minZoom: boolean;
    maxZoom: boolean;
    constructor(minZoom?: boolean, maxZoom?: boolean);
}
export declare const enum CAMERA_EVENT {
    ORBIT_START = 0,
    ORBIT_MOVE = 1,
    ORBIT_END = 2,
    ZOOM_IN = 3,
    ZOOM_OUT = 4,
    ZOOM_CHANGE = 5,
    KEYBOARD_PRESSED = 6
}
export declare const enum STATE {
    NONE = 0,
    ORBIT = 1,
    MOVE = 2
}
export declare const ROTATION_SPEED = 1;
export declare const MAX_POLAR_ANGLE = 85;
export default class CameraControl3D extends CameraControl {
    protected _camera: THREE.PerspectiveCamera;
    private _bounds;
    protected _boundingBox: THREE.Box3;
    private _scale;
    private _state;
    private _zoomSpeed;
    minDistance: number;
    maxDistance: number;
    minPolarAngle: number;
    maxPolarAngle: number;
    minAzimuthAngle: number;
    maxAzimuthAngle: number;
    private _orbitPosition;
    private _currentZoomHash;
    constructor(creator: string, inputManager: InputManager, initialCameraPosition?: THREE.Vector3, camera?: THREE.PerspectiveCamera);
    protected _getCamera(): THREE.PerspectiveCamera;
    private _initCamera;
    updateCamera(): void;
    animateCamera(delta: number): boolean;
    protected _initInputListener(): void;
    private _move;
    setBounds(bounds: THREE.Vector3): void;
    updateToBounds(boundingBox: THREE.Box3, windowWidth: number, windowHeight: number, isPreview: boolean, changeCamera?: boolean, target?: THREE.Vector3): void;
    protected _setDistanceAndRangesBasedOnBounds(bounds: THREE.Vector3, windowWidth: number, windowHeight: number): number;
    reset(bounds: THREE.Vector3, windowWidth: number, windowHeight: number, target?: THREE.Vector3, yaw?: number, pitch?: number, animate?: boolean): void;
    updateAndReset(bounds: THREE.Vector3, windowWidth: number, windowHeight: number, target?: THREE.Vector3, yaw?: number, pitch?: number, spacing?: number, animate?: boolean): void;
    private _moveCameraForthAndBack;
    private _restoreFromState;
    simulateTo2D(size: THREE.Vector3, center: THREE.Vector3): Promise<void>;
    simulateTo3D(start: CameraParameter, end: CameraParameter): Promise<void>;
    simulateToFirstPerson(firstPersonPosition: THREE.Vector3): Promise<void>;
    protected _update(overrideTarget?: THREE.Vector3): void;
    private _zoomChanged;
    private _simulateUpdate;
    zoomTo(bounds: THREE.Vector3, windowWidth: number, windowHeight: number, yaw: number, pitch: number, target: THREE.Vector3): Promise<void>;
    private _getCameraSphere;
    zoomIn(value?: number): void;
    zoomOut(value?: number): void;
}
