import com from '@xso/com';

function FloatingLabelsPage() {
    this.view(() => [
        { h1: { _: 'Floating labels' } },
    ]);
}

export default com(FloatingLabelsPage);