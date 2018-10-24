import '../../../typings/global-definitions';
import RoomleGLBViewer from '../../../glb-viewer-core/src/roomle-glb-viewer';
declare global {
    interface Window {
        RoomleGLBViewer: RoomleGLBViewer;
    }
}
