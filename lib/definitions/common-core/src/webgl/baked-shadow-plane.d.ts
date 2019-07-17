export default class BakedShadowPlane {
    private _innerPlaneMesh;
    private _outerPlaneMesh;
    private _plane;
    private _innerSize;
    private _outerSize;
    constructor(size: number);
    getRootNode(): import("three").Object3D;
    getInnerPlane(): import("three").Mesh;
    getOuterPlane(): import("three").Mesh;
    updateSize(innerSize: number): void;
    private _updatePlane;
}
