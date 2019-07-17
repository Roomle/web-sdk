import InputManager from '../../../common-core/src/input/input-manager';
import { SceneEventInfo } from '../webgl/scene-event-handler';
import EventDispatcher from './event-dispatcher';
export declare const enum OBJECT_EVENT {
    CLICK = "select",
    HOVER_ON = "hover_on",
    HOVER_OFF = "hover_off",
    HOVER_MOVE = "hover_move",
    DRAG_START = "drag_start",
    DRAG = "drag",
    DRAG_END = "drag_end",
    ROTATE = "rotate"
}
export declare const enum INTERSECTION_MODE {
    MODE_2D = 0,
    MODE_3D = 1
}
export default class RaycastHelper extends EventDispatcher<SceneEventInfo> {
    private _mode;
    private _scene;
    private _camera;
    private _inputManager;
    private _raycaster;
    private _bounds;
    private _rootComponentId;
    private _rootComponentPosition;
    private _backgroundScene;
    private _currentHover;
    private _currentDrag;
    private _currentRotate;
    private _currentDragOffset;
    private _offset;
    private _planeFront;
    private _planeBottom;
    private _planeSide;
    constructor(scene: THREE.Scene, camera: THREE.Camera, generalInput: InputManager, mode?: INTERSECTION_MODE);
    private _addInputListeners;
    private _findCandidate;
    private _findSelection;
    private _findHover;
    private _intersection;
    private _intersect;
    private _onDragStart;
    private _onDrag;
    private _getDistanceToCamera;
    private _onDragEnd;
    private _onRotate;
    private _positionPlanes;
    private _calculateOffset;
    update(bounds: THREE.Vector3, rootComponentPosition: THREE.Vector3, backgroundScene: THREE.Scene): void;
    clear(): void;
    enableDragIn(mesh: THREE.Mesh): void;
    setRootComponentId(rootComponentId: number): void;
    setCamera(camera: THREE.Camera): void;
    setScene(scene: THREE.Scene): void;
}
