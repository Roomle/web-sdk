import InputManager from '../../../common-core/src/input/input-manager';
import { SceneEventInfo } from '../webgl/scene-event-handler';
import EventDispatcher from './event-dispatcher';
export default class RaycastHelper extends EventDispatcher<SceneEventInfo> {
    private _scene;
    private _camera;
    private _raycaster;
    private _bounds;
    private _rootComponentId;
    private _rootComponentPosition;
    private _backgroundScene;
    private _backgroundSceneWidth;
    private _currentHover;
    private _currentDrag;
    private _offset;
    private _planeFront;
    private _planeBottom;
    private _planeSide;
    constructor(scene: THREE.Scene, camera: THREE.Camera, generalInput: InputManager);
    private _addInputListeners;
    private _findSelection;
    private _findHover;
    private _intersection;
    private _intersect;
    private _onDragStart;
    private _onDrag;
    private _onDragEnd;
    private _positionPlanes;
    private _calculateOffset;
    update(bounds: THREE.Vector3, rootComponentPosition: THREE.Vector3, backgroundScene: THREE.Scene): void;
    clear(): void;
    enableDragIn(mesh: THREE.Mesh): void;
    setRootComponentId(rootComponentId: number): void;
    setCamera(camera: THREE.Camera): void;
}
