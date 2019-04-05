import Component from '@glimmer/component';
export default class CameraSwitches extends Component {
    private _plannerCore;
    state: {
        is2d: boolean;
        is3d: boolean;
        isFp: boolean;
    };
    private _onCameraChanged;
    private _resetState;
    didInsertElement(): void;
    switch2D(): void;
    switch3D(): void;
    switchToFirstPerson(): void;
}
