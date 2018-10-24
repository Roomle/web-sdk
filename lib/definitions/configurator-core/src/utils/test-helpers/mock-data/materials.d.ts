import { RapiJsonBox, RapiMaterial } from '../../../../../typings/rapi-types';
interface RapiMaterialBox extends RapiJsonBox {
    materials: RapiMaterial[];
}
export default class MaterialsFactory {
    static create(amount: number): RapiJsonBox;
    static createByIds(ids: string[] | number[]): RapiMaterialBox;
    static idsToUrl(ids: string[] | number[]): string;
    static generateMaxIds(): string[];
}
export {};
