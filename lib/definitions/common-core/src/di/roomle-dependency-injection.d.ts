import { DependencyInjectionAssignment } from './container';
export default class RoomleDependencyInjection {
    static setup(injectables: DependencyInjectionAssignment[]): void;
    static lookup<T>(specifier: string, context?: string): T;
    static getContext(name: string): string;
    static cleanUp(context?: string): void;
    static addToContainer(injectables: DependencyInjectionAssignment[]): void;
}
