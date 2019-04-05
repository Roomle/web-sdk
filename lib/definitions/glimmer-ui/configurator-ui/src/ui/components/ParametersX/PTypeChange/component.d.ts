import Component from '@glimmer/component';
export default class PType extends Component {
    private _uiCore;
    private _i18n;
    private _lastTagId;
    private _isWaiting;
    state: {
        tag: any;
        isLoading: boolean;
    };
    readonly isHidden: boolean;
    readonly items: any;
    readonly isOverview: boolean;
    readonly amountAll: any;
    readonly hasShowAll: boolean;
    readonly showAllLabel: any;
    didInsertElement(): void;
    didUpdate(): void;
    private _getTag;
    onItemClicked(item: RapiItem): void;
    changeType(item: RapiItem): void;
    requestShowDetails(): void;
}
