export declare const ENV_DEBUG: any;
export declare const ENV: {
    isProduction: boolean;
    isUnitTesting: any;
    environment: string;
    detailEnvironment: string;
    features: {
        hdEnabledByDefault: any;
    };
    APP: {
        RAPI: {
            server: string;
            liveServer: string;
            testServer: string;
            headers: {
                apiKey: string;
                currentTenant: number;
                locale: string;
                language: string;
                device: number;
                token: string;
                platform: string;
            };
            itemHeaders: {
                assetRevision: string;
                assetFileFormat: string;
            };
        };
        WASM: {
            CONFIGURATOR: {
                URL: string;
                CACHE_COMPILATION: boolean;
                HASH: string;
                LOADER: string;
            };
            PLANNER: {
                URL: string;
                CACHE_COMPILATION: boolean;
                HASH: string;
                LOADER: string;
            };
        };
        ASM: {
            CONFIGURATOR: {
                MEM_URL: string;
                LOADER: string;
            };
            PLANNER: {
                MEM_URL: string;
                LOADER: string;
            };
        };
        SHORTENER_URL: string;
    };
    environments: {
        PRODUCTION: string;
        DEVELOPMENT: string;
        TEST: string;
        TEST_SERVER: string;
        ALPHA: string;
    };
};
export default ENV;
