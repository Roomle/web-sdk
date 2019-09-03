import EnvironmentLoader from '../src/services/environment-loader';
export default class MockEnvironmentLoader extends EnvironmentLoader {
    getEnvironmentMap(): Promise<THREE.Texture>;
    setEnvMap(): void;
}
