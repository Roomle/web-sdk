export default class CacheHolder {
    private _geometryCache;
    private _materialCache;
    readonly geometryCache: Map<string, THREE.Geometry>;
    readonly materialCache: Map<string, THREE.Material>;
    clear(): void;
}
