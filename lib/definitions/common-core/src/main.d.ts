import { LifeCycleCallbacks } from './life-cycle-manager';
import { MainThreadToWorker } from '../../workers/src/communication-interface';
export interface GlobalAPI {
    updateSize(): void;
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
    resume(): void;
    destroy(): void;
}
