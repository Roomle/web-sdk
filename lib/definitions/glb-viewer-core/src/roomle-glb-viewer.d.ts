import { Base64Image, Position3 } from '../../common-core/src/common-interfaces';
import { GlobalAPI } from '../../common-core/src/main';
interface RenderCameraInformation {
    fieldOfView: number;
    rotation: Position3;
    position: Position3;
}
export declare interface RenderEntry {
    path: string;
    camera: RenderCameraInformation;
}
export default class RoomleGLBViewer implements GlobalAPI {
    private _domHelper;
    private _scriptLoader;
    private _sceneManager;
    init(element: HTMLElement): Promise<void>;
    private _initPromiseCallback;
    enableHD(): Promise<void>;
    loadGLB(url: string): Promise<void>;
    preparePerspectiveImage(): Promise<Base64Image>;
    processRenderList(jsonString: string, width?: number, height?: number): void;
    updateSize(): void;
}
export {};
