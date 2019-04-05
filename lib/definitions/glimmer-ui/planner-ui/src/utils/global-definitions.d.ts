import { RoomlePlanner } from './shims';
declare global {
    interface Window {
        RoomlePlanner: RoomlePlanner;
    }
}
