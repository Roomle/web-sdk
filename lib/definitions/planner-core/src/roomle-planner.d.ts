import RoomlePlannerUiCallback from './roomle-planner-ui-callback';
import Main, { GlobalAPI, KernelUtilityForUi } from '../../common-core/src/main';
import { Configurator } from '../../configurator-core/src/configurator';
import { InitData } from '../../common-core/src/utils/shims';
import { RapiItem } from '../../typings/rapi-types';
import { BackstackCallbacks } from './services/backstack';
import { Context } from '../../common-core/src/di/context';
import { PlanInteractionHandler, PlanModelViewHelper } from '../../typings/planner';
import { KernelAccessCallbackI } from '../../common-core/src/kernel-access-callback';
export interface RoomlePlannerCallback {
    switchToHsc: (planObjectId: number) => Promise<void>;
}
export default class RoomlePlanner implements KernelAccessCallbackI, RoomlePlannerCallback, GlobalAPI, BackstackCallbacks, Context, KernelUtilityForUi {
    _creator_: string;
    private _domHelper;
    private _scriptLoader;
    private _kernelAccessCallback;
    private _plannerKernelAccess;
    private _rapiAccess;
    private _singlePromiseFactory;
    private _roomlePlannerUiCallback;
    private _lifeCycleManager;
    private _backstack;
    private _threeLoader;
    private _dataSyncer;
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
    /**
     * Return the main class which has access to lifecycle events and RapiAccess.
     * Hidden because it's only useful for embedding API.
     * Has to be overridden by main class.
     * @hidden
     */
    getMain(): Main;
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
    syncCatalog(catalogId: string): Promise<void>;
    loadError(error?: any): void;
    getPlanInteractionHandler(): Promise<PlanInteractionHandler>;
    getPlanModelViewHelper(): Promise<PlanModelViewHelper>;
    /**
     * Inserts all of the items in the array into current plan
     * @param itemList Array of items received from the Roomle API
     */
    insertItems(itemList: RapiItem[]): Promise<void>;
}
