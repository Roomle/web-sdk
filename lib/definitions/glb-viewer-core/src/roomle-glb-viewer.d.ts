import { Base64Image, Position3 } from '../../common-core/src/common-interfaces';
import Main, { GlobalAPI } from '../../common-core/src/main';
import { Context } from '../../common-core/src/di/context';
import { SceneSettings } from '../../common-core/src/scene-settings-loader';
import { QualitySetting } from '../../common-core/src/dynamic-quality-setting-loader';
import { InitData } from '../../common-core/src/utils/shims';
interface RenderCameraInformation {
    fieldOfView: number;
    rotation: Position3;
    position: Position3;
}
export declare interface RenderEntry {
    path: string;
    camera: RenderCameraInformation;
}
export default class RoomleGLBViewer implements GlobalAPI, Context {
    _creator_: string;
    private _domHelper;
    private _scriptLoader;
    private _lifeCycleManager;
    private _threeLoader;
    private _sceneManager;
    constructor(creator: string);
    init(element: HTMLElement, options?: InitData): Promise<void>;
    private _initPromiseCallback;
    enableHD(): Promise<void>;
    /**
     * Loads the GLB from the given URL Param
     * @param url
     * @param scaling defaults to 1
     */
    loadGLB(url: string, scaling?: number): Promise<void>;
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
    preparePerspectiveImage(): Promise<Base64Image>;
    processRenderList(jsonString: string, width?: number, height?: number): void;
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
export {};
