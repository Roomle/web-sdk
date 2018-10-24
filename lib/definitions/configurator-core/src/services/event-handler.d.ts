declare type ListenerCallback = (...args: any[]) => void;
export declare const enum DATA_PROVIDERS {
    KERNEL_GET_CONFIGURATION = 0,
    KERNEL_GET_GLOBAL_PARAMETERS = 1,
    KERNEL_GET_PART_LIST = 2,
    KERNEL_GET_CONFIGURATION_HASH = 3
}
export declare const NO_DATA_PROVIDER_ERROR = "No one provides data for: ";
export declare const enum EVENTS {
    WEBGL_LIB_LOAD = 0,
    WEBGL_LIB_LOAD_SUCCESS = 1,
    WEBGL_LIB_LOAD_ERROR = 2,
    WEBGL_CONTROLS_LOAD_SUCCESS = 3,
    WEBGL_CONTROLS_LOAD_ERROR = 4,
    WEBGL_QUALITY_LOAD_ERROR = 5,
    WEBGL_COMPONENT_DOCK = 6,
    WEBGL_COMPONENT_DOCK_WITH_POSITION = 7,
    WEBGL_COMPONENT_DELETE = 8,
    WEBGL_COMPONENT_SELECT = 9,
    WEBGL_SELECTION_CANCEL = 10,
    WEBGL_SELECTION_CHANGE = 11,
    WEBGL_MULTI_SELECTION_CHANGE = 12,
    WEBGL_DOCKINGS_PREVIEW = 13,
    WEBGL_DOCKINGS_DRAG_PREVIEW = 14,
    WEBGL_DOCKINGS_NO_PREVIEWS = 15,
    WEBGL_IMAGE_RENDERED = 16,
    WEBGL_UI_INTERSECTION_CHANGED = 17,
    WEBGL_UI_ZOOM_CHANGED = 18,
    WEBGL_DIMENSIONS_VISIBILITY_CHANGED = 19,
    WEBGL_REMOVED_PREVIEWS = 20,
    WEBGL_ADDONS_OPEN = 21,
    WEBGL_CLICK_OUTSIDE = 22,
    KERNEL_LOAD_SUCCESS = 23,
    KERNEL_LOAD_ERROR = 24,
    KERNEL_IS_READY = 25,
    KERNEL_SCENE_CLEARED = 26,
    KERNEL_THROW = 27,
    KERNEL_COMPONENT_CONSTRUCTION_BEGIN = 28,
    KERNEL_COMPONENT_CREATE = 29,
    KERNEL_COMPONENT_UPDATE = 30,
    KERNEL_COMPONENT_BAKED_MESH_LOADED = 31,
    KERNEL_COMPONENT_NAMED_MESH_LOADED = 32,
    KERNEL_COMPONENT_CONSTRUCTION_DONE = 33,
    KERNEL_COMPONENT_GEOMETRY_NOT_READY = 34,
    KERNEL_COMPONENT_DOCK = 35,
    KERNEL_COMPONENT_DELETE = 36,
    KERNEL_COMPONENT_PARAMETERS_UPDATE = 37,
    KERNEL_COMPONENT_LOADING_ERROR = 38,
    KERNEL_COMMON_COMPONENT_PARAMETERS_UPDATE = 39,
    KERNEL_CONFIGURATION_LOADED = 40,
    KERNEL_PLAN_OBJECT_CREATE = 41,
    KERNEL_PLAN_OBJECT_UPDATE = 42,
    KERNEL_PLAN_OBJECT_CONSTRUCTION_DONE = 43,
    KERNEL_PLAN_OBJECT_PARAMETERS_UPDATE = 44,
    KERNEL_PLAN_OBJECT_PARAMETERS_FROM_ROOT_COMPONENT_UPDATE = 45,
    KERNEL_PLAN_OBJECT_PARAMETERS_FROM_PLAN_OBJECT_UPDATE = 46,
    KERNEL_PLAN_COMPONENT_POSSIBLE_CHILDREN_UPDATE = 47,
    KERNEL_PLAN_OBJECT_POSSIBLE_CHILDREN_UPDATE = 48,
    KERNEL_PRICE_UPDATE = 49,
    KERNEL_PREVIEW_CREATE = 50,
    KERNEL_PREVIEW_POINT_ASSOCIATIONS = 51,
    KERNEL_PREVIEW_LINE_ASSOCIATIONS = 52,
    KERNEL_PREVIEW_CONSTRUCTION_DONE = 53,
    KERNEL_SELECTION_CHANGE = 54,
    KERNEL_PART_LIST_UPDATE = 55,
    KERNEL_CONFIGURATION_HAS_CHILDREN = 56,
    KERNEL_SERIALIZED_CONFIGURATION = 57,
    KERNEL_WAIT_FOR_PARAMETER_CHANGE_FINISHED = 58,
    KERNEL_USER_INITIATED_DOCK_DONE = 59,
    KERNEL_REQUEST_SYNC = 60,
    KERNEL_REQUEST_PLAN_OBJECT_CONSTRUCTION = 61,
    KERNEL_MEMORY_CORRUPTION = 62,
    UI_CONFIGURATION_LOAD = 63,
    UI_COMMON_COMPONENT_PARAMETER_CHANGE = 64,
    UI_COMPONENT_PARAMETER_CHANGE = 65,
    UI_PLAN_OBJECT_PARAMETER_CHANGE = 66,
    UI_COMPONENT_DELETE = 67,
    UI_MULTI_COMPONENTS_DELETE = 68,
    UI_CHANGE_USE_OF_HD_GEOMETRY = 69,
    UI_RELOAD_CONFIGURATION = 70,
    UI_REQUEST_SERIALIZED_CONFIGURATION = 71,
    UI_LOAD_COMPONENT_DEFINITION = 72,
    UI_REQUEST_PART_LIST = 73,
    UI_ADDON_PLUS_HOVER_ON = 74,
    UI_ADDON_PLUS_HOVER_OFF = 75,
    UI_ADDON_PLUS_SHOWN = 76,
    UI_ADDON_PLUS_HIDDEN = 77,
    UI_REPORT_ERROR = 78,
    UI_SYNC_STARTED = 79,
    UI_SYNC_DONE = 80,
    KERNEL_CLEANUP = 81,
    KERNEL_RESUME = 82
}
export default class EventHandler {
    private _listeners;
    private _providers;
    private _subscribe;
    subscribe(eventName: EVENTS, callback: ListenerCallback): void;
    dispatch(eventName: EVENTS, args?: any[]): void;
    request(dataProviderName: DATA_PROVIDERS, args?: any[]): Promise<any>;
    provide(dataProviderName: DATA_PROVIDERS, callback: () => Promise<any>): void;
    unsubscribe(eventName: EVENTS, callback: ListenerCallback): void;
}
export {};