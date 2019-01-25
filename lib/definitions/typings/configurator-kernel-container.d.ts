import { KernelDockPairToPoint, KernelDockPairToLine, KernelComponent, KernelVariable, KernelRange, KernelParameterValue, KernelParameter, KernelParameterGroup, KernelPartListParameter, KernelConfiguration, KernelPart, KernelPossibleChild, KernelAddOnSpot, KernelParamKeyValuePair, KernelVariant, ConfiguratorKernelClass } from './kernel';
import { PlanObjectList } from './planner-kernel-container';
declare class DockPairToPointArray extends EmsArray<KernelDockPairToPoint> {
}
declare class DockPairToLineArray extends EmsArray<KernelDockPairToLine> {
}
declare class ComponentArray extends EmsArray<KernelComponent> {
}
declare const enum Type {
    UNKNOWN = 0,
    INTEGRAL = 1,
    DECIMAL = 2,
    STRING = 3,
    MATERIAL = 4
}
declare const enum UnitType {
    LENGTH = 0,
    AREA = 1,
    ANGLE = 2,
    COUNT = 3
}
declare class VariableArray extends EmsArray<KernelVariable> {
}
declare class RangeArray extends EmsArray<KernelRange> {
}
declare class ParameterValueArray extends EmsArray<KernelParameterValue> {
}
declare class ParameterArray extends EmsArray<KernelParameter> {
}
declare class ParameterGroupArray extends EmsArray<KernelParameterGroup> {
}
declare class PartListParameterArray extends EmsArray<KernelPartListParameter> {
}
declare class ConfigurationArray extends EmsArray<KernelConfiguration> {
}
declare class PartArray extends EmsArray<KernelPart> {
}
declare class PossibleChildArray extends EmsArray<KernelPossibleChild> {
}
declare class AddOnSpotArray extends EmsArray<KernelAddOnSpot> {
}
declare class ParamKeyValuePairArray extends EmsArray<KernelParamKeyValuePair> {
}
declare class VariantArray extends EmsArray<KernelVariant> {
}
declare class IntArray extends EmsArray<number> {
}
declare const enum Unit {
    InchFeet = 0,
    MM = 1,
    CM = 2
}
declare const enum UnitStringType {
    NoUnitString = 0,
    LongUnitString = 1,
    ShortUnitString = 2
}
declare class UnitMeasureFormatter {
    init(mmLabel: string, cmLabel: string, ftShortLabel: string, ftLongLabel: string, inchShortLabel: string, inchLongLabel: string, sqMLabel: string, sqftLabel: string, showExactValue: boolean, maxPrecision: number): void;
    showExactValues(shouldeI: boolean): void;
    formatMMValueToUnitString(aValue: number, aUnit: Unit, aStringType: UnitStringType): string;
    formatMMValueWithReqMaxLength(aValue: number, aUnit: Unit, reqMaxSize: number): string;
    parseMMValueFromUnitString(aString: string, aUnit: Unit): number;
    formatSquareMMValueToUnitString(aValue: number, aUnit: Unit): string;
    parseSquareMMValueFromUnitString(aString: string, aUnit: Unit): number;
    isParseableUnitString(aString: string, aUnit: Unit): boolean;
    parseNumber(aString: string): number;
    formatNumber(aValue: number, digit: number): string;
    isParseableNumber(aString: string): boolean;
}
export interface ConfiguratorKernelContainer {
    DockPairToPointArray: DockPairToPointArray;
    DockPairToLineArray: DockPairToLineArray;
    ComponentArray: ComponentArray;
    Type: Type;
    UnitType: UnitType;
    VariableArray: VariableArray;
    RangeArray: RangeArray;
    ParameterValueArray: ParameterValueArray;
    ParameterArray: ParameterArray;
    ParameterGroupArray: ParameterGroupArray;
    PartListParameterArray: PartListParameterArray;
    ConfigurationArray: ConfigurationArray;
    PartArray: PartArray;
    PossibleChildArray: PossibleChildArray;
    AddOnSpotArray: AddOnSpotArray;
    PlanObjectList: PlanObjectList;
    ParamKeyValuePairArray: ParamKeyValuePairArray;
    VariantArray: VariantArray;
    IntArray: IntArray;
    Kernel: ConfiguratorKernelClass;
    Unit: Unit;
    UnitStringType: UnitStringType;
    toUnit: (enumIndex: number) => Unit;
    toUnitFormat: (enumIndex: number) => UnitStringType;
    UnitMeasureFormatter: UnitMeasureFormatter;
    registerConfiguratorCallback: (callbacksObject: any) => void;
    unregisterConfiguratorCallback: (callbacksObject: any) => void;
}
export {};
