import { KernelParameter, KernelParameterGroup, KernelPossibleChild } from '../../../typings/kernel';
import { PARAMETER_UPDATE_TYPE } from '../roomle-configurator';
import { KernelAccessCallbackI } from '../../../common-core/src/kernel-access-callback';
import { Context } from '../../../common-core/src/di/context';
export interface ConfiguratorKernelAccessCallbackI extends KernelAccessCallbackI {
    updatePossibleChildren(elementId: number, children: KernelPossibleChild[], parameterUpdateType?: PARAMETER_UPDATE_TYPE): void;
    updateParameters(parameters: KernelParameter[], parameterGroups: KernelParameterGroup[], elementId: number | number[], parameterUpdateType: PARAMETER_UPDATE_TYPE): void;
}
export default class ConfiguratorKernelAccessCallback implements Context, ConfiguratorKernelAccessCallbackI {
    _creator_: string;
    private _callbackListener;
    constructor(creator: string);
    addListener(listener: ConfiguratorKernelAccessCallbackI): void;
    removeListener(listener: ConfiguratorKernelAccessCallbackI): void;
    isReady(): void;
    updatePossibleChildren(elementId: number, children: KernelPossibleChild[], parameterUpdateType?: PARAMETER_UPDATE_TYPE): void;
    updateParameters(parameters: KernelParameter[], parameterGroups: KernelParameterGroup[], elementId: number | number[], parameterUpdateType: PARAMETER_UPDATE_TYPE): void;
    loadError(error?: any): void;
}
