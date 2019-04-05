import { KernelEnum } from '../../../typings/kernel';
import MeshGenerator from '../../../common-core/src/webgl/mesh-generator';
export declare const enum PLANNER_RENDER_ORDER {
    WALL = 5
}
export default class PlannerMeshGenerator extends MeshGenerator {
    private _wallMeshes;
    private _standardFloorMaterial;
    private _standardWallMaterial;
    constructor(creator: string);
    generateMesh(meshId: string, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array, type?: KernelEnum, newGeometryInstance?: boolean): THREE.Mesh;
    setMaterial(mesh: THREE.Mesh, material: any, type?: KernelEnum): void;
    maxAnisotrophy: number;
    private _checkWallMaterial;
    clear(): void;
    clearWallMeshes(): void;
    readonly wallMeshes: import("three").Mesh[];
}
