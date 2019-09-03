import { LifeCycleCallbacks } from './life-cycle-manager';
import { MainThreadToWorker } from '../../workers/src/main-thread-to-worker';
import RapiAccess from './rapi-access';
export interface GlobalAPI {
    updateSize(): void;
    getMain(): Main;
}
export interface KernelUtilityForUi {
    getRuntimeComponentIdOfRootComponent(planObjectId?: number): number;
}
export default abstract class Main implements LifeCycleCallbacks {
    protected _context: string;
    protected mainThreadToWorker: MainThreadToWorker;
    protected abstract setupGlobals(settings?: object): void;
    protected abstract setupDependencies(): void;
    protected abstract cleanUpGlobals(): void;
    protected abstract cleanUpDependencies(): void;
    protected abstract bootFinished(): void;
    constructor(creator?: string);
    private _setupCommonGlobals;
    private _setupCommonDependencies;
    private _cleanUpCommonGlobals;
    private _cleanUpCommonDependencies;
    boot(settings?: object): void;
    protected lookup<T>(specifier: string, context?: string): T;
    teardown(): void;
    pause(): void;
    resume(element?: HTMLElement): void;
    destroy(): void;
    /**
     * returns the instance of the rapi access so that
     * the user of the SDK can fetch data from the Roomle backend
     * @params none
     * @return RapiAccess
     */
    getRapiAccess(): RapiAccess;
}
