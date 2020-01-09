export declare class EnvMapReader {
    private _cubeTextures;
    private _lightDirection;
    private _size;
    private _maxLod;
    private _encoding;
    private _type;
    private _format;
    private _cubeTexture;
    private _path;
    constructor();
    setPath(path: string): void;
    load(fileName: string): Promise<{}>;
    private parseHeader_;
    private parseBufferData_;
    private convertToRGBABuffer;
    private parseData_;
}
