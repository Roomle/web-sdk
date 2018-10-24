export interface Bootable {
    teardown: () => void;
    boot: () => void;
    pause: () => void;
}
export interface GlobalAPI {
    updateSize(): void;
}
export default abstract class Main implements Bootable {
    protected abstract setupGlobals(settings?: object): void;
    protected abstract setupDependencies(): void;
    protected abstract cleanUpGlobals(): void;
    protected abstract cleanUpDependencies(): void;
    protected abstract bootFinished(): void;
    abstract pause(): void;
    private _setupCommonGlobals;
    private _setupCommonDependencies;
    private _cleanUpCommonGlobals;
    private _cleanUpCommonDependencies;
    boot(settings?: object): void;
    protected lookup<T>(specifier: string): T;
    teardown(): void;
    resetDom(): void;
}
