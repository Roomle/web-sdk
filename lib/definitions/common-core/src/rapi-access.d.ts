import { Base64Image } from './common-interfaces';
import { SHORT_TYPES } from './utils/url-shortener';
import { PriceId, RapiAdditionalContent, RapiCatalog, RapiComponent, RapiConfiguration, RapiId, RapiItem, RapiJson, RapiMaterial, RapiMaterialGroup, RapiMesh, RapiMeshData, RapiPackage, RapiPlan, RapiPrice, RapiServerUrlType, RapiShortId, RapiSkin, RapiTag, RapiTexture } from '../../typings/rapi-types';
import { Context } from './di/context';
export declare const MAX_URL_LENGTH = 1500;
export declare const MESH_DEFAULT_FORMAT = "crt";
export declare const MESH_DEFAULT_QUALITY = 50;
export declare const LEGACY_GROUP_INDICATOR: string;
export declare const RAPI_PATH_KEY = "__rapi_path__";
export declare const enum RAPI_PATHS {
    COMPONENTS = "components",
    TEXTURES = "textures",
    MESHES = "meshes",
    MATERIALS = "materials",
    CONFIGURATIONS = "configurations",
    ITEMS = "items",
    TAG = "tags",
    PACKAGE = "package",
    PRELOAD = "preloads/components",
    SHORT_IDS = "shortIds",
    CATALOGS = "catalogs",
    PLANS = "plans",
    ITEM_ADDITIONAL_CONTENTS = "itemAdditionalContents",
    TENANT_ME = "tenants/me",
    TENANT = "tenants",
    SKIN = "skins",
    PRICE = "prices",
    CATALOG_MESHES = "catalogMeshes"
}
export default class RapiAccess implements Context {
    _creator_: string;
    private _formDataUtil;
    private _errorHandler;
    private _dataSyncer;
    private _networkLayer;
    private _localStorage;
    private _configuratorUiCallbacks;
    private _overrideTenant;
    private _overrideCountry;
    private _configuratorId;
    private _overrideRapi;
    private _customApiUrl;
    constructor(creator: string);
    overrideTenant(tenant: number): void;
    setConfiguratorId(configuratorId: RapiId): void;
    overrideCountry(country: string): void;
    overrideRapi(type: RapiServerUrlType): void;
    setCustomApiUrl(customApiUrl: string): void;
    getPreloadForItem(id: RapiId): Promise<void>;
    getPreloadForConfiguration(id: RapiId): Promise<void>;
    private _getPreload;
    changeUseOfHDGeometry(): void;
    getHSCPackage(id: RapiId): Promise<RapiPackage>;
    getComponent(id: RapiId): Promise<RapiComponent>;
    getConfiguration(id: RapiId): Promise<RapiConfiguration>;
    getConfigurations(ids: RapiId[]): Promise<RapiConfiguration[]>;
    getItem(id: RapiId): Promise<RapiItem>;
    getComponents(ids: RapiId[]): Promise<RapiComponent[]>;
    getItems(ids: RapiId[]): Promise<RapiItem[]>;
    getTag(id: RapiId): Promise<RapiTag>;
    getTags(ids: RapiId[]): Promise<RapiTag[]>;
    getTexture(id: RapiId): Promise<RapiTexture>;
    getCatalog(id: RapiId): Promise<RapiCatalog>;
    getMesh(id: RapiId, format?: string, quality?: number): Promise<RapiMeshData>;
    getMeshesOfCatalog(catalogId: RapiId): Promise<RapiMesh[]>;
    getTexturesOf(rapiJson: RapiJson): Promise<RapiTexture[]>;
    getItemsOf(rapiJson: RapiJson): Promise<RapiItem[]>;
    getMaterialsOf(rapiJson: RapiJson): Promise<RapiMaterial[]>;
    getComponentsOf(rapiJson: RapiJson): Promise<RapiComponent[]>;
    getAdditionalContentsOfItems(rapiItems: RapiItem[]): Promise<RapiAdditionalContent[]>;
    getMaterial(id: RapiId): Promise<RapiMaterial>;
    peekMaterial(id: RapiId): RapiMaterial;
    peekComponent(id: RapiId): RapiComponent;
    getMaterials(ids: RapiId[]): Promise<RapiMaterial[]>;
    getPlan(id: RapiId): Promise<RapiPlan>;
    static clearCaches(): void;
    cleanUp(): void;
    getMaterialsByGroup(groupIdsToCheck: RapiId[]): Promise<RapiMaterialGroup[]>;
    private _flushOfflineQueue;
    private _setQueuedConfiguration;
    saveConfiguration(configuration: RapiConfiguration): Promise<RapiConfiguration>;
    saveTopImage(configuration: RapiConfiguration, topImage: Base64Image): Promise<RapiConfiguration>;
    savePerspectiveImage(configuration: RapiConfiguration, perspectiveImage: Base64Image): Promise<RapiConfiguration>;
    getShortUrl(referencedId: RapiId, type: SHORT_TYPES): Promise<RapiShortId>;
    private _peekData;
    private _saveConfigurationImage;
    private _markConfigurationAsLocally;
    private _save;
    combineMaterialsToGroups(materials: RapiMaterial[]): Promise<RapiMaterialGroup[]>;
    private _getByIds;
    private _getByIdsPackets;
    private _getByIdsSingle;
    private _getById;
    private _get;
    private _fetchJson;
    private _createHeaders;
    private _handleJson;
    private _prepareEmbeddedData;
    private _getCache;
    private _getErrorCache;
    private _getCacheFrom;
    private _setCache;
    private _prepareData;
    private _getRelationsCacheFor;
    private _prepareGroups;
    private _handleError;
    private _getRelationData;
    private _prepareRelationalData;
    private _notifyWaiters;
    private _tenantMe;
    getCurrentSkin(): Promise<RapiSkin>;
    getPrices(pricesIds: PriceId[]): Promise<RapiPrice[]>;
}
