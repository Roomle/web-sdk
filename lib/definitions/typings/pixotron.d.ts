declare interface SAOPass {
    enabled?: boolean;
    smoothTransition?: boolean;
    occlusionWorldRadius?: number;
    intensity?: number;
    bias?: number;
    numSamples?: number;
    setDownscaleLevel(level: number): void;
}
declare interface ShadowPass {
    enabled?: boolean;
    smoothTransition?: boolean;
    enableAccumulation?: boolean;
    shadowRadius?: number;
    shadowBiasMultiplier?: number;
    numSamples?: number;
    setShadowRecieverBBox(box: THREE.Box3): void;
    setDownscaleLevel(level: number): void;
}
export declare interface ShadowPlanePass {
    enable?: boolean;
    smoothTransition?: boolean;
    numSamples?: number;
    numSamplesPerFrame?: number;
    getShadowPlane(): THREE.Mesh;
}
export declare class Pixotron {
    enableAA: boolean;
    needsUpdate: boolean;
    autoShadowsClear: boolean;
    autoSAOClear: boolean;
    constructor(params?: any);
    render(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, renderTarget?: THREE.WebGLRenderTarget): void;
    renderFrame(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera, renderTarget?: THREE.WebGLRenderTarget): void;
    setSize(width: number, height: number): void;
    getSAOPass(): SAOPass;
    getShadowPass(): ShadowPass;
    getHighLightPass(): any;
    getShadowPlanePass(): ShadowPlanePass;
    highlightObjects(objects: THREE.Object3D[]): void;
    blit(): void;
    dispose(): void;
    isSuperSamplingConverged(): boolean;
    setQualityAdapter(qualityAdapter: any): void;
}
export declare class QualitySettings {
    constructor(quality: number);
}
export declare class QualityAdapter {
    constructor(pixotron: Pixotron);
    onQualityChange(callback: any): void;
}
export declare class AutoQualityAdapter extends QualityAdapter {
    addQuality(qualitySetting: any): void;
    setDesiredFps(desiredFps: number): void;
}
export declare class ManualQualityAdapter extends QualityAdapter {
}
export declare interface BakedShadowParams {
    enable: boolean;
    shadowMapResolution?: number;
    smoothTransition?: boolean;
    numSamples?: number;
    numSamplesPerFrame?: number;
    bShadowMaterial?: boolean;
    falloff?: number;
    darkness?: number;
    size?: number;
    lightSolidAngle?: number;
    yPosition?: number;
    lightDirection?: THREE.Vector3;
    onComplete?: () => void;
    onProgress?: (value: number) => void;
}
export declare class PlaneShadowBakePass {
    enable: boolean;
    constructor(params?: BakedShadowParams);
    startBake(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera): void;
    getShadowPlane(): THREE.Mesh;
}
export {};
