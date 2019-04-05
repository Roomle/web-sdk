import { LifeCycleCallbacks } from '../life-cycle-manager';
import { Context } from '../di/context';
export declare const CANVAS_ID: {
    HSC: string;
    HSP: string;
    GLB: string;
    RMV: string;
};
export declare const CONTAINER_CSS_CLASS = "rml-threejs-canvas-container";
export default class DomHelper implements LifeCycleCallbacks, Context {
    _creator_: string;
    private _lifeCycleManager;
    private _element;
    private _container;
    readonly element: HTMLElement;
    constructor(creator: string);
    setDomElement(element: HTMLElement): void;
    getClientDimensions(): THREE.Vector2;
    private _removeDomElement;
    reset(): void;
    pause(): void;
    resume(): void;
    destroy(): void;
}
