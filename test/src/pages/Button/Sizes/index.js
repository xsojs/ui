import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Button} from "@xso/ui";

function Sizes() {
    this.view(() => [
        { h3: { _: 'Sizes' } },
        { p: { _: 'Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional sizes.' } },
        { [ExampleBlock]: {
            example: [
                { [Button]: { mode: 'primary', size: 'lg', _: 'Large Button' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'primary', size: 'large', _: 'Large Button' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'secondary', _: 'Normal Button' } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Button} from "@xso/ui";
            
            function ButtonExample() { 
                this.view(() => [
                    { [Button]: { mode: 'primary', size: 'lg', _: 'Large Button' } },
                    { [Button]: { mode: 'primary', size: 'large', _: 'Large Button' } },
                    { [Button]: { mode: 'secondary', _: 'Normal Button' } },
                ]);
            }
            
            export default com(ButtonExample);
        `
        } },
        { [ExampleBlock]: {
            example: [
                { [Button]: { mode: 'primary', size: 'sm', _: 'Small Button' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'primary', size: 'small', _: 'Small Button' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'secondary', _: 'Normal Button' } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Button} from "@xso/ui";
            
            function ButtonExample() { 
                this.view(() => [
                    { [Button]: { mode: 'primary', size: 'sm', _: 'Small Button' } },
                    { [Button]: { mode: 'primary', size: 'small', _: 'Small Button' } },
                    { [Button]: { mode: 'secondary', _: 'Normal Button' } },
                ]);
            }
            
            export default com(ButtonExample);
        `
            } },
        { p: { _: 'You can even roll your own custom sizing with CSS variables:' } },
        { [ExampleBlock]: {
            example: [
                { [Button]: {
                        mode: 'primary',
                        style: {
                            '--bs-btn-padding-y': '.10rem',
                            '--bs-btn-padding-x': '.25rem',
                            '--bs-btn-font-size': '.75rem',
                        },
                        _: 'Custom Button'
                    } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Button} from "@xso/ui";
            
            function ButtonExample() { 
                this.view(() => [
                    { [Button]: {
                        mode: 'primary',
                        style: {
                            '--bs-btn-padding-y': '.10rem',
                            '--bs-btn-padding-x': '.25rem',
                            '--bs-btn-font-size': '.75rem',
                        },
                        _: 'Custom Button'
                    } },
                ]);
            }
            
            export default com(ButtonExample);
        `
        } },
    ]);
}

export default com(Sizes);