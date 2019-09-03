import '../../../typings/global-definitions';
import RoomleGLBViewer from '../../../glb-viewer-core/src/roomle-glb-viewer';
import RoomleConfigurator from '../../../configurator-core/src/roomle-configurator';
import RoomlePlanner from '../roomle-planner';
declare global {
    interface Window {
        RoomleCore: any;
        ConfiguratorKernel: any;
        RoomlePlanner: RoomlePlanner;
        RoomleGLBViewer: RoomleGLBViewer;
        RoomleConfigurator: RoomleConfigurator;
    }
}
