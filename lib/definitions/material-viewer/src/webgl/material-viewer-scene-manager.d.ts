import SceneManager from '../../../common-core/src/webgl/scene-manager';
import { CanvasOffset } from '../../../common-core/src/common-interfaces';
import InputManager from '../../../common-core/src/input/input-manager';
import { RapiId, RapiMaterial, RapiMaterialShading } from '../../../typings/rapi-types';
import { CAMERA_TYPE } from '../../../common-core/src/cameracontrol/camera-type';
import { BakedShadowParams } from '../../../typings/pixotron';
export default class MaterialViewerSceneManager extends SceneManager {
    private _inputManager;
    private _configuratorMeshGenerator;
    private _roomleMaterialViewerUiCallback;
    private _guiGeometryFolder;
    private _guiMaterialFolder;
    private _mesh;
    private _material;
    private _sceneParams;
    private _materialParams;
    constructor(creator: string, offset: CanvasOffset);
    private _initScene;
    loadMaterialId(materialId: RapiId): Promise<void>;
    loadMaterial(material: RapiMaterial): Promise<void>;
    loadMaterialShading(materialShading: RapiMaterialShading): Promise<void>;
    private _setMaterial;
    getMaterialShading(): RapiMaterialShading;
    protected createCameraControl(mode: CAMERA_TYPE): void;
    protected _getInputManager(): InputManager;
    sceneChanged(): void;
    getPixotronParams(): any;
    getBakedShadowParams(): BakedShadowParams;
    protected _guiLoaded(): void;
    private _updateGUI;
    private _shadingChanged;
    private _setGeometry;
}
