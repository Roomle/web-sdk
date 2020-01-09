export declare class CubePacker {
    private _cubeTexture;
    private _cubeUVRenderTarget;
    private _camera;
    private _scene;
    private _objects;
    private _numLods;
    constructor(cubeTexture: THREE.CubeTexture);
    getRenderTarget(): import("three").WebGLRenderTarget;
    update(renderer: THREE.WebGLRenderer): void;
    private getShader;
    dispose(): void;
}
