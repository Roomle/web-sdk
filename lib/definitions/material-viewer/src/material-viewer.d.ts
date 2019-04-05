import './utils/global-definitions';
import Main from '../../common-core/src/main';
import RoomleMaterialViewer from './roomle-material-viewer';
export declare class MaterialViewer extends Main {
    private _viewer;
    protected setupGlobals(): void;
    protected setupDependencies(): void;
    protected cleanUpGlobals(): void;
    protected cleanUpDependencies(): void;
    constructor();
    protected bootFinished(): void;
    getApi(): RoomleMaterialViewer;
}
