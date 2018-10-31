import { Component, KernelPart, UiPossibleChild, UiPossibleChildTag, UiKernelParameter } from '../../../typings/kernel';
import { UIIntersection } from '../utils/ui-intersection-helper';
import { RAPI_PATHS } from '../../../common-core/src/rapi-access';
import { RapiTagForUi } from '../../../typings/rapi-types';
export default class ConfiguratorUiCallbacks {
    onKernelIsReady: () => void;
    onUpdateParameters: (parameters: UiKernelParameter[]) => void;
    onUpdatePossibleChildren: (tags: UiPossibleChildTag[], defaultChild: UiPossibleChild) => void;
    onUpdatePrice: (currencySymbol: string, price: number) => void;
    onSelectionChange: (selectionMode: string, isRoot: boolean, hasChildren: boolean, components: Component[]) => void;
    onSelectionCancel: () => void;
    onPartListUpdate: (fullList: KernelPart[], hash: string) => void;
    onBoundsUpdate: (bounds: {
        width: string;
        height: string;
        depth: string;
    }) => void;
    onLoadConfiguration: () => void;
    onConfigurationReady: (partList: KernelPart[], hash: string, rootComponentLabel: string) => void;
    onOpenTag: (tag: RapiTagForUi) => void;
    onOpenAddOns: () => void;
    onClickOutside: () => void;
    onNoDockingsAvailable: () => void;
    onUiIntersectionChange: (intersections: UIIntersection[]) => void;
    onZoomChange: (minZoom: number, maxZoom: number) => void;
    onDimensionsVisibilityChange: (visible: boolean) => void;
    onErrorDueToOffline: (error: Error) => void;
    onError: (error: Error) => void;
    onDockingsPreviewRemoved: () => void;
    onConfigurationHasChildren: (hasChildren: boolean) => void;
    onTrackTiming: (category: string, label: string, time: number, meta: object) => void;
    onUserInitiatedDockDone: () => void;
    onAddonPlusHover: () => void;
    onAddonPlusShown: () => void;
    onContentProblem: (data: {
        rapiPath: RAPI_PATHS;
        ids: string[];
    }) => void;
    onSyncStarted: () => void;
    onSyncDone: () => void;
    onOpenFloorMaterials: () => void;
    onOpenPartList: () => void;
    onComponentLoadError: (error: Error) => void;
    onConfigurationLoadError: () => void;
    onChangeTypeChangeTag: (rapiId: string) => void;
    onRemoveTypeChangeTag: (rapiId: string) => void;
    onConfigurationLabelChange: (catalogName: string, rapiItemLabel: string, rootComponentLabel: string) => void;
    onMemoryCorruption: () => void;
}
