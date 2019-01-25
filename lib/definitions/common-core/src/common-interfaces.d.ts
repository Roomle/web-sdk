import { Base64String } from '../../typings/rapi-types';
/**
 * Used to set the camera offset of the canvas, for example this is useful
 * if you have UI elements which should not overlap with the product you
 * want to show
 *
 * Example:
 * ```
 * {
 *     left: 0.1, // 10% offset from left
 *     top: 0.2, // 20% offset from top
 *     right: 0.85, // 15% offset from right
 *     bottom: 0.95 // 5% offset from bottom
 * }
 * ```
 */
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
