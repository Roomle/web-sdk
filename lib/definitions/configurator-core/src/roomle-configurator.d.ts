import { RAPI_PATHS } from '../../common-core/src/rapi-access';
import { Base64Image, CanvasOffset } from '../../common-core/src/common-interfaces';
import { KernelParameter, KernelParameterGroup, KernelPart, KernelPossibleChild, UiPossibleChild } from '../../typings/kernel';
import { DynamicLightSettingSource } from '../../common-core/src/lightsetting/dynamic-light-setting-loader';
import Main, { GlobalAPI, KernelUtilityForUi } from '../../common-core/src/main';
import { SceneSettings } from '../../common-core/src/scene-settings-loader';
import { InitData } from '../../common-core/src/utils/shims';
import ConfiguratorUiCallbacks from './services/configurator-ui-callback';
import { AssetUrl, ConfigurationString, RapiAdditionalContent, RapiConfiguration, RapiConfigurationEnhanced, RapiId, RapiItem, RapiMaterial, RapiServerUrlType, RapiTagForUi } from '../../typings/rapi-types';
import { Context } from '../../common-core/src/di/context';
import { ConfiguratorKernelAccessCallbackI } from './services/configurator-kernel-access-callback';
export interface LoadOptions {
    overrideTenant?: number;
    overrideCountry?: string;
    overrideRapi?: RapiServerUrlType;
    preloadHint?: RapiId;
    applyCurrentGlobalParameters?: boolean;
    id?: string;
}
export declare const enum PARAMETER_UPDATE_TYPE {
    PLAN_OBJECT = 0,
    PLAN_COMPONENT = 1,
    COMMON_COMPONENTS = 2
}
export default class RoomleConfigurator implements GlobalAPI, Context, KernelUtilityForUi, ConfiguratorKernelAccessCallbackI {
    _creator_: string;
    private _rapiAccess;
    private _dataSyncer;
    private _errorHandler;
    private _unitFormatter;
    private _domHelper;
    private _configuratorUiCallbacks;
    private _configuratorKernelAccessCallback;
    private _lifeCycleManager;
    private _kernelAccess;
    private _threeLoader;
    private _scriptLoader;
    private _configuratorContext;
    private _sceneHelper;
    private _onInitDoneCollection;
    private _isKernelReady;
    private _isWebGlReady;
    private _isPreloadReady;
    private _isLoadError;
    private _rejectOnLoadError;
    private _isReloading;
    private _needsSync;
    private _isInitDone;
    private _checkInitDone;
    private _onInitDone;
    constructor(creator: string);
    private _loadWebGlLib;
    private _loadingWebGlSuccess;
    private _webGlIsReady;
    private _initPromiseCallback;
    private _notifyOnConfigurationReady;
    private _notifyOnConfigurationLoadingError;
    private _loadItemOrConfigById;
    private _shouldBroadcastToUi;
    private _isCorrectResponse;
    private _onLoadConfiguration;
    private _clearScene;
    private _notifyUiAboutNewItem;
    private _notifyUiAboutNewConfiguration;
    private _getMaterialGroups;
    private _loadConfiguration;
    private _preLoadItemOrConfig;
    private _preloadPackage;
    private _reloadConfiguration;
    private _performLoadConfiguration;
    private _changeHDGeometry;
    /**
     * Set general configuration parameter
     * @param options
     */
    setOverrides(options: InitData): void;
    /**
     * This method has to be called before configurator is ready to use
     *
     * @param element which should contain the configurator
     * @param options
     * @return Promise which is resolved when configurator is initialized
     */
    init(element: HTMLElement, options?: InitData): Promise<void>;
    /**
     * Cancels the selection of all currently selected components
     */
    cancelSelection(): void;
    /**
     * Enable the use of HD geometry. Also reloads the object with HD geometry enabled
     */
    enableHDGeometry(): Promise<{}>;
    /**
     * Disable the use of HD Geometry
     */
    disableHDGeometry(): Promise<{}>;
    /**
     * Change the camera offset, see {@link CanvasOffset} for more details
     * @param offset
     */
    changeOffset(offset: CanvasOffset): void;
    /**
     * Shows dockings/ghosts for the selected possible child
     *
     * @param possibleChild
     * @param dragEvent
     * @param dragIn
     */
    previewDockings(possibleChild: UiPossibleChild, dragEvent?: DragEvent, dragIn?: boolean): void;
    /**
     * Deletes the currently selected component if possible
     */
    requestDeleteComponent(): void;
    /**
     * Generates a perspective image (slightly from the side) and returns it as base 64
     */
    preparePerspectiveImage(): Promise<Base64Image>;
    /**
     * Saves the current configuration (parameters etc)
     * and returns a new configuration object including the configuration hash
     */
    saveCurrentConfiguration(): Promise<RapiConfigurationEnhanced>;
    /**
     * Generates images of the current configuration
     *
     * @return Promise containing the `topImage`, `perspectgetAdditionalContentsOfiveImage` and a boolean `isLocally` which indicates if the images were generated while being offline
     */
    generateImagesOfCurrentConfiguration(): Promise<object>;
    /**
     * Generates a top image (birds perspective) and returns it as base 64
     * @param showDimensions should object dimensions be visible
     */
    prepareTopImage(showDimensions?: boolean): Promise<Base64Image>;
    /**
     * Resets the camera back to the start position
     */
    resetCameraPosition(): void;
    /**
     * For testing purpose only
     * @hidden
     * @param filter
     */
    showBenchmarks(filter?: string): void;
    /**
     * Shows current scene graph, used for debug purposes only
     * @hidden
     * @param id
     */
    debugSceneGraph(id?: number): void;
    /**
     * Loads an item based on a configuration string
     *
     * For example: `{"componentId":"muuto:Muuto-Stacked"}`
     * @param configuration
     * @param options
     */
    loadConfiguration(configuration: ConfigurationString, options?: LoadOptions): Promise<KernelPart[]>;
    /**
     * Loads an item based on a configuration hash
     *
     * For example: `koinor:FORMIA_LeftGroup:79FBF0D6C79A2598B5FF943111EA29DC0C6884AA97F4383582B47F69C14DDB2C`
     * @param configurationId
     * @param options
     */
    loadConfigurationById(configurationId: RapiId, options?: LoadOptions): Promise<KernelPart[]>;
    syncPlanObjectToView(conversationId: number, objectId: number): void;
    /**
     * Loads a configuration based on the item id
     * @param itemId
     * @param options
     */
    loadConfigurableItemById(itemId: RapiId, options?: LoadOptions): Promise<KernelPart[]>;
    /**
     * Downloads and caches the selected configuration id for faster use
     * @param configurationId
     */
    preLoadConfigurationById(configurationId: RapiId): Promise<RapiConfiguration>;
    /**
     * Downloads and caches the selected item id for faster use
     * @param itemId
     */
    preLoadConfigurableItemById(itemId: RapiId): Promise<RapiItem>;
    private _getTag;
    private _dispatchSetParameter;
    /**
     * Sets the parameter of the selected component. If nothing is selected the parameters of the
     * parameters of the plan object are set
     * @param parameter a instance of the kernel parameter we want to set
     * @param value the value we want to set on the parameter
     * @param isRaw turn this to true if you dont want the kernel to parse the value string, e.g. convert 100cm to 1000
     */
    setParameter(parameter: KernelParameter, value: string, isRaw?: boolean): Promise<void>;
    /**
     * Method to set a parameter on the plan object. This is used by embedding as well
     * @param parameter a instance of the kernel parameter we want to set
     * @param value the value we want to set on the parameter
     */
    setParameterOfPlanObject(parameter: KernelParameter, value: string): Promise<void>;
    /**
     * Returns all parameters which correspond to the plan object. This is also exposed for embedding
     */
    getParametersOfPlanObject(): Promise<KernelParameter[]>;
    /**
     * Method to set a parameter on the root component. This is used by embedding as well
     * @param parameter a instance of the kernel parameter we want to set
     * @param value the value we want to set on the parameter
     */
    setParameterOfRootComponent(parameter: KernelParameter, value: string): Promise<void>;
    /**
     * Returns all parameters which correspond to the root component. This is also exposed for embedding
     */
    getParametersOfRootComponent(): Promise<KernelParameter[]>;
    /**
     * Enable the selection of multiple components.
     * Common parameters shared between those components can then be changed at once
     */
    enableMultiselect(): void;
    /**
     * Disable selection of multiple components. By default only one component can be selected at a time
     */
    disableMultiselect(): void;
    /**
     * @return Promise with the current configuration string/hash
     */
    getCurrentConfiguration(): Promise<ConfigurationString>;
    /**
     * Loads the component (defined as string) into the kernel
     *
     * @param componentString
     * @return Promise which gets resolved when the component has been loaded
     */
    loadComponentIntoKernel(componentString: string): Promise<void>;
    /**
     * @return Promise containing the short url for the current configuration
     */
    getShortUrlOfCurrentConfiguration(): Promise<string>;
    /**
     * Returns the formatted value based on the parameter.unitType
     *
     * @param value
     * @param parameter
     */
    formatValueToUnitString(value: number, parameter: KernelParameter): string | number;
    /**
     * Get tag for a given tag id
     *
     * @param tagId
     * @param options `{ include: RAPI_PATHS[] }`
     * @return Promise containing the tag including items and materials for that tag
     */
    getTagById(tagId: RapiId, options?: {
        include: RAPI_PATHS[];
    }): Promise<RapiTagForUi>;
    /**
     * Returns same url when online or caches url when offline
     * @param url
     */
    requestAsset(url: string): AssetUrl;
    /**
     * Sets the material of the floor to the given {@link RapiMaterial}.
     * If the current environment is not floor environment it will be changed
     *
     * @param material
     * @return promise that resolves when material has been changed
     */
    changeFloorMaterial(material: RapiMaterial): Promise<void>;
    /**
     * In embedding scenario the core dispatches the onOpenFloorMaterials event
     * if someone outside of the iframe wants to open the floor materials popup
     * @hidden
     */
    openFloorMaterials(): void;
    /**
     * In embedding scenario the core dispatches the onOpenPartList event
     * if someone outside of the iframe wants to open the part list popup
     * @hidden
     */
    openPartList(): void;
    /**
     * It is possible to add additional content to a configurable-item in our backend
     * for example, product images, product videos etc. To fetch them you can use this method
     * @param rapiItems
     */
    getAdditionalContentsOf(rapiItems: RapiItem[]): Promise<RapiAdditionalContent[]>;
    /**
     * @hidden
     *
     * @param rapiId
     */
    changeTypeChangeTag(rapiId: RapiId): void;
    /**
     * Just calls {@link onRemoveTypeChangeTag} on {@link ConfiguratorUiCallbacks}
     * @param rapiId
     */
    removeTypeChangeTag(rapiId: RapiId): void;
    showGUI(): void;
    /**
     * Show overlay with statistic data for:
     * fps
     * memory in MB
     * number of draw calls
     * number of poly/triangle count
     * number of geometries
     * number of textures
     */
    showStats(): void;
    /**
     * Show dimensions (width, height, depth) of object
     *
     * See {@link onDimensionsVisibilityChange} to get notified when dimension visibility changes
     */
    showDimensions(): void;
    /**
     * Hides dimensions when they are shown (see {@link showDimensions}).
     * Calling hideDimensions does not force dimensions to be always hidden.
     *
     * See {@link onDimensionsVisibilityChange} to get notified when dimension visibility changes
     */
    hideDimensions(): void;
    /**
     * Start sync of catalog to make it offline available
     * @param catalogId
     */
    syncCatalog(catalogId: RapiId): Promise<void>;
    /**
     * Start sync of floor tag to make it offline available
     * @param tagId
     */
    syncFloorTag(tagId: RapiId): Promise<void>;
    /**
     * Start sync of type change tag to make it offline available
     * @param tagId
     */
    syncTypeChangeTag(tagId: RapiId): Promise<void>;
    /**
     * Loads a dynamic light settings into the scene. The dynamic light setting source can be an
     * object (js), json, or an url (url to json). See {@link SceneSettings} how to define it.
     *
     * Exampe:
     * ```
     {
      "lights": [
        {
          "type": "rectarea",
          "name": "main",
          "intensity": 240,
          "color": "#ffffff",
          "position": {
            "x": -0.5,
            "y": 6,
            "z": 3
          },
          "target": {
            "x": 0,
            "y": 0,
            "z": 0
          },
          "castShadow": true,
          "width": 0.8,
          "height": 0.8
        },
        {
          "type": "spot",
          "name": "side",
          "intensity": 0.3,
          "color": "#ffffff",
          "position": {
            "x": 2,
            "y": 3,
            "z": 1.5
          },
          "target": {
            "x": 0,
            "y": 0.1,
            "z": 0
          },
          "castShadow": false,
          "angle": 50,
          "penumbra": 0.5
        },
        {
          "type": "ambient",
          "name": "ambient",
          "intensity": 0.3,
          "color": "#ffffff",
          "position": {
            "x": 0,
            "y": 0,
            "z": 0
          }
        }
      ]
    }
     ```
     * @param source
     */
    loadDynamicLightSetting(source: DynamicLightSettingSource): Promise<void>;
    /**
     * Used for test puprose only
     * @hidden
     * @param hex
     */
    setBackgroundColor(hex: string): void;
    /**
     * Used for test puprose only
     * @hidden
     * @param url
     */
    setBackgroundImage(url: string): void;
    /**
     * Used for test puprose only
     * @hidden
     * @param hex color hex code, can be null
     * @param url can be null
     */
    setBakedShadow(hex: string, url: string): void;
    /**
     * Loads a SceneSettings object, currently it can can contain a light setting definition
     * (see {@link loadDynamicLightSetting}) and an environment definition (see {@link EnvironmentSetting}).
     * @param sceneSettings
     */
    loadSceneSetting(sceneSettings: SceneSettings): Promise<{}>;
    /**
     * By default the outline pass uses the bounding box mesh of each component to highlight the object.
     * When mesh selection is enabled, the meshes of the object are used directly.
     * This is the recommended setting for non square/rectangular (shelf) components like sofas.
     *
     * @param enabled
     */
    enableMeshSelection(enabled: boolean): void;
    /**
     * This function has to be called when the size of the container
     * (the html element which has been used in the init method) changes
     * It is VERY important to call this method because the SDK can not
     * detect if the DOM element which embeds the canvas of the 3D scene
     * changes in size
     */
    updateSize(): void;
    /**
     * Return the main class which has access to lifecycle events and RapiAccess.
     * Hidden because it's only useful for embedding API.
     * Has to be overridden by main class.
     * @hidden
     */
    getMain(): Main;
    /**
     * Clears the scene and all components/meshes.
     * Also unregisters configurator callbacks in kernel.
     */
    cleanup(): void;
    /**
     * This method is used for lifecycle tests only
     * @hidden
     */
    resumeTest(element?: HTMLElement): void;
    /**
     * This method is used for lifecycle tests only
     * @hidden
     */
    pauseTest(): void;
    /**
     * Moves the camera closer to the object. Default value (when no value given) is 4, higher value moves a bigger distance.
     * @param value
     */
    zoomIn(value?: number): void;
    /**
     * Moves the camera away from the object. Default value (when no value given) is 4, higher value moves a bigger distance.
     * @param value
     */
    zoomOut(value?: number): void;
    /**
     * Return {@link ConfiguratorUiCallbacks} to override
     */
    readonly callbacks: ConfiguratorUiCallbacks;
    /**
     * Returns the runtime component id of root component of the current plan object
     * @return number the number of the runtime id of the root component
     */
    getRuntimeComponentIdOfRootComponent(): number;
    enableHD(source?: DynamicLightSettingSource): Promise<void>;
    disableHD(): Promise<void>;
    isReady(): void;
    updatePossibleChildren(elementId: number, children: KernelPossibleChild[], parameterUpdateType?: PARAMETER_UPDATE_TYPE): void;
    updateParameters(parameters: KernelParameter[], parameterGroups: KernelParameterGroup[], elementId: number | number[], parameterUpdateType: PARAMETER_UPDATE_TYPE): void;
    loadError(error?: any): void;
    resumeKernelCallbacks(): void;
    pauseKernelCallbacks(): void;
}
