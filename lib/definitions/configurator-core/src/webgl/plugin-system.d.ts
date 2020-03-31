import { Context } from '../../../common-core/src/di/context';
export declare interface ScenePluginHooks {
    updateBounds(bounds: THREE.Box3): void;
    clearScene(scene: THREE.Scene, uiScene: THREE.Scene): void;
    moveCameraEnd(position: THREE.Vector3): void;
    moveCameraStart(position: THREE.Vector3): void;
    needsUiScene(): boolean;
}
export declare interface ScenePlugin extends ScenePluginHooks, Context {
    setScene(scene: THREE.Scene): void;
    setUiScene(uiScene: THREE.Scene): void;
}
export declare class ScenePluginDefaultImplementation implements ScenePlugin {
    _creator_: string;
    constructor(creator: string);
    setScene(scene: THREE.Scene): void;
    setUiScene(uiScene: THREE.Scene): void;
    updateBounds(bounds: THREE.Box3): void;
    clearScene(scene: THREE.Scene, uiScene: THREE.Scene): void;
    moveCameraEnd(position: THREE.Vector3): void;
    moveCameraStart(position: THREE.Vector3): void;
    needsUiScene(): boolean;
}
export default class PluginSystem implements Context, ScenePluginHooks {
    _creator_: string;
    private _scene;
    private _uiScene;
    private _bounds;
    private _cameraPosition;
    private _plugins;
    constructor(creator: string);
    init(scene: THREE.Scene, uiScene: THREE.Scene, cameraPosition: THREE.Vector3): Promise<void>;
    addPlugin(plugin: ScenePlugin): void;
    updateBounds(bounds: THREE.Box3): void;
    clearScene(scene: THREE.Scene, uiScene: THREE.Scene): void;
    getActivePlugins(): ScenePlugin[];
    getPlugin<T extends ScenePlugin>(type: any): T;
    moveCameraEnd(position: THREE.Vector3): void;
    moveCameraStart(position: THREE.Vector3): void;
    needsUiScene(): boolean;
}
