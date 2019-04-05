import { InitData } from '../common-core/src/utils/shims';
export interface ExternalEnv {
    assetPath?: string;
    initData?: InitData;
    locale?: string;
}
declare global {
    interface Window {
        __RML__ENV__: ExternalEnv;
    }
}
