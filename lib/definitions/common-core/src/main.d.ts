import { LifeCycleCallbacks } from './life-cycle-manager';
import { MainThreadToWorker } from '../../workers/src/main-thread-to-worker';
export interface GlobalAPI {
    updateSize(): void;
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
}
