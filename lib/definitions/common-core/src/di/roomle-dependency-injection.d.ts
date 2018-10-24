import { DependencyInjectionAssignment } from './container';
export default class RoomleDependencyInjection {
    static setup(injectables: DependencyInjectionAssignment[]): void;
    static lookup<T>(specifier: string): T;
    static addToContainer(injectables: DependencyInjectionAssignment[]): void;
}
