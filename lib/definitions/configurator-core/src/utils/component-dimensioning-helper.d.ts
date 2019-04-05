import { RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
import { Context } from '../../../common-core/src/di/context';
export default class ComponentDimensioningHelper implements Context {
    _creator_: string;
    private _kernelAccess;
    private _camera;
    constructor(creator: string);
    setCamera(camera: THREE.PerspectiveCamera): void;
    add(component: RoomleComponent): boolean;
    remove(component: RoomleComponent): void;
    clear(): void;
}
