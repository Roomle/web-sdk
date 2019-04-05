import './utils/global-definitions';
import Main from '../../common-core/src/main';
import RoomleConfigurator from './roomle-configurator';
export declare class Configurator extends Main {
    private _configurator;
    protected setupDependencies(): void;
    protected cleanUpGlobals(): void;
    protected cleanUpDependencies(): void;
    protected setupGlobals(settings?: {
        [key: string]: any;
    }): void;
    getApi(): RoomleConfigurator;
    protected bootFinished(): void;
}
