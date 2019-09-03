import MockQualityAdapter from './mock-quality-adapter';
import { AutoQualityAdapter } from '../../typings/pixotron';
export default class MockAutoQualityAdapter extends MockQualityAdapter implements AutoQualityAdapter {
    addQuality(qualitySetting: any): void;
    setDesiredFps(desiredFps: number): void;
}
