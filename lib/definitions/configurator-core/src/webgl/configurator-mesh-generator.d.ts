import MeshGenerator from '../../../common-core/src/webgl/mesh-generator';
import { RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
export default class ConfiguratorMeshGenerator extends MeshGenerator {
    generateMesh(meshId: string, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): THREE.Mesh;
    assignMaterial(runtimeComponent: RoomleComponent, meshId: number, materialId: string): Promise<void>;
}
