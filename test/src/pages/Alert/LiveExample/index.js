import com from '@xso/com';

import {Alert, Button} from '@xso/ui';

import ExampleBlock from "../../../components/ExampleBlock/index.js";

function LiveExample() {
    const show = this.state(false);
    this.view(() => [
        { h3: { _: 'LiveExample' } },
        { p: { _: 'Using the alert JavaScript plugin, it’s possible to dismiss any alert inline. Here’s how:' } },
        { [ExampleBlock]: {
            example: [
                show.val ? { [Alert]: {
                    mode: 'success',
                    dismissible: true,
                    onClose: () => show.$val = false,
                    _: 'Nice, you triggered this alert message!',
                } } : null,
                { [Button]: {
                    mode: 'primary',
                    onClick: () => show.$val = true,
                    _: 'Show live alert'
                } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Alert, Button} from "@xso/ui";
                
                function AlertsExample() {
                    const show = this.state(false); 
                    this.view(() => [
                        show.val ? { [Alert]: {
                            mode: 'success',
                            dismissible: true,
                            onClose: () => show.$val = false,
                            _: 'Nice, you triggered this alert message!',
                        } } : null,
                        { [Button]: {
                            mode: 'primary',
                            onClick: () => show.$val = true,
                            _: 'Show live alert'
                        } },
                    ]);
                }
                
                export default com(AlertsExample);
            `
        } },
    ]);
}

export default com(LiveExample);