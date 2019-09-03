export default class EnvironmentLoader {
    private _environmentMap;
    private _iblEnvironmentMap;
    getEnvironmentMap(): Promise<THREE.Texture>;
    private _generateEnvironmentMapAsync;
    private _generateIblEnvironmentMap;
    setDefaultEnvironmentMap(scene: THREE.Scene): void;
    setIBLEnvironmentMap(scene: THREE.Scene, renderer: THREE.WebGLRenderer): void;
    private _setEnvironmentMap;
    setEnvMap(material: THREE.MeshStandardMaterial): void;
}
