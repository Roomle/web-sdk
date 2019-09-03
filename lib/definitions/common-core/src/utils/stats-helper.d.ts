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
    private _qualityPanel;
    constructor();
    private _init;
    updateRenderInfo(info: THREE.WebGLInfo): void;
    updateQualityInfo(qualitySetting: any): void;
}
