import { CanvasOffset } from '../common-interfaces';
import { KernelCube, KernelVector3 } from '../../../typings/kernel';
export interface RoomleComponent extends THREE.Object3D {
    roomleId: number;
    parentObjectId: number;
    meshes: THREE.Mesh[];
    boundingBox: THREE.Box3;
    boundingBoxMesh: THREE.Mesh;
    loadingMesh: THREE.Mesh;
    roomlePosition: KernelVector3;
    roomleRotation: KernelVector3;
    hash: string;
    geometryChanged: boolean;
    replaceMeshes(meshes: THREE.Mesh[]): void;
    addMesh(mesh: THREE.Mesh, transform?: Float32Array): void;
    removeMesh(mesh: THREE.Mesh): void;
    removeAllMeshes(): void;
    select(): void;
    deselect(): void;
    hoverOn(): void;
    hoverOff(): void;
    loading(): void;
    computeBoundingBox(boxForMeasurements?: KernelCube, useMeshes?: boolean): void;
    removeFromParent(): void;
    recursiveMeshes(): THREE.Mesh[];
    isChild(componentId: number): boolean;
    clear(recursive?: boolean): void;
    getKernelPosition(newParent: RoomleComponent): KernelVector3;
}
export interface StaticComponent extends RoomleComponent {
    glbUrl: string;
}
export interface PreviewComponent extends RoomleComponent {
    parentId: number;
    parentDockId: number;
    childId: number;
    childDockId: number;
    stringId: string;
    receivedPointAssociation: boolean;
    clonePreview(numberOfDuplication: number): PreviewComponent;
    preparePreview(): void;
}
export interface PreviewLineComponent extends PreviewComponent {
    lineFrom: THREE.Vector3;
    lineTo: THREE.Vector3;
    positionFrom: THREE.Vector3;
    positionTo: THREE.Vector3;
    roomleLineFrom: KernelVector3;
    roomleLineTo: KernelVector3;
    roomlePositionFrom: KernelVector3;
    roomlePositionTo: KernelVector3;
    docklineRotation: THREE.Euler;
    lineMesh: THREE.Mesh;
    boundingLineMesh: THREE.Mesh;
    clonePreviewLine(numberOfDuplication: number): PreviewLineComponent;
    getPositionForIntersectionPoint(intersectionPoint: THREE.Vector3): THREE.Vector3;
    updatePreviewPosition(intersectionPoint: THREE.Vector3): void;
    hideSelectionLine(): void;
}
export interface PerspectiveOffsetCamera extends THREE.PerspectiveCamera {
    offset: CanvasOffset;
}
export interface RoomleComponentFactory {
    create(id: number, position: KernelVector3, eulerAngles: KernelVector3, parentObjectId: number): RoomleComponent;
    createStatic(id: number, url: string): StaticComponent;
    createPreview(id: number, parentObjectId: number): PreviewComponent;
    createPreviewLine(previewComponent: PreviewComponent): PreviewLineComponent;
    isPreview(obj: RoomleComponent): boolean;
    isPreviewLine(obj: RoomleComponent): boolean;
    createCamera(fov: number, aspect: number, near: number, far: number, offset?: CanvasOffset): PerspectiveOffsetCamera;
}
export default function (): {
    create: (id: number, position: KernelVector3, rotation: KernelVector3, parentObjectId: number) => RoomleComponent;
    createPreview: (id: number, parentObjectId: number) => PreviewComponent;
    createStatic: (id: number, url: string) => StaticComponent;
    createPreviewLine: (previewComponent: PreviewComponent) => PreviewLineComponent;
    isPreview: (obj: RoomleComponent) => boolean;
    isPreviewLine: (obj: RoomleComponent) => boolean;
    createCamera: (fov: number, aspect: number, near: number, far: number, offset?: CanvasOffset) => PerspectiveOffsetCamera;
};
