import { Context } from '../di/context';
export declare class UiCallback implements Context {
    _creator_: string;
    private _isMute;
    private _setMute;
    mute(): void;
    unmute(): void;
    constructor(creator: string);
    get(target: UiCallback, prop: keyof UiCallback): UiCallback[keyof UiCallback];
}
