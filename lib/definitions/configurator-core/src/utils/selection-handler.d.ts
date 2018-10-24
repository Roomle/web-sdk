import { RoomleComponent } from '../../../common-core/src/webgl/roomle-component-factory';
import EventDispatcher from './event-dispatcher';
export declare const enum SELECTION_MODE {
    STANDARD = "standard",
    MULTISELECT = "multiselect"
}
export declare const enum SELECTION_EVENT {
    SELECT_COMPONENT = 0,
    DESELECT_COMPONENT = 1
}
export declare class SelectionHandlerEvent {
    component: RoomleComponent;
    resetCamera: boolean;
    constructor(data: {
        component?: RoomleComponent;
        resetCamera?: boolean;
    });
}
export default class SelectionHandler extends EventDispatcher<SelectionHandlerEvent> {
    private _selectionMode;
    protected _selectedComponents: Map<number, RoomleComponent>;
    check(component: RoomleComponent): void;
    cancelSelection(): void;
    private _checkStandard;
    private _checkMulti;
    setSelectionMode(mode: SELECTION_MODE): void;
    getSelectionMode(): SELECTION_MODE;
    hasSelection(): boolean;
    getSelectedRuntimeComponentIds(): number[];
}
