import com from '@xso/com';

function GuttersPage() {
    this.view(() => [
        { h1: { _: 'Gutters' } },
    ]);
}

export default com(GuttersPage);