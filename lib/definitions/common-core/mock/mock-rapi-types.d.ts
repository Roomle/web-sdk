import { RapiBaseColor, RapiItem, RapiJson, RapiMaterial, RapiPrice, RapiSkin, RapiTenant } from '../../typings/rapi-types';
export declare const cloneMockObject: (object: any) => any;
export declare const MOCK_RAPI_BASE_COLOR: RapiBaseColor;
export declare const MOCK_RAPI_TEXTURES_EMPTY: any[];
export declare const MOCK_RAPI_MATERIAL: RapiMaterial;
export declare const MOCK_RAPI_TENANT: RapiTenant;
export declare const MOCK_RAPI_SKIN: RapiSkin;
export declare const MOCK_RAPI_ITEM: RapiItem;
export declare const MOCK_RAPI_TEXTURE: {
    id: number;
    material: string;
    image: string;
    url: string;
    height: number;
    width: number;
    mmHeight: number;
    mmWidth: number;
    tileable: boolean;
    mapping: string;
};
export declare const MOCK_RAPI_NORMAL_TEXTURE: {
    id: number;
    material: string;
    image: string;
    url: string;
    height: number;
    width: number;
    mmHeight: number;
    mmWidth: number;
    tileable: boolean;
    mapping: string;
};
export declare const MOCK_RAPI_PRICES: RapiPrice;
export declare const wrapIntoRapiBox: (key: string, data: RapiJson | RapiJson[]) => {
    [x: string]: {};
    meta: {};
} | {
    [x: string]: RapiJson;
    meta?: undefined;
};
export declare const getResponseObject: (data: any) => Promise<{
    headers: {
        get: (header: string) => "application/json";
    };
    json: () => Promise<any>;
}>;
