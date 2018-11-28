import { Context } from './di/context';
export default class ScriptLoader implements Context {
    _creator_: string;
    private _singlePromiseFactory;
    constructor(creator: string);
    fetch(url: string, options: {
        id: string;
    }): Promise<any>;
    cleanUp(): void;
}
