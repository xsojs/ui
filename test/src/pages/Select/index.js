import com from '@xso/com';

function SelectPage() {
    this.view(() => [
        { h1: { _: 'Select' } },
    ]);
}

export default com(SelectPage);