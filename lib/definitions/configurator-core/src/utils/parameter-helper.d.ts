import { KernelParameter, KernelPartListParameter } from '../../../typings/kernel';
export declare const enum PARAMETER_UI_TYPES {
    RANGE = "Range",
    BOOLEAN = "Boolean",
    MATERIAL = "Material",
    OPTIONS = "Options",
    THUMBNAILS = "Thumbnails"
}
export declare const isRange: (parameter: KernelParameter) => boolean;
export declare const isOptions: (parameter: KernelParameter) => boolean;
export declare const hasUnits: (parameter: KernelParameter | KernelPartListParameter) => boolean;
export declare const isThumbnail: (parameter: KernelParameter) => boolean;
export declare const isBoolean: (parameter: KernelParameter) => boolean;
export declare const isMaterial: (parameter: KernelParameter | KernelPartListParameter) => boolean;
