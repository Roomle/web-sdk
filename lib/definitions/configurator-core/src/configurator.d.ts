import './utils/global-definitions';
import Main from '../../common-core/src/main';
import UiApi from './services/ui-api';
export declare class Configurator extends Main {
    protected setupDependencies(): void;
    protected cleanUpGlobals(): void;
    protected cleanUpDependencies(): void;
    protected setupGlobals(settings?: {
        [key: string]: any;
    }): void;
    getApi(): UiApi;
    protected bootFinished(): void;
}
