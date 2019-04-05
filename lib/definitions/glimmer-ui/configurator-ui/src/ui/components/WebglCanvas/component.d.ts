import Component from '@glimmer/component';
export default class WebglCanvas extends Component {
    state: {
        showToast: boolean;
        isSyncing: boolean;
        isSyncDone: boolean;
    };
    private _uiCore;
    private _coreEventHandler;
    private _embed;
    private _loadingScreen;
    private _gaInterface;
    private _waitForConfigurationString;
    constructor(options: object);
    didInsertElement(): void;
    onCloseToast(): void;
    private _initEmbedding;
    private _generateImagesOfCurrentConfiguration;
    private _saveCurrentConfiguration;
    private _getCurrentConfigurationId;
    private _init;
    private _onResize;
    private _calcOffset;
    private _onNoDockingsAvailable;
    private _onSyncStarted;
    private _onSyncDone;
}
