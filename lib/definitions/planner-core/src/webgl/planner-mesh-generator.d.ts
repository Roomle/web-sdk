import { KernelEnum } from '../../../typings/kernel';
import MeshGenerator from '../../../common-core/src/webgl/mesh-generator';
export declare const enum PLANNER_RENDER_ORDER {
    WALL = 5
}
export default class PlannerMeshGenerator extends MeshGenerator {
    private _wallMeshes;
    private _standardFloorMaterial;
    private _standardWallMaterial;
    private _materialLoaded;
    constructor(creator: string);
    generateGeometry(meshId: string, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): THREE.Geometry;
    generateMesh(meshId: string, material: any, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array, type?: KernelEnum, newGeometryInstance?: boolean): THREE.Mesh;
    setMaterial(mesh: THREE.Mesh, material: any, type?: KernelEnum): void;
    private _assignRGB;
    private _assignItem;
    maxAnisotrophy: number;
    private _checkWallMaterial;
    clear(): void;
    clearWallMeshes(): void;
    readonly wallMeshes: import("three/three-core").Mesh[];
    setMaterialLoadedListener(fun: () => void): void;
    removeMaterialLodedListener(): void;
}
