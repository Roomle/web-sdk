import GLBViewerSceneManager from '../webgl/glb-viewer-scene-manager';
import { RenderEntry } from '../roomle-glb-viewer';
export interface GLBRenderWorkerListener {
    onStart(count: number): void;
    onElementFinished(finishedElements: number): void;
    onFinished(zip: any): void;
}
export default class GLBRenderWorker {
    private _sceneManager;
    private _entries;
    private _resolve;
    private _reject;
    private _prefix;
    private _renderer;
    private _width;
    private _height;
    private _listeners;
    private _finishedItems;
    private _zip;
    constructor(sceneManager: GLBViewerSceneManager, width: number, height: number);
    addListener(listener: GLBRenderWorkerListener): void;
    removeListener(listener: GLBRenderWorkerListener): void;
    start(entries: RenderEntry[]): Promise<any>;
    private _transform;
    private _doNextEntry;
    private _processEntry;
    private _entryFinished;
}
