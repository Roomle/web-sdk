import { CanvasOffset } from '../common-interfaces';
import { ROOMLE_COLORS } from './common-utils';
import { RapiId, RapiServerUrlType } from '../../../typings/rapi-types';
import { CAMERA_TYPE } from '../cameracontrol/camera-type';
export declare const enum WINDOW_EVENT {
    RESIZE = "resize",
    KEY_DOWN = "keydown",
    KEY_UP = "keyup",
    VISIBILITY_CHANGE = "visibilitychange"
}
export interface CommonInitData {
    retina?: boolean;
    enableHD?: boolean;
    colors?: typeof ROOMLE_COLORS;
    locale?: string;
    overrideTenant?: number;
    isItem?: boolean;
    id?: RapiId;
    preloadId?: RapiId;
    showArButton?: boolean;
    useRoomlePrice?: boolean;
    overrideCountry?: string;
    precisionInch?: string;
    precisionCm?: string;
    unit?: string;
    unitStringType?: string;
    offlineSync?: string;
    configuratorId?: string;
    typeChangeTag?: RapiId;
    preloadHint?: RapiId;
    offset?: CanvasOffset;
    overrideRapi?: RapiServerUrlType;
    startTag?: RapiId;
    meshSelection?: boolean;
    enableHSC?: boolean;
    stats?: boolean;
    _measureTraffic?: boolean;
    alwaysUseCache?: boolean;
    customApiUrl?: string;
    debug?: boolean;
    usePriceService?: boolean;
}
export interface ConfiguratorInitData {
    addOnSpots?: boolean;
    plusInPreview?: boolean;
    initialFloorMaterial?: string;
    dls?: string;
    ls?: string;
    floorMaterialsTag?: RapiId;
    cameraRestriction?: number;
    minVerticalCameraAngle?: number;
    maxVerticalCameraAngle?: number;
    minHorizontalCameraAngle?: number;
    maxHorizontalCameraAngle?: number;
}
export interface PlannerInitData {
    mode?: CAMERA_TYPE;
    edit?: boolean;
}
export interface InitData extends CommonInitData, ConfiguratorInitData, PlannerInitData {
}
