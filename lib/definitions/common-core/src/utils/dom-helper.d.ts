export declare const CANVAS_ID: {
    HSC: string;
    HSP: string;
    GLB: string;
};
export default class DomHelper {
    private _width;
    private _height;
    private _element;
    private _container;
    private _canvas;
    readonly element: HTMLElement;
    canvas: HTMLCanvasElement;
    setDomElement(element: HTMLElement): void;
    private _setClientDimensions;
    getClientDimensions(): THREE.Vector2;
    cleanUp(): void;
}
