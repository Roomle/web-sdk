export declare class UiCallback {
    private _isMute;
    private _setMute;
    mute(): void;
    unmute(): void;
    constructor();
    get(target: UiCallback, prop: keyof UiCallback): UiCallback[keyof UiCallback];
}
