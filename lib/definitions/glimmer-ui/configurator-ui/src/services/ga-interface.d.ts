import Service from './-utils/service';
export declare const GA_DIMENSIONS: {
    TRACKING_VERSION: string;
    REVISION_UI: string;
    REVISION_CORE: string;
    EMBEDDING_VERSION: string;
    CLIENT_ID: string;
    WINDOW_ID: string;
    HIT_ID: string;
    HIT_TIME: string;
    HIT_TYPE: string;
    HIT_SOURCE: string;
    VISIBILITY_STATE: string;
    KERNEL_FROM_INDEXED_DB: string;
    KERNEL_INSTANTIATE_STREAMING: string;
    KERNEL_IS_WASM: string;
    INIT_ID: string;
    INIT_IS_TAG: string;
    INIT_IS_CONFIGURATION_STRING: string;
    INIT_IS_ITEM: string;
    PRELOADS_ID: string;
    CONFIGURATOR_ID: string;
};
export declare const GA_METRICS: {
    RESPONSE_END_TIME: string;
    DOM_LOAD_TIME: string;
    WINDOW_LOAD_TIME: string;
    TIME_TO_FIRST_BTYE: string;
    KERNEL_IS_READY: string;
    INIT_LOADING_SCREEN_CLOSE: string;
    PRELOADS_READY: string;
};
export declare const enum GA_CATEGORY {
    ERROR = "Error",
    NAVIGATION_TIMING = "Navigation Timing",
    TIMING = "Timing"
}
export default class GAInterface extends Service {
    private _embed;
    private _scriptLoader;
    private _settings;
    readonly _trackingId: any;
    readonly _gtag: any;
    private _setObjectProperties;
    private _trackEvent;
    private _trackException;
    trackTiming(category: GA_CATEGORY, label: any, value: number, fieldsObject?: object): void;
    private _trackErrors;
    private _trackErrorEvent;
    trackError(message: string): void;
    trackContentError(message: string): void;
    constructor(options: object);
    setDimension(dimension: string, value: any): void;
    setDimensions(dimensions: object): void;
    private _setSettings;
    private _findDimension;
    private _sendNavigationTimingMetrics;
    private _getConfiguratorId;
}
