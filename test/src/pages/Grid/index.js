import com from '@xso/com';

function GridPage() {
    this.view(() => [
        { h1: { _: 'Grid' } },
    ]);
}

export default com(GridPage);