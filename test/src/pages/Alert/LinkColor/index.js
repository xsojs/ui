import com from '@xso/com';

import {Alert, Badge} from '@xso/ui';

import ExampleBlock from "../../../components/ExampleBlock/index.js";

function LinkColor() {
    this.view(() => [
        { h3: { _: 'LinkColor' } },
        { p: { _: 'Use the .alert-link utility class to quickly provide matching colored links within any alert.' } },
        { [ExampleBlock]: {
            example: [
                { [Alert]: { mode: 'primary', _: [
                    'A simple primary alert with ',
                    { [Alert.Link]: { href: '#', _: 'an example link' } },
                    '. Give it a click if you like.',
                ] } },
                { [Alert]: { mode: 'secondary', _: [
                    'A simple secondary alert with ',
                    { [Alert.Link]: { href: '#', _: 'an example link' } },
                    '. Give it a click if you like.',
                ] } },
                { [Alert]: { mode: 'success', _: [
                    'A simple success alert with ',
                    { [Alert.Link]: { href: '#', _: 'an example link' } },
                    '. Give it a click if you like.',
                ] } },
                { [Alert]: { mode: 'danger', _: [
                    'A simple danger alert with ',
                    { [Alert.Link]: { href: '#', _: 'an example link' } },
                    '. Give it a click if you like.',
                ] } },
                { [Alert]: { mode: 'warning', _: [
                    'A simple warning alert with ',
                    { [Alert.Link]: { href: '#', _: 'an example link' } },
                    '. Give it a click if you like.',
                ] } },
                { [Alert]: { mode: 'info', _: [
                    'A simple info alert with ',
                    { [Alert.Link]: { href: '#', _: 'an example link' } },
                    '. Give it a click if you like.',
                ] } },
                { [Alert]: { mode: 'light', _: [
                    'A simple light alert with ',
                    { [Alert.Link]: { href: '#', _: 'an example link' } },
                    '. Give it a click if you like.',
                ] } },
                { [Alert]: { mode: 'dark', _: [
                    'A simple dark alert with ',
                    { [Alert.Link]: { href: '#', _: 'an example link' } },
                    '. Give it a click if you like.',
                ] } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Alert} from "@xso/ui";
                
                function AlertsExample() { 
                    this.view(() => [
                        { [Alert]: { mode: 'primary', _: [
                            'A simple primary alert with ',
                            { [Alert.Link]: { href: '#', _: 'an example link' } },
                            '. Give it a click if you like.',
                        ] } },
                        { [Alert]: { mode: 'secondary', _: [
                            'A simple secondary alert with ',
                            { [Alert.Link]: { href: '#', _: 'an example link' } },
                            '. Give it a click if you like.',
                        ] } },
                        { [Alert]: { mode: 'success', _: [
                            'A simple success alert with ',
                            { [Alert.Link]: { href: '#', _: 'an example link' } },
                            '. Give it a click if you like.',
                        ] } },
                        { [Alert]: { mode: 'danger', _: [
                            'A simple danger alert with ',
                            { [Alert.Link]: { href: '#', _: 'an example link' } },
                            '. Give it a click if you like.',
                        ] } },
                        { [Alert]: { mode: 'warning', _: [
                            'A simple warning alert with ',
                            { [Alert.Link]: { href: '#', _: 'an example link' } },
                            '. Give it a click if you like.',
                        ] } },
                        { [Alert]: { mode: 'info', _: [
                            'A simple info alert with ',
                            { [Alert.Link]: { href: '#', _: 'an example link' } },
                            '. Give it a click if you like.',
                        ] } },
                        { [Alert]: { mode: 'light', _: [
                            'A simple light alert with ',
                            { [Alert.Link]: { href: '#', _: 'an example link' } },
                            '. Give it a click if you like.',
                        ] } },
                        { [Alert]: { mode: 'dark', _: [
                            'A simple dark alert with ',
                            { [Alert.Link]: { href: '#', _: 'an example link' } },
                            '. Give it a click if you like.',
                        ] } },
                    ]);
                }
                
                export default com(AlertsExample);
            `
        } },
    ]);
}

export default com(LinkColor);