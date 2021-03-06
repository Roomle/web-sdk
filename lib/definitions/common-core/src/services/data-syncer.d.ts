import { WORKER_MESSAGE, CommunicationInterfaceCallback } from '../../../workers/src/communication-interface';
import { RapiId, AssetUrl } from '../../../typings/rapi-types';
import { Context } from '../di/context';
export default class DataSyncer implements Context, CommunicationInterfaceCallback {
    _creator_: string;
    private _rapiAccess;
    private _singlePromiseFactory;
    private _errorHandler;
    private _configuratorUiCallbacks;
    private _worker;
    private _mainThreadToWorker;
    private _bootCallbacks;
    private _isStarted;
    private _isStarting;
    private _alwaysUseCache;
    constructor(creator: string);
    start(catalogId: RapiId): Promise<void>;
    syncCatalog(catalogId: RapiId): Promise<void>;
    syncFloorTag(tagId: RapiId): Promise<any>;
    syncTypeChangeTag(tagId: RapiId): Promise<any>;
    private _syncFloorTag;
    _syncTypeChangeTag(tagId: RapiId): Promise<any>;
    getIsCatalogSynced(catalogId: RapiId): boolean;
    private _startWorker;
    onCommand(command: WORKER_MESSAGE, conversationId: number, data: any): void;
    private _handleCatalog;
    private _handleTags;
    private _handleExternalMeshes;
    private _handleItemsAndAdditionalContents;
    private _handleMaterialsAndTextures;
    private _handleContentWithAssets;
    private _fetchAssets;
    private _preCacheAsset;
    private _assetUrlToBase64;
    private _softReject;
    requestAsset(url: string, urlAsFallback?: boolean): AssetUrl;
    setAlwaysUseCache(alwaysUseCache: boolean): void;
    preFillAssetCache(key: string, url: string): void;
}
