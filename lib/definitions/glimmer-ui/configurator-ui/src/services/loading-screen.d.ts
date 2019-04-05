import Service from './-utils/service';
export default class LoadingScreen extends Service {
    private _setLoadingScreen;
    openLoadingScreen(isFast?: boolean): void;
    closeLoadingScreen(): void;
}
