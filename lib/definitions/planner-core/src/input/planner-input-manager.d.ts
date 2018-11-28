import InputManager, { INPUT_EVENT_TYPE } from '../../../common-core/src/input/input-manager';
export default class PlannerInputManager extends InputManager {
    protected _canDrag(type: INPUT_EVENT_TYPE): boolean;
}
