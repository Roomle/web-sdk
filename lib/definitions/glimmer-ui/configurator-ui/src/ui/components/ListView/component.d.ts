import Component from '@glimmer/component';
import UiCore from '../../../services/ui-core';
export default class ListView extends Component {
    protected _uiCore: UiCore;
    tag: RapiTagForUi;
    state: {
        showToast: boolean;
        removeIntent: any;
    };
    loadItem(item: RapiItem): void;
    onRemove(id: RapiId): void;
    onReallyDelete(id: RapiId): void;
    onCloseToast(): void;
}
