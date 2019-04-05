import Service from './-utils/service';
export default class ScriptLoader extends Service {
    fetch(url: string, options: {
        id: string;
    }): Promise<void>;
}
