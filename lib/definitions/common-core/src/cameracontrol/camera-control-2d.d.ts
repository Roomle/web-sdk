import InputManager from '../input/input-manager';
import CameraControl from './camera-control';
export default class CameraControl2D extends CameraControl {
    private _camera;
    private _scale;
    private _state;
    private _lastPosition;
    private _zoomSpeed;
    private _orbitPosition;
    private _cameraZoom;
    constructor(creator: string, inputManager: InputManager, initialCameraPosition?: THREE.Vector3);
    protected _getCamera(): THREE.Camera;
    private _initCamera;
    updateCamera(): void;
    protected _initInputListener(): void;
    private _move;
    updateToBounds(size: THREE.Vector3, center: THREE.Vector3): void;
    protected _update(overrideTarget?: THREE.Vector3): void;
    animateCamera(delta: number): boolean;
}
