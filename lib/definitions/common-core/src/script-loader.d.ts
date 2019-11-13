import { Context } from './di/context';
export interface ScriptData {
    name: string;
    id: string;
}
export default class ScriptLoader implements Context {
    _creator_: string;
    private _singlePromiseFactory;
    constructor(creator: string);
    fetch(url: string, options: {
        id: string;
    }): Promise<any>;
    loadScripts(scripts: ScriptData[]): Promise<[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]>;
    cleanUp(): void;
}
