import Component from '@glimmer/component';
export declare const SRC_HINT_KEY = "data-src";
export default class AddonsX extends Component {
    private _coreEventHandler;
    private _eventHandler;
    private _uiCore;
    state: {
        filter: any;
    };
    readonly shouldShowFilter: boolean;
    readonly filteredAddons: any;
    _selectedAddon: any;
    constructor(object: object);
    filterAddons(addon: any): void;
    onAddonClicked(addon: any): void;
    private _onRemoveSelection;
    didInsertElement(): void;
    didUpdate(): void;
    private _onLoadImages;
    private _handleImage;
}
