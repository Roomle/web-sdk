export default class EnvironmentLoader {
    private _environmentMap;
    private _iblEnvironmentMap;
    private _useHDREnvMaps;
    private _defaultEnvironmentMap;
    private ldrCubeUrls_;
    private hdrCubeUrls_;
    private hdrPanoramaUrl_;
    private _usePanorama;
    private _scriptLoader;
    getEnvironmentMap(): Promise<THREE.Texture>;
    private _loadHDRPanoramaEnvMap;
    private _loadHDREnvMap;
    private _loadEnvMap;
    private _generateEnvironmentMapAsync;
    private _generateIblEnvironmentMap;
    setDefaultEnvironmentMap(scene: THREE.Scene): void;
    createIBLEnvironmentMap(renderer: THREE.WebGLRenderer, scene?: THREE.Scene, onUpdate?: (value?: void | PromiseLike<void>) => void): void;
    private _setEnvironmentMap;
    setEnvMap(material: THREE.MeshStandardMaterial): void;
    updateHDREnvMap(scene: THREE.Scene, renderer: THREE.Renderer): Promise<void>;
}
