export interface ContentMeta {
    type: BUDGETEER_TYPES;
    contentLength: number;
    elemCount: number;
}
export declare const enum BUDGETEER_CATEGORY {
    JS = "js",
    CSS = "css",
    VARIOUS = "various",
    CONTENT = "content",
    IMAGES = "images",
    WASM = "wasm",
    ASSETS_3D = "assets3d",
    JSON = "json"
}
export declare const enum BUDGETEER_TYPES {
    WASM = "wasm",
    JS = "js",
    CSS = "css",
    JSON = "json",
    CRT = "crt",
    JPG = "jpg",
    PNG = "png",
    GIF = "gif",
    COMPONENTS = "components",
    TEXTURES = "textures",
    MATERIALS = "materials",
    CONFIGURATIONS = "configurations",
    ITEMS = "items",
    TAGS = "tags",
    UNKNOWN = "unknown",
    GLB = "glb",
    PLANS = "plans"
}
export interface BudgeteerEntry {
    type: BUDGETEER_TYPES;
    size: number;
    count: number;
    timing: number;
}
export declare const RAPI_URL_PATTERN: RegExp;
