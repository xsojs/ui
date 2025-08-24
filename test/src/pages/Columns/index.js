import com from '@xso/com';

function ColumnsPage() {
    this.view(() => [
        { h1: { _: 'Columns' } },
    ]);
}

export default com(ColumnsPage);