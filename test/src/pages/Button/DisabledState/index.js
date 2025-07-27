import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Button} from "@xso/ui";

function DisabledState() {
    this.view(() => [
        { h3: { _: 'Disabled State' } },
        { p: { _: 'Make buttons look inactive by adding the disabled boolean attribute to any <button> element. Disabled buttons have pointer-events: none applied to, preventing hover and active states from triggering.' } },
        { [ExampleBlock]: {
            example: [
                { [Button]: { mode: 'primary', disabled: true, _: 'Primary Button' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'secondary', disabled: true, _: 'Button' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'ouline-primary', disabled: true, _: 'Primary Button' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'ouline-secondary', disabled: true, _: 'Button' } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Button} from "@xso/ui";
            
            function ButtonExample() { 
                this.view(() => [
                    { [Button]: { mode: 'primary', disabled: true, _: 'Primary Button' } },
                    { [Button]: { mode: 'secondary', disabled: true, _: 'Button' } },
                    { [Button]: { mode: 'ouline-primary', disabled: true, _: 'Primary Button' } },
                    { [Button]: { mode: 'ouline-secondary', disabled: true, _: 'Button' } },
                ]);
            }
            
            export default com(ButtonExample);
        `
        } },
        { [ExampleBlock]: {
            example: [
                { [Button]: { tag: 'a', mode: 'primary', disabled: true, _: 'Primary Link' } },
                { span: { _: ' ' }},
                { [Button]: { tag: 'a', mode: 'secondary', disabled: true, _: 'Link' } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Button} from "@xso/ui";
            
            function ButtonExample() { 
                this.view(() => [
                    { [Button]: { tag: 'a', mode: 'primary', disabled: true, _: 'Primary Link' } },
                    { [Button]: { tag: 'a', mode: 'secondary', disabled: true, _: 'Link' } },
                ]);
            }
            
            export default com(ButtonExample);
        `
        } },
    ]);
}

export default com(DisabledState);