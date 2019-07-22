import { PreviewComponent, PreviewLineComponent, RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
import EventDispatcher from '../utils/event-dispatcher';
import InputManager, { INPUT_EVENT_TYPE } from '../../../common-core/src/input/input-manager';
import { SELECTION_MODE } from '../utils/selection-handler';
import AddonHelper from '../utils/addon-helper';
import { Context } from '../../../common-core/src/di/context';
export declare const enum SCENE_EVENT {
    INTERACTION = 0,
    HOVER_ON = 1,
    HOVER_OFF = 2,
    CLICK_OUTSIDE = 3,
    DRAG_START = 4,
    DRAG_MOVE = 5,
    DRAG_END = 6,
    CLICK_PREVIEW = 7,
    SELECT_COMPONENT = 8,
    DESELECT_COMPONENT = 9
}
export declare class SceneEventInfo {
    component: RoomleComponent;
    preview: PreviewComponent;
    resetCamera: boolean;
    type: INPUT_EVENT_TYPE;
    constructor(data: {
        component?: RoomleComponent;
        preview?: PreviewComponent;
        resetCamera?: boolean;
        type?: INPUT_EVENT_TYPE;
    });
}
export interface ComponentEventInfo {
    hasListener: boolean;
    priority: number;
    roomleId: number;
}
export default class SceneEventHandler extends EventDispatcher<SceneEventInfo> implements Context {
    _creator_: string;
    private _selectionHandler;
    private _debug;
    private _raycastHelper;
    private _inputManager;
    private _addonHelper;
    private _hoveredPreview;
    private _draggedComponent;
    private _previewLineIntersection;
    private _dragStartPosition;
    private _dragStartRotation;
    private _dragIn;
    constructor(creator: string, scene: THREE.Scene, camera: THREE.PerspectiveCamera, inputManager: InputManager, addonHelper?: AddonHelper);
    private _addInputListeners;
    addComponentHandlers(component: RoomleComponent): void;
    addComponentDragInHandler(component: RoomleComponent): void;
    private _addComponentHandlers;
    addPreviewHandlers(component: PreviewComponent): void;
    addPreviewLineHandlers(component: PreviewLineComponent): void;
    private _clickPreview;
    private _clickPreviewLine;
    private _clickComponent;
    private _clickOutside;
    private _hoverOn;
    private _hoverOff;
    private _hoverOnPreview;
    private _hoverOffPreview;
    private _hoverOnPreviewLine;
    private _hoverMovePreviewLine;
    private _updatePositionForPreviewLine;
    private _hoverOffPreviewLine;
    private _setDragComponentShadow;
    private _dragStart;
    private _drag;
    private _dragEnd;
    private _interaction;
    hasSelection(): boolean;
    update(bounds: THREE.Vector3, rootComponentPosition: THREE.Vector3, backgroundScene: THREE.Scene): void;
    setDragIn(dragIn: boolean, dragEvent?: DragEvent): void;
    isDragIn(): boolean;
    isDragging(): boolean;
    setRootComponentId(rootComponentId: number): void;
    cancelSelection(): void;
    setSelectionMode(mode: SELECTION_MODE): void;
    getSelectionMode(): SELECTION_MODE;
    getSelectedRuntimeComponentIds(): number[];
}
