import InputManager from '../input/input-manager';
import CameraControl from './camera-control';
export default class CameraControl2D extends CameraControl {
    private _camera;
    private _scale;
    private _state;
    private _size;
    private _center;
    private _lastPosition;
    private _zoomPosition;
    private _lastZoom;
    private _zoomSpeed;
    private _cameraZoom;
    constructor(creator: string, inputManager: InputManager, initialCameraPosition?: THREE.Vector3);
    protected _getCamera(): THREE.Camera;
    private _initCamera;
    updateCamera(): void;
    protected _initInputListener(): void;
    private _zoomTo;
    private _move;
    updateToBounds(size: THREE.Vector3, center: THREE.Vector3): void;
    protected _update(overrideTarget?: THREE.Vector3): void;
    animateCamera(delta: number): boolean;
}
