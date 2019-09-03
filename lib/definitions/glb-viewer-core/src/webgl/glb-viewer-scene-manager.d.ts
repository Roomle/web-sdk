import SceneManager from '../../../common-core/src/webgl/scene-manager';
import { Base64Image, CanvasOffset } from '../../../common-core/src/common-interfaces';
import { GLBRenderWorkerListener } from '../services/glb-render-worker';
import InputManager from '../../../common-core/src/input/input-manager';
import { CAMERA_TYPE } from '../../../common-core/src/cameracontrol/camera-type';
import { BakedShadowParams } from '../../../typings/pixotron';
export default class GLBViewerSceneManager extends SceneManager implements GLBRenderWorkerListener {
    private _glbInputManager;
    private _currentGLB;
    private _standardSceneBackgroundColor;
    private _itemsCount;
    constructor(creator: string, offset: CanvasOffset);
    protected createCameraControl(mode: CAMERA_TYPE): void;
    protected _getInputManager(): InputManager;
    loadGLB(url: string, automaticallyAdjustCamera: boolean, scaling: THREE.Vector3): Promise<void>;
    preparePerspectiveImage(renderer?: THREE.WebGLRenderer, width?: number, height?: number): Promise<Base64Image>;
    adjustCamera(position: THREE.Vector3, yaw: number, pitch: number, fov: number): void;
    onStart(count: number): void;
    onElementFinished(itemsFinished: number): void;
    onFinished(zip: any): void;
    clearScene(): void;
    enableHD(): void;
    sceneChanged(): void;
    getPixotronParams(): any;
    getBakedShadowParams(): BakedShadowParams;
}
