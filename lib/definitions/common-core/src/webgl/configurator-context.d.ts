import { SELECTION_MODE } from '../../../configurator-core/src/utils/selection-handler';
import { UiPossibleChild } from '../../../typings/kernel';
import { RapiId } from '../../../typings/rapi-types';
export default class ConfiguratorContext {
    planObjectId: number;
    rootComponentId: number;
    lastPossibleChild: UiPossibleChild;
    rootComponentParametersAsGlobal: boolean;
    requestPreviewsIsUserInitiated: boolean;
    dockingRootComponentId: number;
    lastLoadedRapiId: RapiId;
    selectedRuntimeComponentIds: number[];
    selectionMode: SELECTION_MODE;
    readonly selectedRuntimeComponentId: number;
}
