import Component from '@glimmer/component';
export default class MaterialSelecter extends Component {
    private _uiCore;
    private _coreEventHandler;
    private _loadingScreen;
    state: {
        tag: RapiTag;
        isOpen: boolean;
        isLoading: boolean;
        selectedMaterial: RapiMaterial;
    };
    private _loadingRequested;
    constructor(options: object);
    private _open;
    didInsertElement(): void;
    requestChangeFloor(material: RapiMaterial): void;
    onClose(): void;
}
