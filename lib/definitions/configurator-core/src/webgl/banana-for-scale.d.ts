import { ScenePluginDefaultImplementation } from './plugin-system';
export default class BananaForScale extends ScenePluginDefaultImplementation {
    private _scene;
    private _bounds;
    private _banana;
    private _staticItemLoader;
    setScene(scene: THREE.Scene): void;
    updateBounds(bounds: THREE.Box3): void;
    clearScene(scene: THREE.Scene): void;
    addToScene(): void;
    removeFromScene(): void;
}
