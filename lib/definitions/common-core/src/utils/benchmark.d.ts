export declare const enum MARKS {
    KERNEL_IS_READY = "kernel_is_ready",
    KERNEL_CREATE = "kernel_create_instance",
    KERNEL_COMPILE_INSTANCE = "kernel_compile_instance",
    UI_LOAD_CONFIGURATION = "ui_load_configuration",
    KERNEL_STREAM_COMPILE_INSTANCE = "kernel_stream_compile",
    KERNEL_LEGACY_COMPILE_INSTANCE = "kernel_legacy_compile",
    RAPI_PRELOADS = "rapi_preloads"
}
export declare const enum UI_TRACKING {
    KERNEL_IS_READY = "KernelIsReady",
    RAPI_PRELOADS = "RapiPreloads"
}
export declare const enum TRACKING_CATEGORIES {
    TIMING = "Timing"
}
export default class Benchmark {
    static start(name: string | MARKS): string;
    static addMeta(name: string | MARKS, data: object): void;
    static getMeta(name: string | MARKS): object;
    static end(name: string | MARKS): void;
    static getMeasure(name: string | MARKS): PerformanceEntry[];
    static showBenchmarks(filter?: string): void;
}
