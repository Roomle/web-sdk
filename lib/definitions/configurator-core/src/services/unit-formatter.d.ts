import { KernelPartListParameter, UiKernelParameter, KernelParameter } from '../../../typings/kernel';
export default class UnitFormatter {
    private _formatter;
    private _actualUnit;
    private _actualUnitStringType;
    init(kernelContainer: any, kernelInstance: any): void;
    private _initActualUnit;
    private _initActualUnitStringType;
    private _isFormatterReady;
    formatAngleValueToUnitString(value: number, parameter: KernelParameter): string;
    parseAngleValueFromUnitString(rotation: string): string;
    parseValue(value: string, parameter: KernelParameter): string | number;
    formatValueToUnitString(value: number, parameter: KernelParameter): string | number;
    isParseableNumber(aString: string): boolean;
    isParseableUnitString(aString: string, parameter: KernelParameter): boolean;
    parseMMValueFromUnitString(aString: string, unitType: string): number;
    parseNumber(aString: string): number;
    formatNumber(aValue: number, digit?: number): string;
    formatSquareMMValueToUnitString(aValue: number): string;
    formatMMValueToUnitString(aValue: number, unitType?: string): string;
    formatMMValueWithReqMaxLength(aValue: number, reqMaxSize: number): string;
    private _formatParameterValue;
    formatPartListParameter(parameter: KernelPartListParameter): void;
    formatParameter(parameter: UiKernelParameter): void;
}
