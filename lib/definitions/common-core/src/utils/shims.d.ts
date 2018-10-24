import { CanvasOffset } from '../common-interfaces';
import { ROOMLE_COLORS } from './common-utils';
import { CAMERA_TYPE } from '../../../planner-core/src/roomle-planner-ui-callback';
import { RapiId, RapiServerUrlType } from '../../../typings/rapi-types';
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
}
export interface ConfiguratorInitData {
    addOnSpots?: boolean;
    plusInPreview?: boolean;
    initialFloorMaterial?: string;
    dls?: string;
    ls?: string;
    floorMaterialsTag?: RapiId;
}
export interface PlannerInitData {
    mode?: CAMERA_TYPE;
}
export interface InitData extends CommonInitData, ConfiguratorInitData, PlannerInitData {
}
