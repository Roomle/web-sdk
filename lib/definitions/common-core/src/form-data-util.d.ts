import { Base64String } from '../../typings/rapi-types';
interface ImagesTypes {
    JPG: string;
    JPEG: string;
    PNG: string;
    GIF: string;
    [key: string]: string;
}
export declare const IMAGE_FORMATS: ImagesTypes;
export default class FormDataUtil {
    private _base64toBlob;
    private _createFormData;
    create(base64: Base64String, hash: string, fileExtension: string, formfield: string): FormData;
}
export {};
