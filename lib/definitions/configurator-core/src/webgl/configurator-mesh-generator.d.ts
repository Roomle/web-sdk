import MeshGenerator from '../../../common-core/src/webgl/mesh-generator';
import { KernelEnum } from '../../../typings/kernel';
import { RapiMaterial } from '../../../typings/rapi-types';
export default class ConfiguratorMeshGenerator extends MeshGenerator {
    private _geometryComponentMaterialCache;
    private _configuratorPreviewMaterial;
    constructor(creator: string);
    generateMesh(runtimeComponentId: number, meshId: string, materialId: string, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array, newGeometryInstance?: boolean): THREE.Mesh;
    private _createMesh;
    private _getComponentMeshId;
    setMaterial(mesh: THREE.Mesh, materialId: string, type?: KernelEnum): void;
    loadMaterial(materialId: string, width?: number, height?: number): Promise<THREE.Material>;
    loadTextures(rapiMaterial: RapiMaterial, material: THREE.MeshPhysicalMaterial, width?: number, height?: number): Promise<void>;
}
