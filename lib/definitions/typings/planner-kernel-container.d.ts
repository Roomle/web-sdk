import { KernelVector2f, KernelDockPairToPoint, KernelDockPairToLine, KernelComponent, KernelVariable, KernelRange, KernelParameterValue, KernelParameter, KernelParameterGroup, KernelPartListParameter, KernelConfiguration, KernelPart, KernelPossibleChild, KernelAddOnSpot, KernelParamKeyValuePair, KernelVariant, ConfiguratorKernelClass, KernelVector3f, KernelEnum } from './kernel';
import { PlanInteractionHandler } from './planner';
import { EmsList, EmsSet, EmsArray } from './ems';
export declare class PlanObjectList extends EmsList<PlanObjectPtr> {
}
declare class ConstructionObjectSet extends EmsSet<ConstructionObject> {
}
declare class PlanObjectObjectSet extends EmsSet<PlanObjectPtr> {
}
declare class ExternalReference {
    getJsObject(): any;
    setJsObject(jsObject: any): void;
    getReference(): number;
    setReference(reference: number): void;
    setSelfPtr(ptr: any): void;
    getSelfPtrRef(): any;
    clearSelfRef(): void;
}
declare class EMSReference {
    jsObject: any;
    static ptrFromRaw(ptr: number): number;
    getVoidReference(): number;
    setVoidReference(reference: number): void;
    getSelfPtrRef(): number;
    setSelfPtr(ptr: number): void;
    clearSelfReference(): void;
}
declare abstract class AbstractModel {
    extRef: number;
    abstract getId(): number;
}
declare class AbstractModelWrapper extends AbstractModel {
    getId(): number;
}
declare abstract class PlanElement extends AbstractModelWrapper {
    isLocked: boolean;
    isValid: boolean;
    getType(): PlanElementType;
    getCenter(): KernelVector3f;
}
declare abstract class ObjectGroup extends PlanElement {
    getObjects(): PlanObjectPtr;
}
declare abstract class PlanText extends PlanElement {
    getText(): string;
}
declare abstract class PlanImage extends PlanElement {
    url: string;
    size: KernelVector2f;
    rotation: KernelVector3f;
    center: KernelVector3f;
}
declare abstract class PlanMeasure extends PlanElement {
    getPoint1(): KernelVector3f;
    getPoint2(): KernelVector3f;
}
declare abstract class Node extends PlanElement {
    getNumberOfConnectedWalls(): number;
    getMaxWallHeight(): number;
}
declare class CatalogItemPtrList extends EmsList<CatalogItem> {
}
declare class CatalogItem extends AbstractModelWrapper {
    size: KernelVector3f;
    layer: number;
    type: string;
    configuration: string;
    orderable: boolean;
    scaleable: boolean;
    flipable: boolean;
}
declare class PlanObjectPtrList extends EmsList<PlanObjectPtr> {
}
declare class PlanObjectPtrVector extends EmsArray<PlanObjectPtr> {
}
declare abstract class PlanObjectPtr extends AbstractModelWrapper {
    rotation: KernelVector3f;
    customColor: number;
    level: number;
    flipX: boolean;
    flipY: boolean;
    fixedZ: boolean;
    size: KernelVector3f;
    getCatalogItemId(): string;
    getConfigurationRuntimeId(): number;
    getObjectType(): string;
    hasConfiguration(): boolean;
    isConfigurationLoaded(): boolean;
}
declare abstract class ConstructionObject extends PlanObjectPtr {
    getAttachedWall(): Wall;
}
declare class Wall extends PlanObjectPtr {
    thickness: number;
    height: number;
    leftMaterial: WallMaterial;
    rightMaterial: WallMaterial;
    getFrom(): Node;
    getTo(): Node;
    getCornerFromLeft(): KernelVector3f;
    getCornerFromRight(): KernelVector3f;
    getCornerToLeft(): KernelVector3f;
    getCornerToRight(): KernelVector3f;
    getAngle(): number;
    getLength(): number;
    getPreferredSide(): WallSide;
    getAttachedObjects(): PlanObjectObjectSet;
    getCenter(): KernelVector3f;
}
declare abstract class Floor extends PlanElement {
    area: number;
    material: FloorMaterial;
    getCorners(): EmsArray<KernelVector3f>;
    getTriangulationIndices(): EmsArray<number>;
    getNumberOfTriangles(): number;
    getRandomPointInside(): KernelVector3f;
}
export declare abstract class BaseMaterial {
    catalogItemId: string;
    materialId: string;
    rgbValue: number;
    getCatalogItemId(): string;
    getSourceType(): KernelEnum;
}
declare abstract class FloorMaterial extends BaseMaterial {
    uvScale(): KernelVector3f;
    rotation(): KernelVector3f;
}
declare abstract class WallMaterial extends BaseMaterial {
}
interface KernelCube {
    origin: KernelVector3f;
    size: KernelVector3f;
}
declare abstract class Plan extends AbstractModelWrapper {
    defaultParapetHeight: number;
    defaultWallColor: number;
    defaultWallHeight: number;
    defaultWallThickness: number;
    increaseLockLevels(): void;
    getPlanXML(): string;
    getPlanXMLWithNormalizedLockLevels(): string;
    getBounds(): KernelCube;
    getPlanObjects(): PlanObjectPtrVector;
    getWallCount(): number;
    getImageCount(): number;
    isEmpty(): boolean;
    getTotalFloorArea(): number;
    applySettings(aRoomHeight: number, aParapetHeight: number): void;
    syncToView(): void;
}
declare abstract class PlanModelViewHelper {
    static requestMesh3d(aPlanElement: PlanElement): void;
    static requestPlanMesh3d(aPlanElement: PlanElement, includeCeiling: boolean): void;
    static requestWallMesh2d(aWall: Wall): void;
    static requestFloorMesh2d(aFloor: Floor): void;
    static getCeilingHeight(aFloor: Floor): number;
    static getMaxDistToBorderForPlanObject(aPlanObject: PlanObjectPtr): number;
    static getDistToNextWallOnSide(anObject: PlanObjectPtr, aSide: PlanObjectSide, maxDist: number): number;
    static getDistAlongWallOnSide(anObject: ConstructionObject, aSide: PlanObjectSide, aWallSide: WallSide): number;
}
declare class PointArray extends EmsArray<KernelVector3f> {
}
declare class SizeTArray extends EmsArray<number> {
}
export declare const enum PlanElementType {
    NODE = 0,
    WALL = 1,
    OBJECT = 2,
    FLOOR = 3,
    TEXT = 4,
    MEASURE = 5,
    IMAGE = 6,
    CEILING = 7
}
export declare const enum PlanObjectSide {
    Back = 0,
    Front = 1,
    Left = 2,
    Right = 3
}
export declare const enum WallSide {
    Left = 0,
    Right = 1,
    Middle = 2
}
declare const enum WallExtensionType {
    ExtendBegin = 0,
    ExtendEnd = 1,
    ExtendBoth = 2
}
export declare const enum MaterialSourceType {
    None = 0,
    CatalogItem = 1,
    Material = 2,
    RgbValue = 3
}
declare const enum DrawingType {
    CONTINOUS = 0,
    CLICK_PER_CLICK = 1
}
declare const enum ResizingAnchor {
    Center = 0,
    BackLeft = 1,
    BackRight = 2,
    FrontLeft = 3,
    FrontRight = 4,
    Back = 5,
    Front = 6,
    Left = 7,
    Right = 8
}
declare class StringArray extends EmsArray<string> {
}
declare class Vector2fArray extends EmsArray<KernelVector2f> {
}
declare class LongArray extends EmsArray<number> {
}
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
export interface PlannerKernelContainer {
    PointArray: PointArray;
    SizeTArray: SizeTArray;
    ConstructionObjectSet: ConstructionObjectSet;
    PlanObjectObjectSet: PlanObjectObjectSet;
    ExternalReference: ExternalReference;
    EMSReference: EMSReference;
    AbstractModel: AbstractModel;
    PlanElementType: PlanElementType;
    PlanElement: PlanElement;
    ObjectGroup: ObjectGroup;
    PlanText: PlanText;
    PlanImage: PlanImage;
    PlanMeasure: PlanMeasure;
    Node: Node;
    CatalogItemPtrList: CatalogItemPtrList;
    CatalogItem: CatalogItem;
    PlanObjectSide: PlanObjectSide;
    toPlanObjectSide: (a: number) => PlanObjectSide;
    PlanObjectPtrList: PlanObjectPtrList;
    PlanObjectPtrVector: PlanObjectPtrVector;
    PlanObject: PlanObjectPtr;
    ConstructionObject: ConstructionObject;
    ConstObjectPtr: ConstructionObject;
    WallSide: WallSide;
    toWallSide: (a: number) => WallSide;
    WallExtensionType: WallExtensionType;
    Wall: Wall;
    Floor: Floor;
    MaterialSourceType: MaterialSourceType;
    BaseMaterial: BaseMaterial;
    FloorMaterial: FloorMaterial;
    WallMaterial: WallMaterial;
    Plan: Plan;
    DrawingType: DrawingType;
    ResizingAnchor: ResizingAnchor;
    toResizingAnchor: (a: number) => ResizingAnchor;
    PlanInteractionHandler: PlanInteractionHandler;
    PlanModelViewHelper: PlanModelViewHelper;
    catalogItemLoaded: (aCatalogItem: CatalogItem) => void;
    registerPlannerCallback: (callbacksObject: any) => void;
    unregisterPlannerCallback: (callbacksObject: any) => void;
    StringArray: StringArray;
    Vector2fArray: Vector2fArray;
    LongArray: LongArray;
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
}
export {};
