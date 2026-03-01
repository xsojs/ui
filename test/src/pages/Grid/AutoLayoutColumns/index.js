import com from '@xso/com';

import EqualWidth from "./EqualWidth";
import SettingOneColumnWidth from "./SettingOneColumnWidth";
import VariableWidthContent from "./VariableWidthContent";

function AutoLayoutColumns() {
    this.view(() => [
        { h3: { _: 'Auto-layout columns' } },
        { p: { _: 'Utilize breakpoint-specific column classes for easy column sizing without an explicit numbered class like .col-sm-6.' } },
        { [EqualWidth]: {} },
        { [SettingOneColumnWidth]: {} },
        { [VariableWidthContent]: {} },
    ]);
}

export default com(AutoLayoutColumns);
