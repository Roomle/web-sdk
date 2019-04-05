import '../../../typings/global-definitions';
import RoomlePlanner from '../roomle-planner';
import RoomleGLBViewer from '../../../glb-viewer-core/src/roomle-glb-viewer';
import RoomleConfigurator from '../../../configurator-core/src/roomle-configurator';
declare global {
    interface Window {
        RoomleCore: any;
        ConfiguratorKernel: any;
        RoomlePlanner: RoomlePlanner;
        RoomleGLBViewer: RoomleGLBViewer;
        RoomleConfigurator: RoomleConfigurator;
    }
}
