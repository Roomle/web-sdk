import './utils/global-definitions';
import Main from '../../common-core/src/main';
import RoomlePlanner from './roomle-planner';
export declare class Planner extends Main {
    private _planner;
    protected setupGlobals(): void;
    protected setupDependencies(): void;
    protected cleanUpGlobals(): void;
    protected cleanUpDependencies(): void;
    protected bootFinished(): void;
    getApi(): RoomlePlanner;
    pause(): void;
}
