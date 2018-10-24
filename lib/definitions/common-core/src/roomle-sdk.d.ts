import { Configurator } from '../../configurator-core/src/configurator';
import { Planner } from '../../planner-core/src/planner';
import { GlbViewer } from '../../glb-viewer-core/src/glb-viewer';
export default class RoomleSdk {
    static getConfigurator(): Promise<Configurator>;
    static getPlanner(): Promise<Planner>;
    static getGlbViewer(): Promise<GlbViewer>;
}
