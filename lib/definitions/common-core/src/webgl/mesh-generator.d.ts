import RapiAccess from '../../../common-core/src/rapi-access';
import EnvironmentLoader from '../../../common-core/src/services/environment-loader';
import DataSyncer from '../../../common-core/src/services/data-syncer';
import SinglePromiseFactory from '../utils/single-promise-factory';
import CacheHolder from '../services/cache-holder';
import { Context } from '../di/context';
export default class MeshGenerator implements Context {
    _creator_: string;
    protected _rapiAccess: RapiAccess;
    protected _environmentLoader: EnvironmentLoader;
    protected _dataSyncer: DataSyncer;
    protected _singlePromiseFactory: SinglePromiseFactory;
    protected _cacheHolder: CacheHolder;
    protected _maxAnisotrophy: number;
    protected _textureLoader: import("three/three-core").TextureLoader;
    protected _previewMaterial: THREE.MeshStandardMaterial;
    constructor(creator: string);
    protected _generateGeometry(meshId: string, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): THREE.Geometry;
    changeMaterialOfMesh(mesh: THREE.Mesh, material: THREE.Material): void;
    protected _createMaterial(materialId: string, resolve: () => void, reject: (error: Error) => void): void;
    protected _loadMaterial(materialId: string): Promise<THREE.Material>;
    protected _assignMaterial(mesh: THREE.Mesh, materialId: string): Promise<void>;
    maxAnisotrophy: number;
    clear(): void;
}
