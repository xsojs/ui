import com from '@xso/com';

import SingleButton from "./SingleButton";
import SplitButton from "./SplitButton";
import Sizing from "./Sizing";
import Directions from "./Directions";

function DropdownPage() {
    this.view(() => [
        { h1: { _: 'Dropdowns' } },
        { p: { _: 'Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.' } },
        { [SingleButton]: { } },
        { [SplitButton]: { } },
        { [Sizing]: { } },
        { [Directions]: { } },
    ]);
}

export default com(DropdownPage);