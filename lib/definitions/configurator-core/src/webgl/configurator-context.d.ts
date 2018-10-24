import { SELECTION_MODE } from '../utils/selection-handler';
import { UiPossibleChild } from '../../../typings/kernel';
import { RapiId } from '../../../typings/rapi-types';
export default class ConfiguratorContext {
    planObjectId: number;
    lastPossibleChild: UiPossibleChild;
    rootComponentId: number;
    rootComponentParametersAsGlobal: boolean;
    planObjectBounds: THREE.Vector3;
    requestPreviewsIsUserInitiated: boolean;
    lastConfigurationLoadedComponentId: number;
    lastLoadedRapiId: RapiId;
    lastConversationId: number;
    selectedRuntimeComponentIds: number[];
    selectionMode: SELECTION_MODE;
    readonly selectedRuntimeComponentId: number;
}
