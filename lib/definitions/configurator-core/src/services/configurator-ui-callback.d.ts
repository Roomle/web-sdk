import { ConfiguratorKernelClass, KernelComponent, KernelPart, KernelVector3, UiKernelParameter, UiPossibleChild, UiPossibleChildTag } from '../../../typings/kernel';
import { UIIntersection } from '../utils/ui-intersection-helper';
import { RAPI_PATHS } from '../../../common-core/src/rapi-access';
import { RapiTagForUi } from '../../../typings/rapi-types';
import { UiCallback } from '../../../common-core/src/utils/ui-callback';
import { ConfiguratorKernelContainer } from '../../../typings/configurator-kernel-container';
import { PlannerKernelContainer } from '../../../typings/planner-kernel-container';
export declare type ComponentAction = 'edit' | 'add';
export declare type ComponentType = 'preview' | 'component';
export interface UIComponentInfo {
    id: number;
    position: {
        x: number;
        y: number;
        z: number;
    };
    type: ComponentType;
    actions: ComponentAction[];
}
export default class ConfiguratorUiCallbacks extends UiCallback {
    /**
     * When kernel initialization is complete
     */
    onKernelIsReady: () => void;
    /**
     * gets called when the screen position of components/previews changes
     * @param positions
     */
    onComponentPositionsUpdated: (positions: UIComponentInfo[]) => void;
    /**
     * When component parameters are changed/updated, this event is triggered
     * on start up and when a configuration changes
     * @param parameters
     */
    onUpdateParameters: (parameters: UiKernelParameter[]) => void;
    /**
     * When children of a component change, this event is triggered
     * on start up and when a configuration changes
     * @param tags
     * @param defaultChild
     */
    onUpdatePossibleChildren: (tags: UiPossibleChildTag[], defaultChild: UiPossibleChild) => void;
    /**
     * When the price of a configuration/item changes, this event is triggered
     * on start up and when a configuration changes
     * @param currencySymbol
     * @param price
     */
    onUpdatePrice: (currencySymbol: string, price: number) => void;
    /**
     * When a/another (different) component has been selected
     * @param selectionMode
     * @param isRoot
     * @param hasChildren
     * @param components
     */
    onSelectionChange: (selectionMode: string, isRoot: boolean, hasChildren: boolean, components: KernelComponent[]) => void;
    /**
     * When a component or item selection has been canceled
     */
    onSelectionCancel: () => void;
    /**
     * When part list has been changed/updated, this event is triggered
     * on start up and when a configuration changes
     * @param fullList
     * @param hash
     */
    onPartListUpdate: (fullList: KernelPart[], hash: string) => void;
    /**
     * When the bounds of the object are changed/updated, this event is triggered
     * on start up and when a configuration changes
     * @param bounds
     */
    onBoundsUpdate: (bounds: {
        width: string;
        height: string;
        depth: string;
    }) => void;
    /**
     * When a new item or configuration is loading, this can be useful to display loading screens etc
     */
    onLoadConfiguration: () => void;
    /**
     * When configuration has been loaded completely, this can be useful to hide loading indicators
     * @param partList
     * @param hash
     * @param rootComponentLabel
     */
    onConfigurationReady: (partList: KernelPart[], hash: string, rootComponentLabel: string) => void;
    /**
     * When UI should show the overlay based on the selected tag. Gets triggered when {@link CommonInitData.startTag} is set
     * @param tag
     */
    onOpenTag: (tag: RapiTagForUi) => void;
    /**
     * When UI should show add ons
     */
    onOpenAddOns: () => void;
    /**
     * When the user clicks on no UI element, can be used to deselect
     */
    onClickOutside: () => void;
    /**
     * When {@link previewDockings} has no available dockings
     */
    onNoDockingsAvailable: () => void;
    /**
     * When the configuration overlaps the UI (defined by {@link CanvasOffset})
     * @param intersections
     */
    onUiIntersectionChange: (intersections: UIIntersection[]) => void;
    /**
     * When the zoom level has been changed by the user
     * @param minZoom true when zoomed out as far as possible
     * @param maxZoom true when zoomed in as much as possible
     */
    onZoomChange: (minZoom: boolean, maxZoom: boolean) => void;
    /**
     * When the visibility of the dimensions changes from visible to gone or vice versa.
     * Doesn't matter if triggered by the user or via SDK
     * @param visible
     */
    onDimensionsVisibilityChange: (visible: boolean) => void;
    /**
     * When not connected to the internet
     * @param error
     */
    onErrorDueToOffline: (error: Error) => void;
    /**
     * When any generic error is thrown while requesting data
     * @param error
     */
    onError: (error: Error) => void;
    /**
     * When dockings/ghosts are no longer visible
     */
    onDockingsPreviewRemoved: () => void;
    /**
     * Updates when the current configuration changes
     * @param hasChildren
     */
    onConfigurationHasChildren: (hasChildren: boolean) => void;
    /**
     * This method is used to track timings, this can be helpful to identify performance bottel necks
     * @hidden
     * @param category
     * @param label
     * @param time
     * @param meta
     */
    onTrackTiming: (category: string, label: string, time: number, meta: object) => void;
    /**
     * When a dock component call has been completed
     * @param childDbId the database id of the component which is docked
     * @param childDockId the number of the dock position
     * @param parentDbId the database id of the component to which is docked
     * @param parentDockId the number of the dock position to which is docked
     * @param position vector where the dock is done can be null
     */
    onUserInitiatedDockDone: (childDbId: string, childDockId: number, parentDbId: string, parentDockId: number, position: KernelVector3) => void;
    /**
     * When user hovers over an addon plus symbol
     */
    onAddonPlusHover: () => void;
    /**
     * When user hovers over an addon plus symbol
     */
    onAddonPlusHoverOff: () => void;
    /**
     * When all addon plus symbols are shown in the user interface
     */
    onAddonPlusShown: () => void;
    /**
     * When all addon plus symbols are hidden in the user interface
     */
    onAddonPlusHidden: () => void;
    /**
     * When an asset could not be loaded (for example an image or texture). See paths or ids to identify the problem.
     * @param data
     */
    onContentProblem: (data: {
        rapiPath: RAPI_PATHS;
        ids: string[];
    }) => void;
    /**
     * When a sync has been started
     */
    onSyncStarted: () => void;
    /**
     * When a previously requested sync has been completed
     */
    onSyncDone: () => void;
    /**
     * When UI should show floor material selection
     */
    onOpenFloorMaterials: () => void;
    /**
     * When UI should show part list
     */
    onOpenPartList: () => void;
    /**
     * When a requested component could not be loaded
     * @param error
     */
    onComponentLoadError: (error: Error) => void;
    /**
     * Gets called when configuration/configurable-item could not be loaded
     */
    onConfigurationLoadError: () => void;
    /**
     * When {@link changeTypeChangeTag} as been called and the sync has been started
     * @param rapiId
     */
    onChangeTypeChangeTag: (rapiId: string) => void;
    /**
     * When {@link removeTypeChangeTag} as been called
     * @param rapiId
     */
    onRemoveTypeChangeTag: (rapiId: string) => void;
    /**
     * Gets called when a new item/configuration has been loaded
     * @param catalogName
     * @param rapiItemLabel
     * @param rootComponentLabel
     */
    onConfigurationLabelChange: (catalogName: string, rapiItemLabel: string, rootComponentLabel: string) => void;
    /**
     * When kernel failed to load a mesh
     */
    onMemoryCorruption: () => void;
    /**
     * is called when the configurator kernel is ready. It returns the container and the instance
     * @param kernelContainer
     * @param kernelInstance
     */
    onConfiguratorKernelIsReady: (kernelContainer: ConfiguratorKernelContainer | PlannerKernelContainer, kernelInstance: ConfiguratorKernelClass) => void;
    /**
     * is called when the configuration is saved to our backend
     */
    onConfigurationSaved: (configurationHash: string) => void;
    /**
     * called when camera position starts to change or is changing at the moment
     */
    onCameraPositionChanges: () => void;
    constructor(creator: string);
}
