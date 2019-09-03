import MockQualityAdapter from './mock-quality-adapter';
export default class MockManualQualityAdapter extends MockQualityAdapter implements MockManualQualityAdapter {
    addQuality(qualitySetting: any): void;
    setDesiredFps(desiredFps: number): void;
}
