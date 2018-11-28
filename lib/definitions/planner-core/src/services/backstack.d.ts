import { LifeCycleCallbacks } from '../../../common-core/src/life-cycle-manager';
import { Context } from '../../../common-core/src/di/context';
export interface BackstackCallbacks {
    onBackStackChanged: (currentStack: string[]) => void;
    onCloseHSC: () => void;
}
export declare const enum CSS_CLASSES {
    FOREGROUND = "foreground",
    BACKGROUND = "background"
}
export default class Backstack implements LifeCycleCallbacks, Context {
    _creator_: string;
    private _domHelper;
    private _lifeCycleManager;
    private _canvasStack;
    private _initialStack;
    private _callbacks;
    constructor(creator: string);
    private _setInitialStack;
    private _setCallbacks;
    private _resetCanvasStack;
    init(initialStack: string[], backstackCallbacks: BackstackCallbacks): void;
    bringIntoForeground(targetCanvas: string): void;
    current(): string;
    back(): void;
    backTo(id: string): void;
    pause(): void;
    resume(): void;
    destroy(): void;
}
