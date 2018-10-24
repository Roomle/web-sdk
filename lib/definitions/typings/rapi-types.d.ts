export declare type RapiId = string;
export declare type AssetUrl = string;
export declare type ConfigurationString = string;
export declare type ConfigurationHash = string;
export declare type Base64String = string;
export declare type RapiServerUrlType = 'live' | 'test';
export interface RoomleSortable {
    sort?: number;
}
export interface RapiJsonBox {
    meta?: RapiMeta;
    [key: string]: RapiMeta | RapiJson | RapiJson[];
}
export interface RapiMeta {
    serverTime: string;
    total: number;
    [key: string]: string | number;
}
export interface RapiJson {
    id?: RapiId;
    isLocally?: boolean;
    __rapi_path__?: string;
    [key: string]: any;
}
export interface RapiPackage extends RapiJson {
    components: RapiComponent[];
    materials: RapiMaterial[];
    textures: RapiTexture[];
}
export interface RapiBaseColor {
    r: number;
    g: number;
    b: number;
    [key: string]: number;
}
export interface RapiMesh extends RapiJson {
    catalog: RapiId;
}
export interface RapiMeshData {
    format: string;
    quality: number;
    url: string;
    created: string;
    changed: string;
    meshId: RapiId;
    [key: string]: number | string | RapiId;
}
export interface RapiMaterialShading {
    alpha: number;
    metallic: number;
    specularity: number;
    basecolor: RapiBaseColor;
    roughness: number;
    [key: string]: number | RapiBaseColor;
}
export interface RapiMaterial extends RapiJson {
    name: string;
    externalIdentifier: string;
    group: string;
    groupLabel: string;
    color: string;
    thumbnail: AssetUrl;
    label: string;
    textures: number[];
    shading: RapiMaterialShading;
    [key: string]: string | RapiMaterialShading | AssetUrl | RapiId | number[] | boolean;
}
export interface RapiMaterialGroup extends RapiJson {
    id: RapiId;
    label: string;
    materials: RapiMaterial[];
    [key: string]: string | RapiMaterial[] | RapiId | boolean;
}
export interface RapiTexture extends RapiJson {
    mapping: string;
    url: AssetUrl;
    image: AssetUrl;
    height: number;
    width: number;
    mmHeight: number;
    mmWidth: number;
    tileable: boolean;
    material: RapiId;
    [key: string]: string | number | boolean | AssetUrl | RapiId;
}
export interface RapiCatalog extends RapiJson {
    name: string;
    featuredImage: string;
    externalIdentifier: string;
    cover: string;
    brandIcon: string;
    description: string;
    free: boolean;
    public: boolean;
    featured: boolean;
    sort: number;
    created: string;
    updated: string;
    hidden: boolean;
    hiddenByUser: boolean;
    hiddenByTenant: boolean;
    tenantIsOwner: boolean;
    orderable: boolean;
    active: boolean;
    purchased: boolean;
    branded: boolean;
    tenant: RapiTenant;
    items: RapiItem[];
    allItems: RapiItem[];
    components: RapiComponent[];
    materials: RapiMaterial[];
    tags: RapiId[];
    allTags: RapiTag[];
    rootTags: RapiTag[];
    retailers: RapiRetailer[];
    [key: string]: string | number | boolean | RapiRetailer | RapiTag | RapiMaterial | RapiComponent | RapiItem | RapiTenant;
}
export interface RapiTenant extends RapiJson {
    name: string;
    label: string;
    defaultLanguage: string;
    active: boolean;
    showLanguageSwitch: boolean;
    branded: boolean;
    authenticationRequired: boolean;
    configuration: string;
    catalogs: RapiCatalog[];
    users: RapiUser[];
    roles: RapiRole[];
    skin: RapiSkin[];
    plans: RapiPlan[];
}
export interface RapiUser extends RapiJson {
    username: string;
    salutationCode: number;
    firstname: string;
    lastname: string;
    email: string;
    street: string;
    zipcode: string;
    city: string;
    countryCode: string;
    birthdate: string;
    phone: string;
    locale: string;
    registerDate: string;
    password: string;
    lastLogin: string;
    active: boolean;
    newsletter: boolean;
    emailValidated: string;
    termsChanged: boolean;
    providedConsentInTenant: boolean;
    priceLists: any;
    tenants: RapiTenant[];
    roles: RapiRole[];
    catalogs: RapiCatalog[];
    plans: RapiPlan[];
    favorites: RapiFavorite[];
    setting: RapiUserSetting;
}
export declare const enum RapiFavoriteType {
    ITEM = 1,
    CONFIG = 2,
    AFFILIATE = 3
}
export interface RapiFavorite extends RapiJson {
    objectId: string;
    type: RapiFavoriteType;
    created: string;
    user: RapiUser;
}
export interface RapiUserSetting extends RapiJson {
    metric: boolean;
    measurements: boolean;
    area: boolean;
    furnitureSnap: boolean;
    user: RapiUser;
}
export interface RapiRole extends RapiJson {
    role: number;
    allowedModules: any;
    tenantId: RapiTenant;
    userId: RapiUser;
}
export interface RapiSkin extends RapiJson {
    accentColor: string;
    appIcon: string;
    backgroundImage: string;
    btnColorDark: string;
    btnColorLight: string;
    ciColor: string;
    dashboardBackground: string;
    loginBackground: string;
    dashboardLogo: string;
    fontColor: string;
    headerBackgroundColor: string;
    headerForegroundColor: string;
    logo: string;
    mailBackgroundColor: string;
    mailHeaderImage: string;
    planBackground: string;
    planLogo: string;
    splashScreenImage: string;
    tenantUrl: string;
    watermarkImage: string;
    brandedCatalogsIcon: string;
    planNote: string;
    inquiryImage: string;
    inquiryLink: string;
    hideMadeByRoomle: boolean;
    hidePressLink: boolean;
    hideShareButton: boolean;
    translationPath: string;
    hideFeedbackButton: boolean;
    referralUrl: string;
    hideCatalogOverview: boolean;
    tenant: RapiTenant;
    catalogEntryTags: RapiTag;
}
export interface RapiPlan extends RapiJson {
    name: string;
    description: string;
    changeDate: string;
    created: string;
    draftId: number;
    thumbnail: string;
    planObjects: string;
    active: boolean;
    right: number;
    draft: number;
    open: number;
    planDirectory: number;
    changed: number;
    version: number;
    floorLevel: number;
    hash: string;
    visibility: number;
    user: RapiUser;
    tenant: RapiTenant;
    assets: RapiPlanAsset[];
    parent: RapiPlan;
    setting: RapiPlanSetting;
    getTotalFloorArea(): number;
}
export interface RapiPlanAsset extends RapiJson {
    image: string;
}
export interface RapiPlanSetting extends RapiJson {
    metric: boolean;
    measurements: boolean;
    area: boolean;
    furnitureSnap: boolean;
    plan: RapiPlan;
}
export interface RapiRetailer extends RapiJson {
}
export interface RapiConfiguration extends RapiJson {
    created: string;
    lastAccess: string;
    configuration: ConfigurationString;
    configurationHash: string;
    parts: string;
    perspectiveImage?: AssetUrl;
    topImage?: AssetUrl;
    rootComponentId: RapiId;
    orderable?: boolean;
    requestable?: boolean;
    width: number;
    height: number;
    depth: number;
    catalog?: RapiId;
    [key: string]: string | number | boolean | AssetUrl | RapiId;
}
export interface RapiConfigurationEnhanced extends RapiConfiguration {
    label: string;
}
export interface RapiElement extends RapiJson, RoomleSortable {
    configuration: ConfigurationString;
    label: string;
    perspectiveImage: AssetUrl;
    description: string;
    updated: string;
    externalIdentifier: string;
    created: string;
    tags: RapiId[];
    [key: string]: string | number | boolean | AssetUrl | RapiId | RapiId[];
}
export interface RapiComponent extends RapiElement {
    active: boolean;
}
export interface RapiItem extends RapiElement {
    width: number;
    height: number;
    depth: number;
    basecolor: number;
    displayedWidth: number;
    displayedHeight: number;
    displayedDepth: number;
    perspectiveImageHD: AssetUrl;
    topImage: AssetUrl;
    threeDimensionalAssetWeb: AssetUrl;
    threeDimensionalAssetIOS: AssetUrl;
    threeDimensionalAsset: AssetUrl;
    flipable: boolean;
    scaleable: boolean;
    meta: string;
    hidden: boolean;
    link: string;
    colorable: boolean;
    layer: number;
    language: string;
    type: string;
    detailType: string;
    currencySymbol: string;
    customerPrice: number;
    sort: number;
    orderable: boolean;
    requestable: boolean;
    catalog: RapiId;
}
export declare const enum RAPI_ADDITIONAL_CONTENTS {
    UNKNOWN = 0,
    LINK = 1,
    TEXT = 2,
    VIDEO = 3,
    DOWNLOAD = 4,
    IMAGE = 5,
    SKETCH = 6
}
export interface RapiAdditionalContent extends RapiJson {
    changed: string;
    content: string;
    created: string;
    itemId: RapiId;
    label: string;
    language: string;
    type: RAPI_ADDITIONAL_CONTENTS;
}
export interface RapiTagGeneric extends RapiJson {
    label?: string;
    externalIdentifier: string;
    pngIcon?: AssetUrl;
    svgIcon?: AssetUrl;
    inspirationImage?: AssetUrl;
    global: boolean;
    sort?: number;
    created: string;
    updated: string;
    language: string;
    description?: string;
    catalog: RapiId;
    tags: RapiId[];
    parents: RapiId[];
    [key: string]: string | number | boolean | AssetUrl | RapiId | RapiId[] | RapiElement[] | RapiMaterial[];
}
export interface RapiTag extends RapiTagGeneric {
    items: RapiId[];
    materials: RapiId[];
}
export interface RapiTagForUi extends RapiTagGeneric {
    materials: RapiMaterial[];
    items: RapiItem[];
}
export interface RapiShortId {
    shortId: string;
    referencedId: string;
    url: string;
    type: number;
    created: string;
    lastAccess: string;
    [key: string]: string | number;
}
