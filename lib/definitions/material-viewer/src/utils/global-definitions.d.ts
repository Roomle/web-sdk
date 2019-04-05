import '../../../typings/global-definitions';
import RoomleMaterialViewer from '../roomle-material-viewer';
declare global {
    interface Window {
        RoomleMaterialViewer: RoomleMaterialViewer;
    }
}
