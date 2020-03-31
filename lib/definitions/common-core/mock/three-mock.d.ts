export declare class WebGLRendererMock {
    setClearColor: () => void;
    setPixelRatio: () => void;
    setSize: () => void;
    domElement: HTMLCanvasElement;
    clear: () => void;
    render: () => void;
    extensions: {
        get: () => boolean;
    };
    capabilities: {
        getMaxAnisotropy: () => number;
        maxTextures: number;
    };
    shadowMap: {
        enabled: boolean;
    };
    getSize(): {
        width: number;
        height: number;
    };
}
export default class ThreeMock {
    static setup(): void;
    static teardown(): void;
    static override(key: string, mock: any): void;
    static dispatchEventOnCanvas(e: Event): void;
}
