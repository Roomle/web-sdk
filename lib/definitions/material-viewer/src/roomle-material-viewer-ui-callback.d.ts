import { UiCallback } from '../../common-core/src/utils/ui-callback';
import { RapiMaterialShading } from '../../typings/rapi-types';
export default class RoomleMaterialViewerUiCallback extends UiCallback {
    constructor(creator: string);
    /**
     * Gets called when a material parameter has been changed using the graphical user interface
     * @param materialShading
     */
    onMaterialShadingChanged: (materialShading: RapiMaterialShading) => void;
}
