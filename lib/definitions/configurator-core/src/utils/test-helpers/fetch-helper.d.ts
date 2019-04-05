import { RapiJsonBox } from '../../../../typings/rapi-types';
export default class FetchHelper {
    static setup(): void;
    static setResponseJson(json: RapiJsonBox): void;
    static getRequestedUrls(): string[];
    static teardown(): void;
}
