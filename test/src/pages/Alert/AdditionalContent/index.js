import com from '@xso/com';

import {Alert, Badge} from '@xso/ui';

import ExampleBlock from "../../../components/ExampleBlock/index.js";

function AdditionalContent() {
    this.view(() => [
        { h3: { _: 'Additional Content' } },
        { p: { _: 'Alerts can also contain additional HTML elements like headings, paragraphs and dividers.' } },
        { [ExampleBlock]: {
            example: [
                { [Alert]: { mode: 'success', _: [
                    { [Alert.Heading]: { _: 'Well done!' } },
                    { p: { _: 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.' } },
                    { hr: {} },
                    { p: { class: 'md-0', _: 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.' } },
                ] } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Alert} from "@xso/ui";
                
                function AlertsExample() { 
                    this.view(() => [
                        { [Alert]: { mode: 'success', _: [
                            { [Alert.Heading]: { _: 'Well done!' } },
                            { p: { _: 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.' } },
                            { hr: {} },
                            { p: { class: 'md-0', _: 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.' } },
                        ] } },
                    ]);
                }
                
                export default com(AlertsExample);
            `
        } },
    ]);
}

export default com(AdditionalContent);