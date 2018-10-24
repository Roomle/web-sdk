import { Base64String } from '../../typings/rapi-types';
export interface CanvasOffset {
    left: number;
    top: number;
    right: number;
    bottom: number;
}
export interface Position2 {
    x: number;
    y: number;
}
export interface Position3 {
    x: number;
    y: number;
    z: number;
}
export interface Base64Image {
    image: Base64String;
    width: number;
    height: number;
    blob: Blob;
}
