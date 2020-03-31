import { KernelEnum } from '../../../typings/kernel';
import MeshGenerator from '../../../common-core/src/webgl/mesh-generator';
import { BaseMaterial } from '../../../typings/planner-kernel-container';
export declare const enum PLANNER_RENDER_ORDER {
    WALL = 5
}
export default class PlannerMeshGenerator extends MeshGenerator {
    private _wallMeshes;
    private _defaultMaterial;
    constructor(creator: string);
    generateGeometry(meshId: string, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array, newGeometryInstance?: boolean): THREE.Geometry;
    generateMesh(meshId: string, material: BaseMaterial | string, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array, type?: KernelEnum, newGeometryInstance?: boolean): THREE.Mesh;
    setMaterial(mesh: THREE.Mesh, material: BaseMaterial | string, type?: KernelEnum): void;
    maxAnisotropy: number;
    private _checkWallMaterial;
    clear(): void;
    clearWallMeshes(): void;
    readonly wallMeshes: import("three").Mesh[];
}
