import '../../../typings/global-definitions';
import { RapiMaterial, RapiTexture } from '../../../typings/rapi-types';
export declare const enum CURSOR_STYLE {
    HOVER = "pointer",
    DEFAULT = "default",
    MOVE = "move",
    DRAGGING = "grabbing"
}
export declare const ROOMLE_COLORS: {
    PRIMARY: string;
    ON_PRIMARY: string;
    DEFAULT_BACKGROUND: string;
    SELECTION: string;
};
export declare const setCursor: (style: CURSOR_STYLE) => void;
export declare const handleJsonResponse: (response: Response) => Promise<any>;
export declare const getColors: () => {
    PRIMARY: string;
    ON_PRIMARY: string;
    DEFAULT_BACKGROUND: string;
    SELECTION: string;
};
export declare const getAssetPath: () => string;
export declare const uuid: (a?: string) => string;
export declare const setEnumerable: (target: any, property: string, isEnumerable: boolean) => void;
export declare const setWriteable: (target: any, property: string, isWritable: boolean) => void;
export declare const setDescriptor: (target: any, property: string, options: PropertyDescriptor) => void;
export declare const setPropertiesFromOptions: (target: any, options: any, writeable?: true) => void;
export declare const createBenchmarkMaterial: (materialId: string) => RapiMaterial;
export declare const createBenchmarkTexture: (materialId: string) => RapiTexture;
export declare const createBenchmarkUrl: (materialId: string, size?: number) => string;
export declare const isString: (value: unknown) => boolean;
export declare const objectArrayToMap: <K extends V[keyof V], V extends object>(arr: V[], key: keyof V) => Map<K, V>;
export declare const throttle: <T extends (...args: any[]) => any>(func: T, wait?: number) => (...funcArgs: Parameters<T>) => void;
export declare const debounce: <Params extends any[]>(func: (...args: Params) => any, timeout: number) => (...args: Params) => void;
