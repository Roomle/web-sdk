import { Context } from '../di/context';
export default class EnvironmentLoader implements Context {
    _creator_: string;
    private _environmentMap;
    private _hdrCubeUrl;
    private _hdrCubeUrlLowres;
    private _envMapReader;
    private _renderer;
    private _scene;
    private _envChangedCallback;
    static setEnvironmentMap(material: THREE.MeshStandardMaterial, envMap: THREE.Texture): void;
    constructor(creator: string);
    getEnvironmentMap(): THREE.Texture;
    private _packEnvMap;
    protected _loadHDREnvMap(envMapFile: string): Promise<void>;
    setRendererAndScene(renderer: THREE.WebGLRenderer, scene: THREE.Scene): void;
    registerEnvironmentChangedCallback(callBack: any): void;
    private _updateEnvironmentMap;
    setEnvMap(material: THREE.MeshStandardMaterial): void;
}
