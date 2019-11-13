import { Base64Image } from '../../../common-core/src/common-interfaces';
export interface CameraTarget {
    center: THREE.Vector3;
    bounds: THREE.Vector3;
    diagonal: number;
}
export default class ConfiguratorImageRenderer {
    static preparePerspectiveImage(scene: THREE.Scene, camera: THREE.PerspectiveCamera, cameraTarget: CameraTarget, size?: number): Promise<Base64Image>;
    private static _placeCameraForPerspectiveImage;
    static prepareTopImage(scene: THREE.Scene, uiScene: THREE.Scene, cameraTarget: CameraTarget, showDimensions?: boolean): Promise<Base64Image>;
}
