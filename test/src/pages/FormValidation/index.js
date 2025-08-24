import com from '@xso/com';

function FormValidationPage() {
    this.view(() => [
        { h1: { _: 'Form validation' } },
    ]);
}

export default com(FormValidationPage);