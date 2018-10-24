import { ConfigurationString } from '../../../typings/rapi-types';
export default class MemoryManager {
    private _configurationStringSet;
    private _singleLoadCounter;
    constructor();
    loadingConfigurationString(): void;
    loadingConfiguration(configurationId: ConfigurationString): void;
    shouldHardReset(): boolean;
    executedHardReset(): void;
}
