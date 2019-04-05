declare interface SAOPass {
    enabled?: boolean;
    smoothTransition?: boolean;
    occlusionWorldRadius?: number;
    intensity?: number;
    bias?: number;
    numSamples?: number;
}
declare interface ShadowPass {
    enabled?: boolean;
    smoothTransition?: boolean;
    enableAccumulation?: boolean;
    shadowRadius?: number;
    shadowBiasMultiplier?: number;
    numSamples?: number;
    setShadowRecieverBBox(box: THREE.Box3): void;
}
export declare interface ShadowPlanePass {
    enable?: boolean;
    smoothTransition?: boolean;
    numSamples?: number;
    numSamplesPerFrame?: number;
    getShadowPlane(): THREE.Object3D;
}
export declare class Pixotron {
    enableAA: boolean;
    needsUpdate: boolean;
    autoShadowsClear: boolean;
    autoSAOClear: boolean;
    constructor(params?: any);
    render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, renderTarget?: THREE.WebGLRenderTarget): void;
    setSize(width: number, height: number): void;
    getSAOPass(): SAOPass;
    getShadowPass(): ShadowPass;
    getHighLightPass(): THREE.OutlinePass;
    getShadowPlanePass(): ShadowPlanePass;
    highlightObjects(objects: THREE.Object3D[]): void;
    updateShadowPlane(object: THREE.Object3D): void;
    blit(): void;
}
export {};
