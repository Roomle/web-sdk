import Component from '@glimmer/component';
export default class ShareDialog extends Component {
    private _uiCore;
    private _embed;
    state: {
        shortUrl: string;
        isLoading: boolean;
    };
    didInsertElement(): void;
    select(event: Event): void;
    deselect(event: Event): void;
    copy(): void;
    private _endLoading;
}
