import * as __THREE from 'three';
import * as __dat from 'dat.gui';
import Container from '../common-core/src/di/container';
import { ExternalEnv } from './shims';
declare global {
    const THREE: typeof __THREE;
    const dat: typeof __dat;
    const WebAssembly: any;
    interface Window {
        KernelCallback: {
            isReady: () => void;
        };
        __RML__DI__: Container;
        __RML__ENV__: ExternalEnv;
        __RML_GUI__: dat.GUI;
        __RML__DEBUG__: any;
    }
}
declare const _default: {};
export default _default;
