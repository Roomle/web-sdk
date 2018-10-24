import CameraControl3D from '../../../common-core/src/cameracontrol/camera-control-3d';
export default class AdjustableCameraControl3D extends CameraControl3D {
    shouldIgnoreStandardBehavior: boolean;
    adjust(bounds: THREE.Vector3, position: THREE.Vector3, yaw: number, pitch: number, fov: number): void;
    protected _setDistanceAndRangesBasedOnBounds(bounds: THREE.Vector3, windowWidth: number, windowHeight: number): number;
    protected _update(overrideTarget?: THREE.Vector3): void;
    animateCamera(delta: number): boolean;
}
