import AbstractParameter from '../../-utils/AbstractParameter';
export default class PBoolean extends AbstractParameter {
    readonly actualValue: any;
    readonly isChecked: boolean;
    private _setCheckbox;
    didInsertElement(): void;
}
