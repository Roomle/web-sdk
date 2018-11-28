export declare const enum DI_TYPE {
    GLOBAL = 0,
    CONTEXT = 1,
    NEW = 2
}
export default class Container {
    private _context;
    private _lookups;
    private _singletons;
    getContext(name: string): string;
    addDependencyInjectionAssignments(injections: DependencyInjectionAssignment[]): void;
    lookup<T>(specifier: string, context?: string): T;
    cleanUp(context?: string): void;
}
export declare class DependencyInjectionAssignment {
    className: string;
    classDefinition: any;
    type: DI_TYPE;
    constructor(className: string, classDefinition: any, type?: DI_TYPE);
}
