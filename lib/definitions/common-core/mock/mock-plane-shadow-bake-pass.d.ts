import { BakedShadowParams, PlaneShadowBakePass } from '../../typings/pixotron';
export default class MockPlaneShadowBakePass implements PlaneShadowBakePass {
    enable: boolean;
    private _params;
    constructor(params?: BakedShadowParams);
    getShadowPlane(): THREE.Mesh;
    startBake(renderer: THREE.WebGLRenderer, scene: THREE.Scene, camera: THREE.Camera): void;
}
