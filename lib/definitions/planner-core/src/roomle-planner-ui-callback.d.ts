import { Configurator } from '../../configurator-core/src/configurator';
import { UiCallback } from '../../common-core/src/utils/UiCallback';
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
}
