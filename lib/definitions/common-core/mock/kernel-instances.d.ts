import { KernelObject } from '../../typings/planner';
import PlanViewModel from '../../planner-core/src/view-model/plan-view-model';
export declare const MOCK_MINIMAL_KERNEL_INSTANCE: {
    setEnvironmentVariable: () => void;
};
export declare class MockConfiguratorKernel {
}
export declare const MOCK_MINIMAL_KERNEL_CONTAINER: {
    setExternalHelpers: () => void;
    registerConfiguratorCallback: () => void;
    registerPlannerCallback: () => void;
    unregisterConfiguratorCallback: () => void;
    PlanInteractionHandler: () => void;
    UnitMeasureFormatter: () => void;
    Unit: {};
    UnitStringType: {};
    LongArray: () => void;
    DrawingType: {
        CLICK_PER_CLICK: number;
    };
    CatalogItem: {
        new (): {
            size: {
                x: number;
                y: number;
                z: number;
            };
        };
    };
    CatalogItemPtrList: {
        new (): {
            push_back(kernelObject: KernelObject): void;
        };
    };
};
export declare const MOCK_PLAN_INTERACTION_HANDLER: {
    addPlanObjects: () => void;
    getPlan: () => {
        extRef: {
            jsObject: PlanViewModel;
        };
    };
};
