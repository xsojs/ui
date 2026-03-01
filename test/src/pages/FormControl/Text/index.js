import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Field, Input} from "@xso/ui";

function FormText() {
    this.view(() => [
        { h3: { _: 'Text' } },
        { p: { _: 'Block-level or inline-level form text can be created using .form-text.' } },
        { p: { _: 'Form text should be explicitly associated with the form control it relates to using the aria-describedby attribute. This will ensure that assistive technologies—such as screen readers—will announce this form text when the user focuses or enters the control.' } },
        { p: { _: 'Form text below inputs can be styled with .form-text. If a block-level element will be used, a top margin is added for easy spacing from the inputs above.' } },
        { [ExampleBlock]: {
            example: [
                { [Field]: {
                    label: { _: 'Password' },
                    input: { [Input]: { } },
                    text: { _: 'Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.' },
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Field, Input} from "@xso/ui";
            
            function FormTextExample() { 
                this.view(() => [
                    { [Field]: {
                        label: { _: 'Password' },
                        input: { [Input]: { } },
                        text: { _: 'Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.' },
                    } },
                ]);
            }
            
            export default com(FormTextExample);
        `
        } },
        { p: { _: 'Inline text can use any typical inline HTML element (be it a <span>, <small>, or something else) with nothing more than the .form-text class.' } },
        { [ExampleBlock]: {
                example: [
                    { [Field]: {
                        row: { gutters: 3, alignItems: 'center' },
                        label: {
                            colForm: true,
                            col: 'auto',
                            _: 'Password'
                        },
                        input: {[Input]: {
                            col: 'auto',
                        }},
                        text: {
                            col: 'auto',
                            _: 'Must be 8-20 characters long.',
                        },
                    } },
                ],
                code: `
                    import com from "@xso/com";
                    
                    import {Field, Input} from "@xso/ui";
                    
                    function FormTextExample() { 
                        this.view(() => [
                            { [Field]: {
                                row: { gutters: 3, alignItems: 'center' },
                                label: {
                                    colForm: true,
                                    col: 'auto',
                                    _: 'Password'
                                },
                                input: {[Input]: {
                                    col: 'auto',
                                }},
                                text: {
                                    col: 'auto',
                                    _: 'Must be 8-20 characters long.',
                                },
                            } },
                        ]);
                    }
                    
                    export default com(FormTextExample);
                `
            } },
    ]);
}

export default com(FormText);
