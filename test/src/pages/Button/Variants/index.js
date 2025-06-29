import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Button} from "@xso/ui";

function Variants() {
    this.view(() => [
        { h3: { _: 'Variants' } },
        { p: { _: 'Bootstrap includes several button variants, each serving its own semantic purpose, with a few extras thrown in for more control.' } },
        { [ExampleBlock]: {
            example: [
                { [Button]: { mode: 'primary', _: 'Primary' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'secondary', _: 'Secondary' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'success', _: 'Success' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'danger', _: 'Danger' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'warning', _: 'Warning' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'info', _: 'Info' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'light', _: 'Light' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'dark', _: 'Dark' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'link', _: 'Link' } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Button} from "@xso/ui";
                
                function ButtonExample() { 
                    this.view(() => [
                        { [Button]: { mode: 'primary', _: 'Primary' } },
                        { [Button]: { mode: 'secondary', _: 'Secondary' } },
                        { [Button]: { mode: 'success', _: 'Success' } },
                        { [Button]: { mode: 'danger', _: 'Danger' } },
                        { [Button]: { mode: 'warning', _: 'Warning' } },
                        { [Button]: { mode: 'info', _: 'Info' } },
                        { [Button]: { mode: 'light', _: 'Light' } },
                        { [Button]: { mode: 'dark', _: 'Dark' } },
                        { [Button]: { mode: 'link', _: 'Link' } },
                    ]);
                }
                
                export default com(ButtonExample);
            `
        } },
    ]);
}

export default com(Variants);