import { Position2 } from '../common-interfaces';
export declare const toRadiant: (degree: number) => number;
export declare const toDegrees: (radians: number) => number;
export declare const getIdealDistance: (width: number, height: number, depth: number, fov: number, screenWidth: number, screenHeight: number) => number;
export declare const round: (x: number) => number;
export declare const getDelta: (v1: Position2, v2: Position2) => number;
export declare const getAngle: (v1: Position2, v2: Position2) => number;
export declare const to360Degrees: (radians: number) => number;
export declare const angleToKernelRotation: (angle: number) => number;
