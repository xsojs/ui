import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Button} from "@xso/ui";

function ButtonTags() {
    this.view(() => [
        { h3: { _: 'Button tags' } },
        { p: { _: 'The .btn classes are designed to be used with the <button> element. However, you can also use these classes on <a> or <input> elements (though some browsers may apply a slightly different rendering).' } },
        { [ExampleBlock]: {
            example: [
                { [Button]: { tag: 'a', mode: 'primary', href: '#', _: 'Link' } },
                { span: { _: ' ' }},
                { [Button]: { type: 'submit', mode: 'primary', _: 'Button' } },
                { span: { _: ' ' }},
                { [Button]: { tag: 'input', type: 'button', mode: 'primary', value: 'Input' } },
                { span: { _: ' ' }},
                { [Button]: { tag: 'input', type: 'submit', mode: 'primary', value: 'Submit' } },
                { span: { _: ' ' }},
                { [Button]: { tag: 'input', type: 'reset', mode: 'primary', value: 'Reset' } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Button} from "@xso/ui";
            
            function ButtonExample() { 
                this.view(() => [
                    { [Button]: { tag: 'a', mode: 'primary', href: '#', _: 'Link' } },
                    { span: { _: ' ' }},
                    { [Button]: { type: 'submit', mode: 'primary', _: 'Button' } },
                    { span: { _: ' ' }},
                    { [Button]: { tag: 'input', type: 'button', mode: 'primary', value: 'Input' } },
                    { span: { _: ' ' }},
                    { [Button]: { tag: 'input', type: 'submit', mode: 'primary', value: 'Submit' } },
                    { span: { _: ' ' }},
                    { [Button]: { tag: 'input', type: 'reset', mode: 'primary', value: 'Reset' } },
                ]);
            }
            
            export default com(ButtonExample);
        `
        } },
    ]);
}

export default com(ButtonTags);