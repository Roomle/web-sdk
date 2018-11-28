import './utils/global-definitions';
import Main from '../../common-core/src/main';
import RoomleGLBViewer from './roomle-glb-viewer';
export declare class GlbViewer extends Main {
    private _viewer;
    protected setupGlobals(): void;
    protected setupDependencies(): void;
    protected cleanUpGlobals(): void;
    protected cleanUpDependencies(): void;
    constructor();
    protected bootFinished(): void;
    getApi(): RoomleGLBViewer;
}
