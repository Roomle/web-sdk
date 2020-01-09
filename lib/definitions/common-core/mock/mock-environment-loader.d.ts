import EnvironmentLoader from '../src/services/environment-loader';
export default class MockEnvironmentLoader extends EnvironmentLoader {
    getEnvironmentMap(): THREE.Texture;
    protected _loadHDREnvMap(envMapFile: string): Promise<void>;
}
