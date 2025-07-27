import com from '@xso/com';

import Examples from "./Examples";
import LiveExample from "./LiveExample";
import LinkColor from "./LinkColor";
import AdditionalContent from "./AdditionalContent";
import Icons from "./Icons";
import Dismissing from "./Dismissing";

function AlertPage() {
    this.view(() => [
        { h1: { _: 'Alert' } },
        { p: { _: 'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.' } },
        { [Examples]: {} },
        { [LiveExample]: {} },
        { [LinkColor]: {} },
        { [AdditionalContent]: {} },
        { [Icons]: {} },
        { [Dismissing]: {} },
    ]);
}

export default com(AlertPage);