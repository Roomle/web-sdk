import { Context } from '../di/context';
export declare const enum STATIC_ITEM_TYPE {
    GLB = "GLB",
    GLTF = "GLTF"
}
export default abstract class StaticItemLoader implements Context {
    private _environmentLoader;
    _creator_: string;
    private _gltfLoader;
    constructor(creator: string);
    loadGLB(url: string, position?: THREE.Vector3, rotation?: number, size?: THREE.Vector3, scaling?: THREE.Vector3, color?: number, colorable?: boolean): Promise<THREE.Object3D>;
    loadGLTF(gltfJSON: string, position?: THREE.Vector3, rotation?: number, size?: THREE.Vector3, scale?: THREE.Vector3, color?: number, colorable?: boolean): Promise<THREE.Object3D>;
    private _handleGLTFScene;
}
