import { RapiId, RapiSkin } from '@roomle-web-utils/typings/rapi-types';
import { PlanInteractionHandler, PlanOverview } from '@roomle-web-utils/typings/planner';
export interface RoomlePlannerCallbacks {
    onCameraChanged: () => void;
}
export interface RoomlePlanner {
    callbacks: RoomlePlannerCallbacks;
    init(element: HTMLElement, id: RapiId, options?: any): Promise<void>;
    loadPlan(id: RapiId): Promise<void>;
    switch2D(): Promise<void>;
    switch3D(): Promise<void>;
    switchToFirstPerson(): Promise<void>;
    getCurrentSkin(): Promise<RapiSkin>;
    getPlanInteractionHandler(): Promise<PlanInteractionHandler>;
    getPlanModelViewHelper(): Promise<PlanOverview>;
}
export {};
