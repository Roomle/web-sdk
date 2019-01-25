import RapiAccess from '../rapi-access';
import ScriptLoader from '../script-loader';
import DataSyncer from './data-syncer';
import { RapiId } from '../../../typings/rapi-types';
import { LifeCycleCallbacks } from '../life-cycle-manager';
import { Context } from '../di/context';
import { ConfiguratorKernelClass, ConfigurationObject } from '../../../typings/kernel';
export declare const enum KERNEL_TYPE {
    PLANNER = 0,
    CONFIGURATOR = 1
}
interface SubComponentWaiter {
    parentId: number;
    partId: number;
}
export default abstract class CommonKernelAccess implements LifeCycleCallbacks, Context {
    _creator_: string;
    protected _rapiAccess: RapiAccess;
    protected _scriptLoader: ScriptLoader;
    private _kernelIo;
    protected _dataSyncer: DataSyncer;
    private _lifeCycleManager;
    /**
     *
     * !!!WARNING!!!
     *
     * @todo check if this can become a problem if we tell
     *       the minifier to mangle properties stargin with _
     *
     * not sure if we can prefix protected methods with _
     * the leading _ was done for minification purpose, because
     * JS minifier do not know the visibility of TypeScript
     * therefore they do not mangle class properties because they
     * do not know if a property is public or private, but you can
     * tell the minifier that everything with a certain prefix is
     * private and then they mangle these class properties. I'm not
     * sure if minification breaks the app if property names of the
     * abstract class are mangled! We have to check this! Currently
     * we us the minifier called terser
     *
     * !!!WARNING!!!
     *
     */
    protected _kernelInstance: ConfiguratorKernelClass;
    protected _kernelContainer: any;
    protected _subComponentsWaiters: Map<RapiId, SubComponentWaiter[]>;
    protected _shouldWait: boolean;
    protected _kernelPath: string;
    protected _useWASM: boolean;
    protected _utilityToLongArray(longArray: number[]): any;
    protected abstract onLoadComponentError(error: Error): void;
    constructor(creator: string, kernelType: KERNEL_TYPE);
    readonly kernelContainer: any;
    private _setupKernelPaths;
    private _setupEmsModule;
    private _passSubComponentsToKernel;
    private _fetchSubComponents;
    private _flushSubComponentsWaiters;
    protected isReady(): void;
    protected addDebugInfo(): void;
    loadComponent(conversationId: number, configuration: ConfigurationObject, parentId: number): void;
    loadSubComponent(parentId: number, partId: number, componentId: string): void;
    protected cleanUpCallbacks(): void;
    protected registerCallbacks(): void;
    pause(): void;
    resume(): void;
    destroy(): void;
}
export {};
