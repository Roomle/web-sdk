import { PreviewComponent, RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
import ScriptLoader from '../../../common-core/src/script-loader';
import { AddOnSpot } from '../../../typings/kernel';
export declare const enum ADDON_STATE {
    MOVE = 0,
    ORBIT = 1,
    ORBIT_END = 2,
    NONE = 3,
    IDLE = 4,
    PREVIEWS = 5
}
export default class AddonHelper {
    private _eventHandler;
    private _camera;
    private _font;
    private _plusButton;
    private _plusButtonPromise;
    private _addOnSpotIcons;
    private _onAddonClick;
    private _textMaterial;
    private _textMaterialSelected;
    private _plusText;
    private _plusTextGeometry;
    private _addOnSpotsVisible;
    previewGhostEnabled: boolean;
    addOnSpotsEnabled: boolean;
    private _state;
    constructor(camera: THREE.PerspectiveCamera, scriptLoader: ScriptLoader);
    private _onPlusButtonLoaded;
    private _performUpdate;
    addAddOnSpots(rootComponent: RoomleComponent, component: RoomleComponent, addOnSpots: AddOnSpot[]): void;
    deleteAddonPointsForComponent(componentId: number): void;
    private getPositionForAddOnPosition;
    update(force?: boolean): void;
    changePreviewGhostVisibility(component: PreviewComponent, visible: boolean): void;
    private _changeAddOnSpotVisibility;
    isAddOnSpotVisible(): boolean;
    onAddonClick(handler: () => void): void;
    setState(state: ADDON_STATE): void;
}
