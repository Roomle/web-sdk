import { KernelComponent, KernelVector3 } from '../../typings/kernel';
export interface CommonConfiguratorKernelCallbackI {
    Editor3dComponentCreated(id: number, position: KernelVector3, eulerAngles: KernelVector3, parentObjectRuntimeId: number, isRootComponent: boolean): void;
    Editor3dAddBakedMesh(runtimeComponentId: number, materialId: string, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
    Editor3dAddNamedMesh(runtimeComponentId: number, meshId: string, materialId: string, transform: Float32Array, vertices: Int32Array, indices: Int32Array, uvCoords: Float32Array, normals: Float32Array): void;
    componentMetaUpdated(kernelComponent: KernelComponent): void;
    Editor3dBeginConstruction(componentId: number): void;
    Editor3dEndConstruction(id: number): void;
    Editor3dComponentDocked(componentId: number, parentId: number, componentPosition: KernelVector3, componentRotation: KernelVector3): void;
    Editor3dGeometryReady(id: number): void;
    Editor3dGeometryNotReady(id: number): void;
    componentDeleted(componentId: number): void;
    sceneCleared(): void;
}
