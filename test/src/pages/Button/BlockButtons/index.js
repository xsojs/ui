import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Button} from "@xso/ui";

function BlockButtons() {
    this.view(() => [
        { h3: { _: 'Block Buttons' } },
        { p: { _: 'Create responsive stacks of full-width with a mix of our display and gap utilities. By using utilities instead of button-specific classes, we have much greater control over spacing, alignment, and responsive behaviors.' } },
        { [ExampleBlock]: {
            example: [
                { div: {
                    class: 'd-grid gap-2',
                    _: [
                        { [Button]: { mode: 'primary', _: 'Button' } },
                        { [Button]: { mode: 'primary', _: 'Button' } },
                    ],
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Button} from "@xso/ui";
            
            function ButtonExample() { 
                this.view(() => [
                    { div: {
                        class: 'd-grip gap-2',
                        _: [
                            { [Button]: { mode: 'primary', _: 'Button' } },
                            { [Button]: { mode: 'primary', _: 'Button' } },
                        ],
                    } },
                ]);
            }
            
            export default com(ButtonExample);
        `
        } },
        { p: { _: 'Here we create a responsive variation, starting with vertically stacked buttons until the md breakpoint, where .d-md-block replaces the .d-grid class, thus nullifying the gap-2 utility. Resize your browser to see them change.' } },
        { [ExampleBlock]: {
            example: [
                { div: {
                        class: 'd-grid gap-2 d-md-block',
                        _: [
                            { [Button]: { mode: 'primary', _: 'Button' } },
                            ' ',
                            { [Button]: { mode: 'primary', _: 'Button' } },
                        ],
                    } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Button} from "@xso/ui";
            
            function ButtonExample() { 
                this.view(() => [
                    { div: {
                        class: 'd-grip gap-2 d-md-block',
                        _: [
                            { [Button]: { mode: 'primary', _: 'Button' } },
                            ' ',
                            { [Button]: { mode: 'primary', _: 'Button' } },
                        ],
                    } },
                ]);
            }
            
            export default com(ButtonExample);
        `
        } },
        { p: { _: 'You can adjust the width of your block buttons with grid column width classes. For example, for a half-width “block button”, use .col-6. Center it horizontally with .mx-auto, too.' } },
        { [ExampleBlock]: {
            example: [
                { div: {
                        class: 'd-grid gap-2 col-6 mx-auto',
                        _: [
                            { [Button]: { mode: 'primary', _: 'Button' } },
                            { [Button]: { mode: 'primary', _: 'Button' } },
                        ],
                    } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Button} from "@xso/ui";
            
            function ButtonExample() { 
                this.view(() => [
                    { div: {
                        class: 'd-grip gap-2 col-6 mx-auto',
                        _: [
                            { [Button]: { mode: 'primary', _: 'Button' } },
                            { [Button]: { mode: 'primary', _: 'Button' } },
                        ],
                    } },
                ]);
            }
            
            export default com(ButtonExample);
        `
        } },
        { p: { _: 'Additional utilities can be used to adjust the alignment of buttons when horizontal. Here we’ve taken our previous responsive example and added some flex utilities and a margin utility on the button to right-align the buttons when they’re no longer stacked.' } },
        { [ExampleBlock]: {
            example: [
                { div: {
                        class: 'd-grid gap-2 d-md-flex justify-content-md-end',
                        _: [
                            { [Button]: { mode: 'primary', _: 'Button' } },
                            { [Button]: { mode: 'primary', _: 'Button' } },
                        ],
                    } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Button} from "@xso/ui";
            
            function ButtonExample() { 
                this.view(() => [
                    { div: {
                        class: 'd-grip gap-2 d-md-flex justify-content-md-end',
                        _: [
                            { [Button]: { mode: 'primary', _: 'Button' } },
                            { [Button]: { mode: 'primary', _: 'Button' } },
                        ],
                    } },
                ]);
            }
            
            export default com(ButtonExample);
        `
        } },
    ]);
}

export default com(BlockButtons);