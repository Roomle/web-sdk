export default class PixotronMock {
    static setup(): void;
    static teardown(): void;
    static override(key: string, mock: any): void;
}
