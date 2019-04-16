import Service from './-utils/service';
export interface ConfigurationMinimalData {
    id: RapiId;
    perspectiveImage: AssetUrl;
    label: string;
    scopedToDomain: string;
}
export default class LocalStorage extends Service {
    private readonly _localStorage;
    private _indexOf;
    private _saveConfigurations;
    private _getCurrentDomain;
    isAvailable(): boolean;
    getConfigurations(): ConfigurationMinimalData[];
    saveConfiguration(configuration: RapiConfiguration): void;
    removeConfiguration(id: RapiId): void;
}
