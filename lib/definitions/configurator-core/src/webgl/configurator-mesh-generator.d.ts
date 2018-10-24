import MeshGenerator from '../../../common-core/src/webgl/mesh-generator';
export default class ConfiguratorMeshGenerator extends MeshGenerator {
    generateMesh(meshId: string, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): THREE.Mesh;
    clear(): void;
}
