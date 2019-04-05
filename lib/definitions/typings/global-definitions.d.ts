import * as __dat from 'dat.gui';
type ThreeShader = string;
declare global {
    const THREE: typeof THREE;
    const dat: typeof __dat;
    const WebAssembly: any;
    interface Window {
        KernelCallback: {
            isReady: () => void;
        };
        __RML_GUI__: dat.GUI;
        __RML__DEBUG__: any;
        _rsl: {
            [key: string]: ThreeShader;
        };
    }
}
declare const _default: {};
export default _default;
