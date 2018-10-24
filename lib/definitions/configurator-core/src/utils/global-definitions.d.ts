import '../../../typings/global-definitions';
import { Configurator } from '../configurator';
declare global {
    interface Window {
        ConfiguratorKernel: any;
        RoomleConfigurator: Configurator;
    }
}
