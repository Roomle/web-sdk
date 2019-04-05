import AbstractParameter from '../../-utils/AbstractParameter';
export declare const MAX_MATERIALS_IN_OVERVIEW = 14;
export default class PMaterial extends AbstractParameter {
    static lastChangeWasInDetailView: boolean;
    static lastSelectedMaterialInDetailView: any;
    private _hadUserChange;
    state: {
        filter: any;
        groups: any[];
    };
    constructor(options: object);
    private _updateGroups;
    private _setGroupsEmpty;
    requestShowDetails(): void;
    readonly filteredGroups: any[];
    readonly amountAll: number;
    readonly hasShowAll: boolean;
    readonly showAllLabel: any;
    readonly shouldShowFilter: boolean;
    readonly isOverview: boolean;
    filterGroups(group: any): void;
    changeMaterialParam(material: RapiMaterial): void;
    private _wasLastChangeFromOutside;
    private _setState;
}
