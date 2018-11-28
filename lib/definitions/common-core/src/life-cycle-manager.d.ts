export interface LifeCycleCallbacks {
    pause: () => void;
    resume: () => void;
    destroy: () => void;
}
export default class LifeCycleManager implements LifeCycleCallbacks {
    private _listeners;
    addEventListener(listener: LifeCycleCallbacks): void;
    removeEventListener(listener: LifeCycleCallbacks): void;
    pause(): void;
    resume(): void;
    destroy(): void;
}
