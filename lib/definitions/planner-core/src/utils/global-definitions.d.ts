import '../../../typings/global-definitions';
import RoomlePlanner from '../roomle-planner';
import RoomleGLBViewer from '../../../glb-viewer-core/src/roomle-glb-viewer';
import { Configurator } from '../../../configurator-core/src/configurator';
declare global {
    interface Window {
        RoomleCore: any;
        ConfiguratorKernel: any;
        RoomlePlanner: RoomlePlanner;
        RoomleGLBViewer: RoomleGLBViewer;
        RoomleConfigurator: Configurator;
    }
}
