import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Label, Input} from "@xso/ui";

function Example() {
    this.view(() => [
        { h3: { _: 'Example' } },
        { p: { _: 'Form controls are styled with a mix of Sass and CSS variables, allowing them to adapt to color modes and support any customization method.' } },
        { [ExampleBlock]: {
            example: [
                { div: {
                    class: 'mb-3',
                    _: [
                        { [Input]: {
                            label: 'Email address',
                            placeholder: 'name@example.com'
                        } },
                    ],
                } },
                { div: {
                    class: 'mb-3',
                    _: [
                        { [Label]: {
                            for: 'exampleFormControlTextarea1',
                            _: 'Example textarea'
                        } },
                        { [Input]: {
                            type: 'textarea',
                            row: 3,
                            id: 'exampleFormControlTextarea1'
                        } },
                    ],
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Label, Input} from "@xso/ui";
            
            function FormControlsExample() { 
                this.view(() => [
                    { div: {
                        class: 'mb-3',
                        _: [
                            { [Input]: {
                                label: 'Email address',
                                placeholder: 'name@example.com'
                            } },
                        ],
                    } },
                    { div: {
                        class: 'mb-3',
                        _: [
                            { [Label]: {
                                for: 'exampleFormControlTextarea1',
                                _: 'Example textarea'
                            } },
                            { [Input]: {
                                type: 'textarea',
                                row: 3,
                                id: 'exampleFormControlTextarea1'
                            } },
                        ],
                    } },
                ]);
            }
            
            export default com(FormControlsExample);
        `
        } },
    ]);
}

export default com(Example);
