import '../../../typings/global-definitions';
export declare const enum CURSOR_STYLE {
    HOVER = "pointer",
    DEFAULT = "default"
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
