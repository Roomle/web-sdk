import RapiAccess from '../rapi-access';
import ScriptLoader from '../script-loader';
import DataSyncer from './data-syncer';
import { RapiId } from '../../../typings/rapi-types';
import { LifeCycleCallbacks } from '../life-cycle-manager';
import { Context } from '../di/context';
import { ConfigurationObject, ConfiguratorKernelClass, KernelVector3 } from '../../../typings/kernel';
import { ConfiguratorKernelCallbackI } from '../kernel-access';
import ConfiguratorUiCallbacks from '../../../configurator-core/src/services/configurator-ui-callback';
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
    protected _configuratorUiCallbacks: ConfiguratorUiCallbacks;
    protected _configuratorKernelCallbackListener: Set<ConfiguratorKernelCallbackI>;
    /**
     *
     * !!!WARNING!!!
     *
     * @todo check if this can become a problem if we tell
     *       the minifier to mangle properties stargin with _
     *       see the discussion at https://gitlab.com/roomle/roomle-threejs/merge_requests/401#note_143575143
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
    readonly kernelInstance: ConfiguratorKernelClass;
    private _setupKernelPaths;
    private _setupEmsModule;
    private _passSubComponentsToKernel;
    private _fetchSubComponents;
    private _flushSubComponentsWaiters;
    protected isReady(): void;
    protected addDebugInfo(): void;
    loadComponent(conversationId: number, configuration: ConfigurationObject, parentId: number): void;
    loadSubComponent(parentId: number, partId: number, componentId: string): void;
    requestDeleteComponent(componentId: number): void;
    dockComponentWithPosition(parentId: number, parentDockId: number, childId: number, childDockId: number, position: KernelVector3): void;
    Editor3dAddBakedMesh(runtimeComponentId: number, materialId: string, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
    Editor3dAddNamedMesh(runtimeComponentId: number, meshId: string, materialId: string, transform: Float32Array, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
    Editor3dBeginConstruction(id: number): void;
    Editor3dEndConstruction(id: number): void;
    Editor3dComponentCreated(id: number, position: KernelVector3, eulerAngles: KernelVector3, parentObjectRuntimeId: number): void;
    Editor3dComponentDocked(componentId: number, parentId: number, componentPosition: KernelVector3, componentRotation: KernelVector3): void;
    Editor3dGeometryReady(id: number): void;
    Editor3dGeometryNotReady(id: number): void;
    componentDeleted(componentId: number): void;
    componentMetaUpdated(componentId: number): void;
    sceneCleared(): void;
    addConfiguratorListener(listener: ConfiguratorKernelCallbackI): void;
    removeConfiguratorListener(listener: ConfiguratorKernelCallbackI): void;
    cleanUpCallbacks(): void;
    protected registerCallbacks(): void;
    pause(): void;
    resume(): void;
    destroy(): void;
}
export {};
