import { Configurator } from '../../configurator-core/src/configurator';
import { UiCallback } from '../../common-core/src/utils/ui-callback';
import { PlanInteractionHandler } from '../../typings/planner';
import { ConfiguratorKernelClass } from '../../typings/kernel';
import { PlannerKernelContainer } from '../../typings/planner-kernel-container';
export declare const enum CAMERA_TYPE {
    CAMERA_2D = "2D",
    CAMERA_3D = "3D",
    CAMERA_FP = "FP"
}
export default class RoomlePlannerUiCallback extends UiCallback {
    onCompletelyLoaded: () => void;
    onItemsLoaded: () => void;
    onSwitchToHSCFinished: (hscInstance: Configurator) => void;
    onBackStackChanged: (backStack: string[]) => void;
    onCameraChanged: (type: CAMERA_TYPE) => void;
    onTotalFloorAreaChanged: (totalFloorArea: number) => void;
    onPlanInteractionHandlerCreated: (planInteractionHandler: PlanInteractionHandler) => void;
    /**
     * is called when the planner kernel is ready. It returns the container and the instance
     * @param kernelContainer
     * @param kernelInstance
     */
    onPlannerKernelIsReady: (kernelContainer: PlannerKernelContainer) => void;
    /**
     * is called when the configurator kernel is ready. It returns the container and the instance
     * @param kernelContainer
     * @param kernelInstance
     */
    onConfiguratorKernelIsReady: (kernelContainer: PlannerKernelContainer, kernelInstance: ConfiguratorKernelClass) => void;
}
