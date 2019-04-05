import GenericEventHandler from './generic-event-handler';
export declare const enum INTERNAL_EVENTS {
    OPEN_ADDONS_BECAUSE_OF_DEFAULT_CHILD = 0,
    ON_LOAD_ADDON_IMAGES = 1
}
export default class EventHandler extends GenericEventHandler<INTERNAL_EVENTS> {
}
