import { RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
import { Context } from '../../../common-core/src/di/context';
export default class ComponentDimensioningHelper implements Context {
    _creator_: string;
    private _kernelAccess;
    private _camera;
    private _hasComponentDimensions;
    constructor(creator: string);
    setCamera(camera: THREE.PerspectiveCamera): void;
    add(component: RoomleComponent): boolean;
    remove(component: RoomleComponent): void;
    hasComponentDimensions(): boolean;
    reset(): void;
    clear(): void;
}
