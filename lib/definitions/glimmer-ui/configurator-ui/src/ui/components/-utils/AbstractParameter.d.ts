import Component from '@glimmer/component';
import UiCore from '../../../services/ui-core';
import I18n from '../../../services/i18n';
import LoadingScreen from '../../../services/loading-screen';
export default class AbstractParameter extends Component {
    protected _uiCore: UiCore;
    protected _loadingScreen: LoadingScreen;
    protected _i18n: I18n;
    changeParam(value: any): Promise<void>;
    requestShowDetails(): void;
}
