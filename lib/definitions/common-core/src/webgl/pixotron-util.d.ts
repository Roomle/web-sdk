import { Pixotron } from '../../../typings/pixotron';
export default class PixotronUtil {
    private _pixotron;
    private _sceneBoundingSphere;
    constructor(pixotron: Pixotron);
    getPixotronInstance(params?: any): Pixotron;
    showGUI(): void;
    updateBounds(bounds: THREE.Sphere): void;
    private _getSaoRadius;
    private _adjustSaoRadius;
    private _adjustSaoBias;
    private _getMinSaoRadius;
    private _getMaxSaoRadius;
    private _getMinSaoBias;
    private _getMaxSaoBias;
}
