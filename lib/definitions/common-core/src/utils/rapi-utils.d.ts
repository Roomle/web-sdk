import { KernelPart } from '../../../typings/kernel';
export declare const isIdItemId: (id: string) => boolean;
export declare const getCatalogIdFromItemOrConfigurationId: (id: string) => string;
export declare const kernelPartToPriceId: ({ articleNr, componentId }: KernelPart) => string;
