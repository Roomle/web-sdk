export default class TextWithBackground extends THREE.Object3D {
    private _cacheHolder;
    private _position;
    private _dimensioningType;
    private _label;
    private _parameters;
    private _text;
    private _textGeometry;
    private _plane;
    topDown: boolean;
    private _planeMaterial;
    private _textMaterial;
    private _cameraPosition;
    constructor(font: THREE.Font);
    private _initMaterials;
    private _init;
    update(position: THREE.Vector3, dimensioningType: number, label: string, cameraPosition: THREE.Vector3): void;
    private _update;
    private _updateText;
    private _getXSign;
    dispose(): void;
}
