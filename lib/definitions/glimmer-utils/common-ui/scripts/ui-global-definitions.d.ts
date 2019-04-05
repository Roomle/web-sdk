export interface RmlUi {
    shouldBoot?: boolean;
    boot?: () => void;
}
export interface TranslationsDict {
    [key: string]: string;
}
declare global {
    interface Window {
        __RML__LOCALE__: TranslationsDict;
        __RML__UI__: RmlUi;
    }
}
export {};
