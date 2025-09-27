import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Label, Input} from "@xso/ui";

function Sizing() {
    this.view(() => [
        { h3: { _: 'Sizing' } },
        { p: { _: 'Set heights using classes like .form-control-lg and .form-control-sm.' } },
        { [ExampleBlock]: {
            example: [
                { [Input]: {
                    size: 'lg',
                    placeholder: '.form-control-lg',
                    ariaLabel: '.form-control-lg example',
                } },
                { [Input]: {
                    placeholder: 'Default input',
                    ariaLabel: 'default input example',
                    style: { marginTop: '.5rem'},
                } },
                { [Input]: {
                    size: 'sm',
                    placeholder: '.form-control-sm',
                    ariaLabel: '.form-control-sm example',
                    style: { marginTop: '.5rem'},
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Input} from "@xso/ui";
            
            function SizingExample() { 
                this.view(() => [
                    { [Input]: {
                        size: 'lg',
                        placeholder: '.form-control-lg',
                        ariaLabel: '.form-control-lg example',
                    } },
                    { [Input]: {
                        placeholder: 'Default input',
                        ariaLabel: 'default input example',
                    } },
                    { [Input]: {
                        size: 'sm',
                        placeholder: '.form-control-sm',
                        ariaLabel: '.form-control-sm example',
                    } },
                ]);
            }
            
            export default com(SizingExample);
        `
        } },
    ]);
}

export default com(Sizing);
