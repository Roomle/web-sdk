import Main, { GlobalAPI } from '../../common-core/src/main';
import { Context } from '../../common-core/src/di/context';
import { SceneSettings } from '../../common-core/src/scene-settings-loader';
import { QualitySetting } from '../../common-core/src/dynamic-quality-setting-loader';
import { InitData } from '../../common-core/src/utils/shims';
import { RapiId, RapiMaterial, RapiMaterialShading } from '../../typings/rapi-types';
import RoomleMaterialViewerUiCallback from './roomle-material-viewer-ui-callback';
export default class RoomleMaterialViewer implements GlobalAPI, Context {
    _creator_: string;
    private _domHelper;
    private _scriptLoader;
    private _lifeCycleManager;
    private _threeLoader;
    private _roomleMaterialViewerUiCallback;
    private _sceneManager;
    constructor(creator: string);
    init(element: HTMLElement): Promise<void>;
    private _initPromiseCallback;
    enableHD(): Promise<void>;
    callbacks: RoomleMaterialViewerUiCallback;
    loadMaterialShading(materialShading: RapiMaterialShading): Promise<void>;
    loadMaterial(material: RapiMaterial): Promise<void>;
    loadMaterialId(materialId: RapiId): Promise<void>;
    getMaterialShading(): RapiMaterialShading;
    /**
     * Loads a SceneSettings object, currently it can can contain a light setting definition
     * (see {@link loadDynamicLightSetting}) and an environment definition (see {@link EnvironmentSetting}).
     * @param sceneSettings
     */
    loadSceneSetting(sceneSettings: SceneSettings): Promise<void>;
    /**
     * Loads a QualitySetting object (see {@link QualitySetting}).
     * @param qualitySetting
     */
    loadQualitySetting(qualitySetting: QualitySetting): void;
    setOverrides(options: InitData): void;
    updateSize(): void;
    /**
     * Return the main class which has access to lifecycle events and RapiAccess.
     * Hidden because it's only useful for embedding API.
     * Has to be overridden by main class.
     * @hidden
     */
    getMain(): Main;
    resumeTest(element: HTMLElement): void;
    pauseTest(): void;
    showGUI(): void;
}
