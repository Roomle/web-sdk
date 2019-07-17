import Component from '@glimmer/component';
export default class BottomBar extends Component {
    state: {
        showPrice: boolean;
        showInfos: boolean;
    };
    readonly noPrice: boolean;
    didInsertElement(): void;
    didUpdate(): void;
    openInfo(): void;
}
