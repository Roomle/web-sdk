import Component from '@glimmer/component';
import UiCore from '../../../services/ui-core';
export default class RangeElement extends Component {
    private _output;
    private _valueElement;
    private _filledElement;
    private _emptyElement;
    private _resizeListener;
    protected _uiCore: UiCore;
    state: {
        outputValue: number;
        inputValue: number;
        isInitializing: boolean;
        isIos: any;
    };
    readonly settings: {
        min: any;
        max: any;
        step: any;
    };
    constructor(options: object);
    private _initSlider;
    private _getValueWithUnit;
    private _needsTouchFix;
    didInsertElement(): void;
    willDestroy(): void;
    interactionEnd(): void;
    private _positionOutput;
    change(e: Event): void;
}
