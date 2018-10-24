export declare const enum CAMERA_TYPE {
    CAMERA_2D = "2D",
    CAMERA_3D = "3D",
    CAMERA_FP = "FP"
}
export default class RoomlePlannerUiCallback {
    onSwitchToHSCFinished: () => void;
    onBackStackChanged: (backStack: string[]) => void;
    onCameraChanged: (type: CAMERA_TYPE) => void;
    onTotalFloorAreaChanged: (totalFloorArea: number) => void;
}
