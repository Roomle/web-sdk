export declare const getDebugConfig: () => any;
export declare const getProductionConfig: () => {
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
