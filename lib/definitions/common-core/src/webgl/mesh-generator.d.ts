import RapiAccess from '../../../common-core/src/rapi-access';
import EnvironmentLoader from '../../../common-core/src/services/environment-loader';
import DataSyncer from '../../../common-core/src/services/data-syncer';
export default class MeshGenerator {
    protected _rapiAccess: RapiAccess;
    protected _environmentLoader: EnvironmentLoader;
    protected _dataSyncer: DataSyncer;
    protected _materialCache: Map<string, THREE.Material>;
    protected _maxAnisotrophy: number;
    protected _waitingForMaterials: Array<Promise<void>>;
    protected _textureLoader: import("three/three-core").TextureLoader;
    protected _previewMaterial: THREE.MeshStandardMaterial;
    constructor();
    protected _generateGeometry(meshId: string, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): THREE.Geometry;
    protected changeMaterialOfMesh(mesh: THREE.Mesh, material: THREE.Material): void;
    maxAnisotrophy: number;
    protected clear(): void;
}
