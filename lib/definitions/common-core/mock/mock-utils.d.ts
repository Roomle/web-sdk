/**
 * usage: await sleep(1);
 * will block execution only in this thread
 * @param ms
 */
export declare function sleep(ms: number): Promise<{}>;
export declare function muteConsole(): void;
export declare function unmuteConsole(): void;
/**
 * Returns number of occurrences
 * @param objects
 * @param type
 */
export declare function numberOfObjectsWithType(objects: THREE.Object3D[], type: string): number;
