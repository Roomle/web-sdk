import { RoomleComponent } from '../webgl/roomle-component-factory';
export default class CacheHolder {
    private _componentCache;
    private _geometryCache;
    private _materialCache;
    readonly componentCache: Map<string, RoomleComponent>;
    readonly geometryCache: Map<string, THREE.Geometry>;
    readonly materialCache: Map<string, THREE.Material>;
    clear(): void;
}
