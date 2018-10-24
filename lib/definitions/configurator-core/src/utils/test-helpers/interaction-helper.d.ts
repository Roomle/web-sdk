import { RoomleComponent } from '../../../../common-core/src/webgl/roomle-component-factory';
import { UiPossibleChild } from '../../../../typings/kernel';
export declare const CLICK_INDICATOR = "rml-click-indicator";
export declare const DRAG_INDICATOR = "dragIndicator";
export declare const enum SELECTORS {
    FIRST_ROOMLE_COMPONENT = 0,
    FIRST_PREVIEW_OF_FIRST_ROOMLE_COMPONENT = 1
}
export default class InteractionHelper {
    static click(objectIn3D: RoomleComponent, debug?: boolean): Promise<{}>;
    static drag(child: UiPossibleChild, start: {
        x: number;
        y: number;
    }): Promise<{}>;
}
