import Service from './-utils/service';
export default class LoadingScreen extends Service {
    private _shouldOpen;
    constructor(options: object);
    private _setLoadingScreen;
    openLoadingScreen(isFast?: boolean): void;
    openLoadingScreenWithDelay(isFast?: boolean, delay?: number): void;
    closeLoadingScreen(debugError?: any): void;
}
