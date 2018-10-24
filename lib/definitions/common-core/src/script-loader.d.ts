export default class ScriptLoader {
    fetch(url: string, options: {
        id: string;
    }): Promise<any>;
    cleanUp(): void;
}
