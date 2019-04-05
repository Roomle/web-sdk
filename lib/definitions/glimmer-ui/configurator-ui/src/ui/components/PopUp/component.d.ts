import Component from '@glimmer/component';
export default class PopUp extends Component {
    state: {
        useAsPopUp: boolean;
    };
    readonly isOpen: any;
    readonly isCloseable: boolean;
    onCloseToast(): void;
}
