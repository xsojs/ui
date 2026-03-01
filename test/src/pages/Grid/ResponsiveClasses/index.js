import com from '@xso/com';

import AllBreakpoints from "./AllBreakpoints";
import StackedToHorizontal from "./StackedToHorizontal";
import MixAndMatch from "./MixAndMatch";
import RowColumns from "./RowColumns";

function ResponsiveClasses() {
    this.view(() => [
        { h3: { _: 'Responsive classes' } },
        { p: { _: 'Bootstrap’s grid includes six tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.' } },
        { [AllBreakpoints]: {} },
        { [StackedToHorizontal]: {} },
        { [MixAndMatch]: {} },
        { [RowColumns]: {} },
    ]);
}

export default com(ResponsiveClasses);
