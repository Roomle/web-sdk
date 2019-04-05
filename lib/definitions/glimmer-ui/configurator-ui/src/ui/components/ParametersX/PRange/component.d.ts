import AbstractParameter from '../../-utils/AbstractParameter';
export default class PRange extends AbstractParameter {
    args: {
        parameter: KernelParameter;
    };
    private _newValue;
    state: {
        initialValue: string;
        hasParseError: boolean;
        hasOutOfBoundsError: boolean;
        showDetail: boolean;
    };
    readonly valueUi: string;
    readonly valueFrom: number;
    readonly valueTo: number;
    readonly hasError: boolean;
    constructor(options: object);
    didInsertElement(): void;
    didUpdate(): void;
    willDestroy(): void;
    commitEdit(event: FocusEvent | KeyboardEvent): void;
    selectAll(event: FocusEvent): void;
    handleEditKeyUp(event: KeyboardEvent): void;
    showDetail(): void;
    onSliderInteractionEnd(valueWithUnitString: string): void;
    onSliderInteraction(): void;
}
