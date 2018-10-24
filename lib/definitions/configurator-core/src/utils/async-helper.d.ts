export declare const enum ASYNC_OPERATIONS {
    COMPONENT_DEFINITION_LOADED = 0,
    KERNEL_SERIALIZED_CONFIGURATION = 1,
    KERNEL_PLAN_OBJECT_CONSTRUCTION_DONE = 2,
    UI_RELOAD_CONFIGURATION = 3,
    CONFIGURATION_LOADED = 4
}
export default class AsyncHelper {
    static finishOperation(operationType: ASYNC_OPERATIONS, data?: any): void;
    static failOperation(operationType: ASYNC_OPERATIONS, data: Error): void;
    static waitFor(operationType: ASYNC_OPERATIONS, startCommand?: () => void): Promise<any>;
}
