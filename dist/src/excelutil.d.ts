export declare class ExcelUtil {
    excelRuner: ExcelRunner;
    sheetName: string;
    constructor(sheetName: string, excelRuner: ExcelRunner);
    replaceSheet(): Promise<void>;
    getSheet(): Promise<any>;
    ensureSheet(): Promise<any>;
    readRows(range: string): Promise<any>;
    readCols(range: string): Promise<any>;
    readCell(range: string): Promise<any>;
    readValues(range: string): Promise<any>;
    writeValues(values: any[][], baseCell: string): Promise<void>;
    writeCell(value: any, baseCell: string): Promise<void>;
    writeRows(values: any[], baseCell: string): Promise<void>;
    writeCols(values: any[], baseCell: string): Promise<void>;
    startWriteSession(values: any[][], baseCell: string): WriteSessionChain;
    addWriteChain(values: any[][], baseCell: string): WriteSessionChain;
    static calcRange(values: any[][], baseCell: string): string;
    writeSessionTemp: WriteSession[];
    sessionWrite(): Promise<void>;
    static toColumnName(index: number): string;
    static toColumnNumber(val: string): number;
}
export type SettingsChain = {
    addSettings: {
        (key: string, val: any): SettingsChain;
    };
    write: {
        (): void;
    };
};
export type WriteSessionChain = {
    addWriteChain: {
        (values: any[][], baseCell: string): WriteSessionChain;
    };
    sessionWrite: {
        (): Promise<void>;
    };
};
export type WriteSession = {
    values: any[][];
    baseCell: string;
};
export type ExcelRunner = {
    (context: any): Promise<void>;
};