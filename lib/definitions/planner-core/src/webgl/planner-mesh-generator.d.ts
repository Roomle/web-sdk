import { KernelEnum } from '../../../typings/kernel';
import MeshGenerator from '../../../common-core/src/webgl/mesh-generator';
export default class PlannerMeshGenerator extends MeshGenerator {
    private _wallMeshes;
    private _standardFloorMaterial;
    private _standardWallMaterial;
    constructor();
    generateMesh(meshId: string, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array, type?: KernelEnum): THREE.Mesh;
    private _setMaterial;
    private _assignRGB;
    private _assignItem;
    private _assignMaterial;
    changeMaterialOfMesh(mesh: THREE.Mesh, material: THREE.Material): void;
    maxAnisotrophy: number;
    private _checkWallMaterial;
    clear(): void;
    clearWallMeshes(): void;
    readonly wallMeshes: import("three/three-core").Mesh[];
    private _onBeforeRender;
}
