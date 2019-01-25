import { PreviewComponent, RoomleComponent } from '../../../../common-core/src/webgl/roomle-component-factory';
export default class SceneUtils {
    static getRoomleComponent(): RoomleComponent;
    static getPreviewComponentOfRoomleComponent(): PreviewComponent;
    static getScreenCoordsOfComponent(rmlChild: RoomleComponent): any;
    static getCurrentFullPartList(): any;
    static getHashOfConfiguration(id: number): any;
}
