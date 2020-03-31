import { KernelPossibleChild } from '../../typings/kernel';
export declare const USM_KERNEL_POSSIBLE_CHILD: KernelPossibleChild;
export declare const USM_RAPI_COMPONENT: {
    externalIdentifier: string;
    catalog: string;
    id: string;
    type: string;
    detailType: string;
    configuration: string;
    active: boolean;
    updated: string;
    created: string;
    perspectiveImage: string;
    labels: string[];
    tags: string[];
    orderable: boolean;
    label: string;
    language: string;
    translations: {
        id: string;
        language: string;
        label: string;
        created: string;
        updated: string;
    }[];
    links: {
        tags: string;
    };
    version: number;
    __rapi_path__: string;
};
export declare const USM_ADDON_TAG: {
    id: string;
    global: boolean;
    created: string;
    updated: string;
    sort: number;
    links: {
        items: string;
        materials: string;
    };
    catalog: string;
    label: string;
    language: string;
    items: string[];
    hidden: boolean;
    __rapi_path__: string;
};
export declare const USM_PLAN_OBJECT: {
    id: number;
    bounds: {
        x: number;
        y: number;
        z: number;
    };
    boxForMeasurement: {
        origin: {
            x: number;
            y: number;
            z: number;
        };
        size: {
            x: number;
            y: number;
            z: number;
        };
    };
    rootPlanComponentId: number;
    parameters: ({
        key: string;
        label: string;
        type: string;
        unitType: string;
        value: string;
        enabled: boolean;
        validRange: {
            valueFrom: number;
            valueTo: number;
        };
        validGroups: string[];
        validValues: {
            value: string;
            label: string;
        }[];
        sort: number;
        highlighted: boolean;
        valuesAreEqual: boolean;
    } | {
        key: string;
        label: string;
        type: string;
        value: string;
        enabled: boolean;
        validRange: {
            valueFrom: number;
            valueTo: number;
        };
        validGroups: string[];
        validValues: string[];
        sort: number;
        highlighted: boolean;
        valuesAreEqual: boolean;
        unitType?: undefined;
    })[];
    parameterGroups: string[];
};
