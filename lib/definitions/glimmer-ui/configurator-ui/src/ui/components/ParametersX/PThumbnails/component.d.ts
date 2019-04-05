import AbstractParameter from '../../-utils/AbstractParameter';
export declare const MAX_THUMBS_IN_OVERVIEW = 4;
export default class PThumbnails extends AbstractParameter {
    readonly amountAll: any;
    readonly showAllLabel: any;
    readonly hasShowAll: boolean;
    readonly isOverview: boolean;
    readonly validValues: any;
    didInsertElement(): void;
    didUpdate(): void;
}
