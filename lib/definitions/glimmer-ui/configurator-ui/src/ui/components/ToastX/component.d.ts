import Component from '@glimmer/component';
export default class ToastX extends Component {
    private _embed;
    state: {
        fadeIn: boolean;
        doShow: boolean;
    };
    readonly isCloseable: boolean;
    toastElement: HTMLElement;
    private _isClosing;
    private _isOpening;
    private _isSelfClick;
    didUpdate(): void;
    private _closeInternal;
    close(): void;
    closeOnSelfClick(): void;
    forceClose(): void;
}
