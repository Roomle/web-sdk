declare class Panel {
    constructor(name: string, accentColor: string, backgroundColor: string);
    update(value: number, maxNumber: number): void;
}
declare class Stats {
    REVISION: number;
    dom: HTMLDivElement;
    static Panel: typeof Panel;
    /**
     * @param value 0:fps, 1: ms, 2: mb, 3+: custom
     */
    showPanel(value: number): void;
    begin(): void;
    end(): number;
    update(): void;
    addPanel(panel: Panel): Panel;
}
declare module 'stats.js' {
    export = Stats;
}
