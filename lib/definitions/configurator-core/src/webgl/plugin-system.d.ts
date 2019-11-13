import { Context } from '../../../common-core/src/di/context';
export declare interface ScenePluginHooks {
    updateBounds(bounds: THREE.Box3): void;
    clearScene(scene: THREE.Scene): void;
}
export declare interface ScenePlugin extends ScenePluginHooks, Context {
    setScene(scene: THREE.Scene): void;
}
export declare class ScenePluginDefaultImplementation implements ScenePlugin {
    _creator_: string;
    constructor(creator: string);
    setScene(scene: THREE.Scene): void;
    updateBounds(bounds: THREE.Box3): void;
    clearScene(scene: THREE.Scene): void;
}
export default class PluginSystem implements Context, ScenePluginHooks {
    _creator_: string;
    private _plugins;
    constructor(creator: string);
    init(scene: THREE.Scene): Promise<void>;
    updateBounds(bounds: THREE.Box3): void;
    clearScene(scene: THREE.Scene): void;
    getActivePlugins(): ScenePlugin[];
}
