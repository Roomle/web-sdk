declare class MockUnitMeasureFormatter {
    init(mmLabel: string, cmLabel: string, ftShortLabel: string, ftLongLabel: string, inchShortLabel: string, inchLongLabel: string, sqMLabel: string, sqftLabel: string, showExactValue: boolean, maxPrecision: number): void;
}
export declare const KERNEL_CONTAINER_MOCK: {
    UnitMeasureFormatter: typeof MockUnitMeasureFormatter;
    Unit: {
        InchFeet: {
            value: number;
        };
        MM: {
            value: number;
        };
        CM: {
            value: number;
        };
    };
    UnitStringType: {
        NoUnitString: {
            value: number;
        };
        LongUnitString: {
            value: number;
        };
        ShortUnitString: {
            value: number;
        };
    };
};
export {};
