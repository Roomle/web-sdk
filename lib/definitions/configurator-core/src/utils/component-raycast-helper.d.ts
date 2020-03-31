import { RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
import SceneEventHandler from '../webgl/scene-event-handler';
import ConfiguratorViewModel from '../../../common-core/src/view-model/configurator-view-model';
export default class ComponentRaycastHelper {
    private _scene;
    private _camera;
    private _raycaster;
    private _nonTransparentComponent;
    constructor();
    init(scene: THREE.Scene, camera: THREE.PerspectiveCamera): void;
    changeMaterialsOnSelect(object: THREE.Object3D, component: RoomleComponent, selected?: boolean): void;
    private _changeMaterialsOnSelect;
    isComponentVisible(component: RoomleComponent): boolean;
    checkComponentVisibility(sceneEventHandler: SceneEventHandler, configuratorViewModel: ConfiguratorViewModel): void;
    checkPreviewVisibility(configuratorViewModel: ConfiguratorViewModel): void;
}
