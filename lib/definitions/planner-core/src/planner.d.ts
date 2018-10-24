import './utils/global-definitions';
import Main from '../../common-core/src/main';
export declare class Planner extends Main {
    private _planner;
    protected setupGlobals(): void;
    protected setupDependencies(): void;
    protected cleanUpGlobals(): void;
    protected cleanUpDependencies(): void;
    protected bootFinished(): void;
    pause(): void;
}
