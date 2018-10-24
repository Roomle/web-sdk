import { KernelCallbackI } from './services/kernel-callback';
import RoomlePlannerUiCallback from './roomle-planner-ui-callback';
import { GlobalAPI } from '../../common-core/src/main';
import { InitData } from '../../common-core/src/utils/shims';
export interface RoomlePlannerCallback {
    switchToHsc: (planObjectId: number) => Promise<void>;
}
export default class RoomlePlanner implements KernelCallbackI, RoomlePlannerCallback, GlobalAPI {
    private _domHelper;
    private _scriptLoader;
    private _kernelCallback;
    private _plannerKernelAccess;
    private _rapiAccess;
    private _singlePromiseFactory;
    private _roomlePlannerUiCallback;
    private _planInteractionHandler;
    private _plannerSceneManager;
    private _plan;
    private _preloadPlanId;
    private _kernelReadyCallback;
    private _hscInstance;
    private _glbInstance;
    private _canvasStack;
    constructor();
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
    private _bringIntoForeground;
    switchToHsc(planObjectId: number): Promise<void>;
    switchToGLB(url: string): Promise<void>;
    switchToPlanner(id: string): void;
    back(): void;
    backTo(id: string): void;
    updateSize(): void;
    update(): void;
    callbacks: RoomlePlannerUiCallback;
    showStats(): void;
}
