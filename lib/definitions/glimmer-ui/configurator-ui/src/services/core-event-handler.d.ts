import GenericEventHandler from './generic-event-handler';
export declare const enum CORE_EVENTS {
    ON_SELECTION_CANCEL = "onSelectionCancel",
    ON_CONFIGURATION_HAS_CHILDREN = "onConfigurationHasChildren",
    ON_OPEN_ADD_ONS = "onOpenAddOns",
    ON_DOCKINGS_PREVIEW_REMOVED = "onDockingsPreviewRemoved",
    ON_OPEN_TAG = "onOpenTag",
    ON_UI_INTERSECTION_CHANGE = "onUiIntersectionChange",
    ON_PART_LIST_UPDATE = "onPartListUpdate",
    ON_LOAD_CONFIGURATION = "onLoadConfiguration",
    ON_CONFIGURATION_READY = "onConfigurationReady",
    ON_TRACK_TIMING = "onTrackTiming",
    ON_USER_INITIATED_DOCK_DONE = "onUserInitiatedDockDone",
    ON_UPDATE_PRICE = "onUpdatePrice",
    ON_UPDATE_POSSIBLE_CHILDREN = "onUpdatePossibleChildren",
    ON_UPDATE_PARAMETERS = "onUpdateParameters",
    ON_SELECTION_CHANGE = "onSelectionChange",
    ON_CLICK_OUTSIDE = "onClickOutside",
    ON_NO_DOCKINGS_AVAILABLE = "onNoDockingsAvailable",
    ON_ERROR_DUE_TO_OFFLINE = "onErrorDueToOffline",
    ADDON_PLUS_HOVER = "onAddonPlusHover",
    ADDON_PLUS_SHOWN = "onAddonPlusShown",
    CONTENT_PROBLEM = "onContentProblem",
    SYNC_STARTED = "onSyncStarted",
    SYNC_DONE = "onSyncDone",
    OPEN_FLOOR_MATERIALS = "onOpenFloorMaterials",
    BOUNDS_UPDATE = "onBoundsUpdate",
    OPEN_PART_LIST = "onOpenPartList",
    ON_COMPONENT_LOAD_ERROR = "onComponentLoadError",
    ON_CONFIGURATION_LOAD_ERROR = "onConfigurationLoadError",
    ON_CHANGE_TYPE_CHANGE_TAG = "onChangeTypeChangeTag",
    ON_CONFIGURATION_LABEL_CHANGE = "onConfigurationLabelChange",
    ON_REMOVE_TYPE_CHANGE_TAG = "onRemoveTypeChangeTag",
    ON_DIMENSIONS_VISIBILITY_CHANGE = "onDimensionsVisibilityChange",
    ON_CONFIGURATION_SAVED = "onConfigurationSaved"
}
export default class CoreEventHandler extends GenericEventHandler<CORE_EVENTS> {
    private _uiCore;
    constructor(object: object);
}
