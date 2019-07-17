export default class EnvironmentLoader {
    private _environmentMap;
    private _iblEnvironmentMap;
    getEnvironmentMap(): Promise<THREE.Texture>;
    private _generateEnvironmentMapAsync;
    private _generateIblEnvironmentMap;
}
