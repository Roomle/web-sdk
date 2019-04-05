import Component from '@glimmer/component';
export default class AElement extends Component {
    private _coreEventHandler;
    private _eventHandler;
    state: {
        isSelected: boolean;
        isLoaded: boolean;
    };
    private _detectForceTouchInterval;
    private _firstTouch;
    private _lastTouch;
    private _isDragging;
    private _isTouch;
    private _onOpenAddonsBind;
    constructor(object: object);
    previewDockings(child: UiPossibleChild): void;
    setIsSelected(isSelected: any): void;
    private _onOpenAddons;
    didInsertElement(): void;
    didUpdate(): void;
    willDestroy(): void;
    private _setImage;
    private _dragStart;
    private _dragEnd;
    private _dragStartNotifyCore;
    private _dragEndNotify;
    private _touchStart;
    private _touchMove;
    private _touchEnd;
    private _clearInterval;
    private _resetTouches;
    private _detectForceTouch;
    imageLoaded(): void;
}
