export default class Container {
    private _lookups;
    private _singletons;
    addDependencyInjectionAssignments(injections: DependencyInjectionAssignment[]): void;
    lookup<T>(specifier: string): T;
}
export declare class DependencyInjectionAssignment {
    className: string;
    classDefinition: any;
    singleton: boolean;
    constructor(className: string, classDefinition: any, singleton?: boolean);
}
