import CommonKernelAccess from '../src/services/common-kernel-access';
export default abstract class CommonKernelAccessMock extends CommonKernelAccess {
    _kernelContainer: {
        unregisterConfiguratorCallback: () => void;
        registerConfiguratorCallback: () => void;
    };
    protected onLoadComponentError(error: Error): void;
}
