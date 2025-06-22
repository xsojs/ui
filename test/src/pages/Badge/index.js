import com from '@xso/com';

import {Badge, Button} from "@xso/ui";

import ExampleBlock from "../../components/ExampleBlock";

function BadgePage() {
    this.view(() => [
        { h1: { _: 'Badge' } },
        { p: { _: 'Documentation and examples for badges, our small count and labeling component.' } },
        { h3: { _: 'Colors' } },
        { p: { _: 'Colorized badges for many situations.' } },
        { [ExampleBlock]: {
            example: [
                { [Badge]: { mode: 'primary', _: 'Primary' } },
                { span: { _: ' ' }},
                { [Badge]: { mode: 'secondary', _: 'Secondary' } },
                { span: { _: ' ' }},
                { [Badge]: { mode: 'success', _: 'Success' } },
                { span: { _: ' ' }},
                { [Badge]: { mode: 'danger', _: 'Danger' } },
                { span: { _: ' ' }},
                { [Badge]: { mode: 'warning', _: 'Warning' } },
                { span: { _: ' ' }},
                { [Badge]: { mode: 'light', _: 'Light' } },
                { span: { _: ' ' }},
                { [Badge]: { mode: 'dark', _: 'Dark' } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Badge} from "@xso/ui";
                
                function BadgesExample() { 
                    this.view(() => [
                        { [Badge]: { mode: 'primary', _: 'Primary' } },
                        { [Badge]: { mode: 'secondary', _: 'Secondary' } },
                        { [Badge]: { mode: 'success', _: 'Success' } },
                        { [Badge]: { mode: 'danger', _: 'Danger' } },
                        { [Badge]: { mode: 'warning', _: 'Warning' } },
                        { [Badge]: { mode: 'light', _: 'Light' } },
                        { [Badge]: { mode: 'dark', _: 'Dark' } },
                    ]);
                }
                
                export default com(BadgesExample);
            `
        } },
        { h3: { _: 'Pill' } },
        { p: { _: 'Use the pill to make badges more rounded.' } },
        { [ExampleBlock]: {
            example: [
                { [Badge]: { mode: 'primary', pill: true, _: 'Primary' } },
                { span: { _: ' ' }},
                { [Badge]: { mode: 'secondary', pill: true, _: 'Secondary' } },
                { span: { _: ' ' }},
                { [Badge]: { mode: 'success', pill: true, _: 'Success' } },
                { span: { _: ' ' }},
                { [Badge]: { mode: 'danger', pill: true, _: 'Danger' } },
                { span: { _: ' ' }},
                { [Badge]: { mode: 'warning', pill: true, _: 'Warning' } },
                { span: { _: ' ' }},
                { [Badge]: { mode: 'light', pill: true, _: 'Light' } },
                { span: { _: ' ' }},
                { [Badge]: { mode: 'dark', pill: true, _: 'Dark' } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Badge} from "@xso/ui";
                
                function PillBadgesExample() { 
                    this.view(() => [
                        { [Badge]: { mode: 'primary', pill: true, _: 'Primary' } },
                        { [Badge]: { mode: 'secondary', pill: true, _: 'Secondary' } },
                        { [Badge]: { mode: 'success', pill: true, _: 'Success' } },
                        { [Badge]: { mode: 'danger', pill: true, _: 'Danger' } },
                        { [Badge]: { mode: 'warning', pill: true, _: 'Warning' } },
                        { [Badge]: { mode: 'light', pill: true, _: 'Light' } },
                        { [Badge]: { mode: 'dark', pill: true, _: 'Dark' } },
                    ]);
                }
                
                export default com(PillBadgesExample);
            `
        } },
        { h3: { _: 'Buttons' } },
        { p: { _: 'Badges can be used as part of links or buttons to provide a counter.' } },
        { [ExampleBlock]: {
            example: [
                { [Button]: {
                    mode: 'primary',
                    _: [
                        'Notifications ',
                        { [Badge]: { mode: 'secondary', pill: true, _: '5' } },
                    ]
                } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Button, Badge} from "@xso/ui";
                
                function ButtonBadgeExample() { 
                    this.view(() => [
                        { [Button]: {
                            mode: 'primary',
                            _: [
                                'Notifications ',
                                { [Badge]: { mode: 'secondary', pill: true, _: '5' } },
                            ]
                        } },
                    ]);
                }
                
                export default com(ButtonBadgeExample);
            `
        } },
        { h3: { _: 'Positioned' } },
        { p: { _: 'Use utilities to modify a badge and position it in the corner of a link or button.' } },
        { [ExampleBlock]: {
            example: [
                { [Button]: {
                    class: 'position-relative',
                    mode: 'primary',
                    _: [
                        'Inbox ',
                        { [Badge]: {
                            class: 'position-absolute top-0 start-100 translate-middle',
                            mode: 'danger',
                            pill: true,
                            _: [
                                '99+',
                                { span: { class: 'visually-hidden', _: 'unread messages' } },
                            ]
                        } },
                    ]
                } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Button, Badge} from "@xso/ui";
                
                function ButtonPositionedBadgeExample() { 
                    this.view(() => [
                        { [Button]: {
                            class: 'position-relative',
                            mode: 'primary',
                            _: [
                                'Inbox ',
                                { [Badge]: {
                                    class: 'position-absolute top-0 start-100 translate-middle',
                                    mode: 'danger',
                                    pill: true,
                                    _: [
                                        '99+',
                                        { span: { class: 'visually-hidden', _: 'unread messages' } },
                                    ]
                                } },
                            ]
                        } },
                    ]);
                }
                
                export default com(ButtonPositionedBadgeExample);
            `
        } },
    ]);
}

export default com(BadgePage);