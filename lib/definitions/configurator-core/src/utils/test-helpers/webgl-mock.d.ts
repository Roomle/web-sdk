export default class WebGlMock {
    requestDeleteComponentCalled: boolean;
    context: {
        planObjectBounds: {};
        rootComponentId: number;
    };
    cancelSelection(): void;
    requestDeleteComponent(): void;
    onRemovePreviews(): void;
}
