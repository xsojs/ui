import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Button} from "@xso/ui";

function OutlineButtons() {
    this.view(() => [
        { h3: { _: 'Outline buttons' } },
        { p: { _: 'The .btn classes are designed to be used with the <button> element. However, you can also use these classes on <a> or <input> elements (though some browsers may apply a slightly different rendering).' } },
        { [ExampleBlock]: {
            example: [
                { [Button]: { mode: 'primary', outline: true, _: 'Primary' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'secondary', outline: true, _: 'Secondary' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'success', outline: true, _: 'Success' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'danger', outline: true, _: 'Danger' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'warning', outline: true, _: 'Warning' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'info', outline: true, _: 'Info' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'light', outline: true, _: 'Light' } },
                { span: { _: ' ' }},
                { [Button]: { mode: 'dark', outline: true, _: 'Dark' } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Button} from "@xso/ui";
            
            function ButtonExample() { 
                this.view(() => [
                    { [Button]: { mode: 'primary', outline: true, _: 'Primary' } },
                    { [Button]: { mode: 'secondary', outline: true, _: 'Secondary' } },
                    { [Button]: { mode: 'success', outline: true, _: 'Success' } },
                    { [Button]: { mode: 'danger', outline: true, _: 'Danger' } },
                    { [Button]: { mode: 'warning', outline: true, _: 'Warning' } },
                    { [Button]: { mode: 'info', outline: true, _: 'Info' } },
                    { [Button]: { mode: 'light', outline: true, _: 'Light' } },
                    { [Button]: { mode: 'dark', outline: true, _: 'Dark' } },
                ]);
            }
            
            export default com(ButtonExample);
        `
        } },
    ]);
}

export default com(OutlineButtons);