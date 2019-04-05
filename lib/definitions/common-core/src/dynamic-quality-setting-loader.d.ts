import { Pixotron } from '../../typings/pixotron';
export interface SAOPass {
    enabled?: boolean;
    smoothTransition?: boolean;
    occlusionWorldRadius?: number;
    intensity?: number;
    bias?: number;
    numSamples?: number;
}
export interface ShadowPass {
    enabled?: boolean;
    smoothTransition?: boolean;
    enableAccumulation?: boolean;
    shadowRadius?: number;
    shadowBiasMultiplier?: number;
    numSamples?: number;
}
export interface GroundShadow {
    enable?: boolean;
    smoothTransition?: boolean;
    numSamples?: number;
    numSamplesPerFrame?: number;
}
export interface QualitySetting {
    enableAA?: boolean;
    SAOPass?: SAOPass;
    shadowPass?: ShadowPass;
    groundShadow?: GroundShadow;
}
export default class DynamicQualitySettingLoader {
    set(pixotron: Pixotron, qualitySetting: QualitySetting): void;
    private _setSAOPass;
    private _setShadowPass;
    private _setGroundShadow;
}
