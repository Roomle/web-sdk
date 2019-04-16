import '../../../typings/stats';
import CacheHolder from '../services/cache-holder';
export default class StatsHelper {
    private _scriptLoader;
    protected _cacheHolder: CacheHolder;
    private _statPanels;
    private _drawPanel;
    private _trianglesPanel;
    private _geometryPanel;
    private _texturePanel;
    private _materialPanel;
    constructor();
    private _init;
    update(info: THREE.WebGLInfo): void;
}
