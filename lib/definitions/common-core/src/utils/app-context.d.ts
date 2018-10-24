interface AppState {
    locale?: string;
    kernelInstance?: any;
    kernelContainer?: any;
    planObjectId?: number;
}
export default class AppContext {
    static actualLocale: string;
    static useHDGeometry: boolean;
    static kernelInstance: any;
    static kernelContainer: any;
    static planObjectId: number;
    static init(appState?: AppState): void;
}
export {};
