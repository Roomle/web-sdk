import { RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
import { SELECTION_MODE } from '../utils/selection-handler';
import { Base64Image, CanvasOffset } from '../../../common-core/src/common-interfaces';
import { Component, DockLine, DockPair, KernelVector3, PlanObject } from '../../../typings/kernel';
import { DynamicLightSettingSource } from '../../../common-core/src/lightsetting/dynamic-light-setting-loader';
import { SceneSettings } from '../../../common-core/src/scene-settings-loader';
import { RapiMaterial } from '../../../typings/rapi-types';
export default class SceneHelper {
    private _unitFormatter;
    private _domHelper;
    private _webGl;
    private _scriptLoader;
    private _configuratorInputManager;
    private _eventHandler;
    private _dataSyncer;
    private _errorHandler;
    private _configuratorMeshGenerator;
    private _memoryManager;
    private _pixotron;
    private _composer;
    private _outlinePass;
    private _forceRender;
    private _statsHelper;
    waitingForMaterials: Array<Promise<void>>;
    private _renderer;
    private _renderTarget;
    private _maxAnisotrophy;
    private _devicePixelRatio;
    private _clock;
    private _delta;
    private _dimensionHelper;
    private _uiIntersectionHelper;
    private _sceneEventHandler;
    private _cameraControl;
    private _addonHelper;
    private _scene;
    private _uiScene;
    private _camera;
    private _shadow;
    private _shadowDirty;
    private _planObjectBounds;
    private _environment;
    private _lightSetting;
    private _components;
    private _previews;
    private _materialCache;
    private _texture;
    private _componentFactory;
    private _previewMaterial;
    private _lastChange;
    private _running;
    private _shadowRenderer;
    constructor(offset: CanvasOffset);
    stopRenderLoop(): void;
    private _onHoverOn;
    private _onHoverOff;
    private _highlight;
    private _requestRender;
    private _checkLayers;
    private _animateCamera;
    private _cancelDockings;
    private _removePreviews;
    private _setupScene;
    private _tabVisible;
    addMesh(runtimeComponentId: number, meshId: string, materialId: string, transform: Float32Array, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
    addComponent(id: number, position: KernelVector3, eulerAngles: KernelVector3, parentObjectId: number, isRootComponent: boolean): void;
    addPreview(componentId: number, previewId: number): void;
    setPreviewAssociations(previewId: number, dockPairs: DockPair[]): void;
    setPreviewLineAssociations(previewId: number, dockLines: DockLine[]): void;
    updateComponent(componentId: number, component: Component): void;
    deleteComponent(componentId: number): void;
    sceneCleared(): void;
    componentConstructionBegin(componentId: number): void;
    componentConstructionDone(componentId: number, kernelComponent: Component): void;
    configurationLoaded(planObjectId: number, componentId: number, kernelComponent: Component): void;
    componentGeometryNotReady(componentId: number): void;
    private _display;
    private _removeComponent;
    debugSceneGraph(id?: number): void;
    debugScene(): import("three/three-core").Scene;
    private _printObjectGraph;
    dockComponent(componentId: number, parentId: number, componentPosition: KernelVector3, componentRotation: KernelVector3): void;
    private _assignMaterial;
    clearScene(): void;
    planObjectUpdate(planObject: PlanObject, shouldUpdateToBounds: boolean): void;
    planObjectConstructionDone(planObject: PlanObject): void;
    private _internalClearScene;
    private _updateShadow;
    previewConstructionDone(componentId: number, planObjectId: number): void;
    preparePerspectiveImage(): Promise<Base64Image>;
    private _placeCameraForPerspectiveImage;
    private _calculateBoundingBoxOfAllMeshes;
    prepareTopImage(): Promise<Base64Image>;
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
    getScreenXY(position: THREE.Vector3): import("three/three-core").Vector3;
    cleanUp(): void;
    setSelectionMode(mode: SELECTION_MODE): void;
    setFloorMaterial(url: string, width: number, height: number, repeatable: boolean): Promise<void>;
    changeFloorMaterial(material: RapiMaterial): Promise<void>;
    enableHD(source?: DynamicLightSettingSource): void;
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
}