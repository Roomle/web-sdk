import Service from './-utils/service';
interface ConfigurationMinimalData {
    id: RapiId;
    perspectiveImage: AssetUrl;
    label: string;
}
export default class LocalStorage extends Service {
    private readonly _localStorage;
    private _indexOf;
    private _saveConfigurations;
    isAvailable(): boolean;
    getConfigurations(): ConfigurationMinimalData[];
    saveConfiguration(configuration: RapiConfiguration): void;
    removeConfiguration(id: RapiId): void;
}
export {};
