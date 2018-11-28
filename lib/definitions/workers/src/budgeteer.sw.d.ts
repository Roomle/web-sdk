/// <reference path="../../../../../packages/workers/src/service-worker.d.ts" />
import { BUDGETEER_CATEGORY, BudgeteerEntry, BUDGETEER_TYPES, ContentMeta } from './budgeteer/constants';
export declare type BudgeteerOverview = Map<BUDGETEER_CATEGORY, Map<string, BudgeteerEntry>>;
export declare const getCategory: (url: string, contentType: string) => BUDGETEER_CATEGORY.JS | BUDGETEER_CATEGORY.VARIOUS | BUDGETEER_CATEGORY.CONTENT | BUDGETEER_CATEGORY.IMAGES | BUDGETEER_CATEGORY.WASM | BUDGETEER_CATEGORY.ASSETS_3D | BUDGETEER_CATEGORY.JSON;
export declare const getType: (url: string, category: BUDGETEER_CATEGORY) => BUDGETEER_TYPES.WASM | BUDGETEER_TYPES.JS | BUDGETEER_TYPES.CSS | BUDGETEER_TYPES.CRT | BUDGETEER_TYPES.JPG | BUDGETEER_TYPES.PNG | BUDGETEER_TYPES.GIF | BUDGETEER_TYPES.UNKNOWN | BUDGETEER_TYPES.GLB;
export declare const extractTypeFromFileExtension: (url: string) => BUDGETEER_TYPES.CRT | BUDGETEER_TYPES.JPG | BUDGETEER_TYPES.PNG | BUDGETEER_TYPES.GIF | BUDGETEER_TYPES.UNKNOWN | BUDGETEER_TYPES.GLB;
export declare const getTypeFromRapiModel: (modelname: string) => BUDGETEER_TYPES.COMPONENTS | BUDGETEER_TYPES.TEXTURES | BUDGETEER_TYPES.MATERIALS | BUDGETEER_TYPES.CONFIGURATIONS | BUDGETEER_TYPES.ITEMS | BUDGETEER_TYPES.TAGS | BUDGETEER_TYPES.UNKNOWN | BUDGETEER_TYPES.PLANS;
export declare const handleContent: (response: Response) => Promise<ContentMeta>;
export declare const getContentSizeOf: (category: BUDGETEER_CATEGORY) => number;
export declare const resetOverview: () => void;
export declare const getSizeOf: (category: BUDGETEER_CATEGORY) => number;
export declare const printCategoryTable: (category: BUDGETEER_CATEGORY) => void;
export declare const printStats: (details: boolean) => void;
export declare const getOverview: () => Map<BUDGETEER_CATEGORY, Map<string, BudgeteerEntry>>;
export declare const getRequestCount: () => number;
export declare const handleFetchEvent: (event: any) => void;
