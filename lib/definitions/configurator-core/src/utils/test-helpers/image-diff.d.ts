import { Configurator } from '../../configurator';
import { Base64String } from '../../../../typings/rapi-types';
export interface ImageDiffResult {
    getImageDataUrl: () => Base64String;
    rawMisMatchPercentage: number;
}
export default class ImageDiff {
    private static _compare;
    static compare(app: Configurator, image1Url: string, image2Url: string): Promise<ImageDiffResult>;
}
