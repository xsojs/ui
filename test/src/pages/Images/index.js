import com from '@xso/com';

function ImagesPage() {
    this.view(() => [
        { h1: { _: 'Images' } },
    ]);
}

export default com(ImagesPage);