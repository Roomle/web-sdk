export interface BootstrapI {
    loadMain: () => void;
    setupFonts: () => void;
    [key: string]: any;
}
export declare const BRAND_LOGO_SELECTOR = ".rml-powered";
export declare const Bootstrap: {
    loadMain(): Promise<{}>;
    _supportsWoff2(): boolean;
    setupFonts(): Promise<void>;
    _fontFaceObserver(resolve: any): () => void;
    _fontsLoaded(): void;
    _loadCore(filename: string, isModule: boolean): Promise<void>;
    _loadPolyfills(): Promise<void[]>;
    loadScrollbar(): Promise<void>;
    _loadEmbedInterface(): Promise<void>;
    _loadUi(filename: string): Promise<void>;
    _loadJs(): Promise<{}>;
    _loadUiCss(): Promise<void>;
    _loadCss(url: string, options: {
        id: string;
    }): Promise<void>;
    _bootUi(): void;
    _cssLoaded(): void;
    _loadScript(url: string, options: {
        id: string;
        isModule?: boolean;
        crossOrigin?: boolean;
    }): Promise<void>;
    _loadAsset(url: string, options: {
        id: string;
        isModule?: boolean;
        crossOrigin?: boolean;
    }, isScript: boolean, resolve: any, reject: any): void;
    _loadTranslations(): Promise<{}>;
    _isInIframe(): boolean;
};
