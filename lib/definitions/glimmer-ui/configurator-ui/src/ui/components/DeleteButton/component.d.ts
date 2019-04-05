import Component from '@glimmer/component';
import UiCore from '../../../services/ui-core';
export default class DeleteButton extends Component {
    state: {
        showToast: boolean;
        isDeleted: boolean;
        showDelete: boolean;
    };
    protected _uiCore: UiCore;
    readonly isDeactivated: any;
    readonly showRootDeleteMessage: any;
    readonly showChildrenDeleteMessage: any;
    readonly showMultiDeleteMessage: any;
    constructor(object: Object);
    deleteComponent(): void;
    deleteHasChildren(): void;
    onCloseToast(): void;
}
