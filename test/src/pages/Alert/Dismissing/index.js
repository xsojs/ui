import com from '@xso/com';

import {Alert, Badge} from '@xso/ui';

import ExampleBlock from "../../../components/ExampleBlock/index.js";

function Dismissing() {
    this.view(() => [
        { h3: { _: 'Dismissing' } },
        { p: { _: 'Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:' } },
        { [ExampleBlock]: {
            example: [
                { [Alert]: { mode: 'warning', dismissible: true, _: [
                    { strong: { _: 'Well done!' } },
                    ' You should check in on some of those fields below.',
                ] } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Alert} from "@xso/ui";
                
                function AlertsExample() { 
                    this.view(() => [
                        { [Alert]: { mode: 'warning', dismissible: true, _: [
                            { strong: { _: 'Well done!' } },
                            ' You should check in on some of those fields below.',
                        ] } },
                    ]);
                }
                
                export default com(AlertsExample);
            `
        } },
    ]);
}

export default com(Dismissing);