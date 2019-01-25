import { KernelCallbackI } from './services/kernel-callback';
import RoomlePlannerUiCallback from './roomle-planner-ui-callback';
import { GlobalAPI, KernelUtilityForUi } from '../../common-core/src/main';
import { Configurator } from '../../configurator-core/src/configurator';
import { InitData } from '../../common-core/src/utils/shims';
import { BackstackCallbacks } from './services/backstack';
import { Context } from '../../common-core/src/di/context';
export interface RoomlePlannerCallback {
    switchToHsc: (planObjectId: number) => Promise<void>;
}
export default class RoomlePlanner implements KernelCallbackI, RoomlePlannerCallback, GlobalAPI, BackstackCallbacks, Context, KernelUtilityForUi {
    _creator_: string;
    private _domHelper;
    private _scriptLoader;
    private _kernelCallback;
    private _plannerKernelAccess;
    private _rapiAccess;
    private _singlePromiseFactory;
    private _roomlePlannerUiCallback;
    private _lifeCycleManager;
    private _backstack;
    private _threeLoader;
    private _overrides;
    private _planInteractionHandler;
    private _plannerSceneManager;
    private _plan;
    private _preloadPlanId;
    private _kernelReadyCallback;
    private _hscInstance;
    private _glbInstance;
    constructor(creator: string);
    init(element: HTMLElement, preloadPlanId?: string, options?: InitData): Promise<void>;
    loadPlanXml(xml: string, options?: InitData): Promise<void>;
    loadPlan(id: string, options?: InitData): Promise<void>;
    setOverrides(options: InitData): void;
    switch2D(): void;
    switch3D(): void;
    switchToFirstPerson(): void;
    exportGLB(): void;
    importGLB(url: string): void;
    private _initPromiseCallback;
    enableHD(): Promise<void>;
    isReady(): void;
    showBenchmarks(): void;
    switchToHsc(planObjectId: number): Promise<void>;
    switchToGLB(url: string): Promise<void>;
    switchToPlanner(id: string): void;
    updateSize(): void;
    update(): void;
    callbacks: RoomlePlannerUiCallback;
    showStats(): void;
    onBackStackChanged(currentStack: string[]): void;
    onCloseHSC(): void;
    back(): void;
    backTo(cssClass: string): void;
    getConfigurator(): Configurator;
    getCurrentSkin(): Promise<import("../../typings/rapi-types").RapiSkin>;
    /**
     * Returns the runtime component id of the plan object with the given id
     * @param planObjectId id of the plan object you want to get the runtime component id of the root component from
     * @return number the number of the runtime id of the root component
     */
    getRuntimeComponentIdOfRootComponent(planObjectId: number): number;
    /**
     * This method is used for lifecycle tests only
     * @hidden
     */
    resumeTest(element: HTMLElement): void;
    /**
     * This method is used for lifecycle tests only
     * @hidden
     */
    pauseTest(): void;
}
