import PlannerKernelAccess from '../src/services/planner-kernel-access';
import { KernelCatalogItem } from '../../typings/kernel';
export default class PlannerKernelAccessMock extends PlannerKernelAccess {
    _kernelContainer: {
        unregisterConfiguratorCallback: () => void;
        registerConfiguratorCallback: () => void;
        unregisterPlannerCallback: () => void;
        registerPlannerCallback: () => void;
        catalogItemLoaded: (catalogItem: KernelCatalogItem) => void;
        CatalogItem: {
            new (): {};
        };
    };
}
