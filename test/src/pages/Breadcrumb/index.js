import com from '@xso/com';

function Breadcrumb() {
    this.view(() => [
        { h1: { _: 'Breadcrumb' } },
    ]);
}

export default com(Breadcrumb);