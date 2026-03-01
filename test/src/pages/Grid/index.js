import com from '@xso/com';

import Example from './Example';
import AutoLayoutColumns from './AutoLayoutColumns';
import ResponsiveClasses from './ResponsiveClasses';

function GridPage() {
    this.view(() => [
        { h1: { _: 'Grid system' } },
        { p: { _: 'Use our powerful mobile-first flexbox grid to build layouts of all shapes and sizes thanks to a twelve column system, six default responsive tiers, Sass variables and mixins, and dozens of predefined classes.' } },
        { [Example]: { } },
        { [AutoLayoutColumns]: {} },
        { [ResponsiveClasses]: {} },
    ]);
}

export default com(GridPage);