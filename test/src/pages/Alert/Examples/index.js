import com from '@xso/com';

import {Alert, Badge} from '@xso/ui';

import ExampleBlock from "../../../components/ExampleBlock/index.js";

function Examples() {
    this.view(() => [
        { h3: { _: 'Examples' } },
        { p: { _: 'Alerts are available for any length of text, as well as an optional close button. For proper styling, use one of the eight required contextual classes (e.g., .alert-success).' } },
        { [ExampleBlock]: {
            example: [
                { [Alert]: { mode: 'primary', _: 'A simple primary alert—check it out!' } },
                { [Alert]: { mode: 'secondary', _: 'A simple secondary alert—check it out!' } },
                { [Alert]: { mode: 'success', _: 'A simple success alert—check it out!' } },
                { [Alert]: { mode: 'danger', _: 'A simple danger alert—check it out!' } },
                { [Alert]: { mode: 'warning', _: 'A simple warning alert—check it out!' } },
                { [Alert]: { mode: 'info', _: 'A simple info alert—check it out!' } },
                { [Alert]: { mode: 'light', _: 'A simple light alert—check it out!' } },
                { [Alert]: { mode: 'dark', _: 'A simple dark alert—check it out!' } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Alert} from "@xso/ui";
                
                function AlertsExample() { 
                    this.view(() => [
                        { [Alert]: { mode: 'primary', _: 'A simple primary alert—check it out!' } },
                        { [Alert]: { mode: 'secondary', _: 'A simple secondary alert—check it out!' } },
                        { [Alert]: { mode: 'success', _: 'A simple success alert—check it out!' } },
                        { [Alert]: { mode: 'danger', _: 'A simple danger alert—check it out!' } },
                        { [Alert]: { mode: 'warning', _: 'A simple warning alert—check it out!' } },
                        { [Alert]: { mode: 'info', _: 'A simple info alert—check it out!' } },
                        { [Alert]: { mode: 'light', _: 'A simple light alert—check it out!' } },
                        { [Alert]: { mode: 'dark', _: 'A simple dark alert—check it out!' } },
                    ]);
                }
                
                export default com(AlertsExample);
            `
        } },
    ]);
}

export default com(Examples);