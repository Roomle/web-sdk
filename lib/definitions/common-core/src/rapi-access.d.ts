import { Base64Image } from './common-interfaces';
import { SHORT_TYPES } from './utils/url-shortener';
import { RapiJson, RapiId, RapiAdditionalContent, RapiMesh, RapiServerUrlType, RapiComponent, RapiPackage, RapiConfiguration, RapiItem, RapiTag, RapiTexture, RapiCatalog, RapiMeshData, RapiMaterial, RapiPlan, RapiMaterialGroup, RapiShortId } from '../../typings/rapi-types';
export declare const MAX_URL_LENGTH = 1500;
export declare const MESH_DEFAULT_FORMAT = "crt";
export declare const MESH_DEFAULT_QUALITY = 50;
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
    ITEM_ADDITIONAL_CONTENTS = "itemAdditionalContents"
}
export default class RapiAccess {
    private _formDataUtil;
    private _errorHandler;
    private _dataSyncer;
    private _networkLayer;
    private _localStorage;
    private _overrideTenant;
    private _overrideCountry;
    private _configuratorId;
    private _overrideRapi;
    constructor();
    overrideTenant(tenant: number): void;
    setConfiguratorId(configuratorId: RapiId): void;
    overrideCountry(country: string): void;
    overrideRapi(type: RapiServerUrlType): void;
    getPreloadForItem(id: RapiId): Promise<void>;
    getPreloadForConfiguration(id: RapiId): Promise<void>;
    private _getPreload;
    changeUseOfHDGeometry(): void;
    getHSCPackage(id: RapiId): Promise<RapiPackage>;
    getComponent(id: RapiId): Promise<RapiComponent>;
    getConfiguration(id: RapiId): Promise<RapiConfiguration>;
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
    combineMaterialsToGroups(materials: RapiMaterial[]): RapiMaterialGroup[];
    private _getByIds;
    private _getByIdsPackets;
    private _getByIdsSingle;
    private _getById;
    private _get;
    private _fetchJson;
    private _createHeaders;
    private _handleJson;
    private _getCache;
    private _getErrorCache;
    private _getCacheFrom;
    private _prepareData;
    private _getRelationsCacheFor;
    private _prepareGroups;
    private _handleError;
    private _getRelationData;
    private _notifyWaiters;
}
