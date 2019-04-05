import '../../../typings/global-definitions';
import RoomleConfigurator from '../roomle-configurator';
declare global {
    interface Window {
        ConfiguratorKernel: any;
        RoomleConfigurator: RoomleConfigurator;
    }
}
