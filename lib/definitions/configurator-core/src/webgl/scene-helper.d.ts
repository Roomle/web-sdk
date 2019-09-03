import { PreviewComponent, PreviewLineComponent, RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
import { SELECTION_MODE } from '../utils/selection-handler';
import { Base64Image, CanvasOffset } from '../../../common-core/src/common-interfaces';
import { KernelComponent, PlanObject } from '../../../typings/kernel';
import { DynamicLightSettingSource } from '../../../common-core/src/lightsetting/dynamic-light-setting-loader';
import { SceneSettings } from '../../../common-core/src/scene-settings-loader';
import { RapiMaterial } from '../../../typings/rapi-types';
import { Context } from '../../../common-core/src/di/context';
import { LifeCycleCallbacks } from '../../../common-core/src/life-cycle-manager';
import { ConfiguratorViewModelCallbackI } from '../../../common-core/src/view-model/configurator-view-model';
export default class SceneHelper implements Context, LifeCycleCallbacks, EventListenerObject, ConfiguratorViewModelCallbackI {
    _creator_: string;
    private _unitFormatter;
    private _domHelper;
    private _scriptLoader;
    private _configuratorInputManager;
    private _configuratorUiCallbacks;
    private _configuratorMeshGenerator;
    private _memoryManager;
    private _lifeCycleManager;
    private _configuratorContext;
    private _kernelAccess;
    private _componentDimensioningHelper;
    private _configuratorViewModel;
    private _componentFactory;
    private _pixotron;
    private _pixotronUtil;
    private _composer;
    private _outlinePass;
    private _forceRender;
    private _statsHelper;
    private _renderer;
    private _renderTarget;
    private _maxAnisotrophy;
    private _clock;
    private _delta;
    private _dimensionHelper;
    private _uiIntersectionHelper;
    private _sceneEventHandler;
    private _cameraControl;
    private _addonHelper;
    private _scene;
    private _uiScene;
    private _gizmoScene;
    private _depthWriteMaterial;
    private _camera;
    private _environment;
    private _lightSetting;
    private _lastChange;
    private _running;
    private _onAfterRender;
    constructor(creator: string, offset: CanvasOffset);
    private _cancelDockings;
    stopRenderLoop(): void;
    private _onHoverOn;
    private _onHoverOff;
    private _highlight;
    private _shouldRenderGizmo;
    private _renderGizmo;
    private _requestRender;
    private _checkLayers;
    private _animateCamera;
    resume(): void;
    pause(): void;
    destroy(): void;
    protected _setupScene(offset?: CanvasOffset): void;
    private _tabVisible;
    sceneCleared(): void;
    display(component: RoomleComponent): void;
    debugSceneGraph(id?: number): void;
    debugScene(): import("three").Scene;
    private _printObjectGraph;
    clearScene(): void;
    planObjectConstructionDone(planObject: PlanObject): void;
    private _internalClearScene;
    preparePerspectiveImage(): Promise<Base64Image>;
    private _calculateBoundingBoxOfAllMeshes;
    prepareTopImage(showDimensions?: boolean): Promise<Base64Image>;
    enableDragIn(dragEvent: DragEvent): void;
    private _getYRotationOfObject;
    zoomToComponent(component: RoomleComponent): void;
    resetCamera(): void;
    resetCameraToState(): void;
    resetCameraPositionToStart(): void;
    private _clearSelectionAndHovers;
    resetPreviews(): void;
    changeOffset(offset: CanvasOffset): void;
    private _onWindowResize;
    updateSize(): void;
    private _onKeyDown;
    cancelPreviousDockings(): void;
    cancelSelection(resetCamera?: boolean): void;
    private _cancelSelection;
    private _selectComponent;
    private _deselectComponent;
    getScreenXY(position: THREE.Vector3): import("three").Vector3;
    cleanUp(): void;
    setSelectionMode(mode: SELECTION_MODE): void;
    changeFloorMaterial(material: RapiMaterial): Promise<void>;
    enableHD(source?: DynamicLightSettingSource): void;
    private reEnableHD;
    private _enableAutoQuality;
    disableHD(): void;
    loadDynamicLightSetting(source: DynamicLightSettingSource): Promise<void>;
    exportGLB(): void;
    showGUI(): void;
    private _addGUIListener;
    zoomIn(value?: number): void;
    zoomOut(value?: number): void;
    showStats(): void;
    showDimensions(): void;
    hideDimensions(): void;
    loadSceneSettings(sceneSetting: SceneSettings): Promise<{}>;
    setBackgroundColor(hex: string): void;
    setBackgroundImage(url: string): void;
    setBakedShadow(hex: string, url: string): void;
    private _setEnvironment;
    handleEvent(evt: Event): void;
    private _updateCameraToBounds;
    private _requestDockingsPreview;
    private _requestDockingsPreviewWithDrag;
    private _dockComponent;
    private _onSelectedRuntimeComponentsChange;
    private _onSelectedRuntimeComponentChange;
    requestDeleteSelectedComponent(): void;
    componentUpdated(component: RoomleComponent, kernelComponent: KernelComponent): void;
    planObjectUpdated(planObject: PlanObject): void;
    componentDeleted(component: RoomleComponent): void;
    previewConstructionDone(component: RoomleComponent, hasPreviews: boolean): void;
    configurationLoaded(component: RoomleComponent, isFreeFlying: boolean): void;
    addComponentHandlers(component: RoomleComponent): void;
    addPreviewHandlers(previewComponent: PreviewComponent): void;
    addPreviewLineHandlers(previewLineComponent: PreviewLineComponent): void;
}
