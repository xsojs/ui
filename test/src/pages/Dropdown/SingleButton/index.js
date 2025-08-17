import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Dropdown, Button, ButtonGroup} from "@xso/ui";

function SingleButton() {
    this.view(() => [
        { h3: { _: 'Single button' } },
        { p: {_: 'Any single .btn can be turned into a dropdown toggle with some markup changes. Here’s how you can put them to work with <button> elements:'} },
        { [ExampleBlock]: {
            example: [
                { [Dropdown]: {
                    _: [
                        { [Button]: {
                            dropdownToggle: true,
                            _: 'Dropdown button'
                        } },
                        { [Dropdown.Menu]: {
                            _: [
                                { [Dropdown.Menu.Item]: {
                                    _: { [Dropdown.Menu.Link]: {
                                        href: '#',
                                        _: 'Action'
                                    } }
                                } },
                                { [Dropdown.Menu.Item]: {
                                    _: { [Dropdown.Menu.Link]: {
                                        href: '#',
                                        _: 'Another action'
                                    } }
                                } },
                                { [Dropdown.Menu.Item]: {
                                    _: { [Dropdown.Menu.Link]: {
                                        href: '#',
                                        _: 'Something else here'
                                    } }
                                } },
                            ]
                        } },
                    ]
                } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Dropdown, Button} from "@xso/ui";
                
                function DropdownExample() { 
                    this.view(() => [
                        { [Dropdown]: {
                            _: [
                                { [Button]: {
                                    dropdownToggle: true,
                                    _: 'Dropdown button'
                                } },
                                { [Dropdown.Menu]: {
                                    _: [
                                        { [Dropdown.Menu.Item]: {
                                            _: { [Dropdown.Menu.Link]: {
                                                href: '#',
                                                _: 'Action'
                                            } }
                                        } },
                                        { [Dropdown.Menu.Item]: {
                                            _: { [Dropdown.Menu.Link]: {
                                                href: '#',
                                                _: 'Another action'
                                            } }
                                        } },
                                        { [Dropdown.Menu.Item]: {
                                            _: { [Dropdown.Menu.Link]: {
                                                href: '#',
                                                _: 'Something else here'
                                            } }
                                        } },
                                    ]
                                } },
                            ]
                        } },
                    ]);
                }
                
                export default com(DropdownExample);
            `
        } },
        { p: {_: 'While <button> is the recommended control for a dropdown toggle, there might be situations where you have to use an <a> element. If you do, we recommend adding a role="button" attribute to appropriately convey control’s purpose to assistive technologies such as screen readers.'} },
        { [ExampleBlock]: {
            example: [
                { [Dropdown]: {
                    _: [
                        { [Button]: {
                            tag: 'a',
                            dropdownToggle: true,
                            href: '#',
                            _: 'Dropdown button'
                        } },
                        { [Dropdown.Menu]: {
                            _: [
                                { [Dropdown.Menu.Item]: {
                                    _: { [Dropdown.Menu.Link]: {
                                        href: '#',
                                        _: 'Action'
                                    } }
                                } },
                                { [Dropdown.Menu.Item]: {
                                    _: { [Dropdown.Menu.Link]: {
                                        href: '#',
                                        _: 'Another action'
                                    } }
                                } },
                                { [Dropdown.Menu.Item]: {
                                    _: { [Dropdown.Menu.Link]: {
                                        href: '#',
                                        _: 'Something else here'
                                    } }
                                } },
                            ]
                        } },
                    ]
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Dropdown, Button} from "@xso/ui";
            
            function DropdownExample() { 
                this.view(() => [
                    { [Dropdown]: {
                        _: [
                            { [Button]: {
                                tag: 'a',
                                dropdownToggle: true,
                                href: '#',
                                _: 'Dropdown button'
                            } },
                            { [Dropdown.Menu]: {
                                _: [
                                    { [Dropdown.Menu.Item]: {
                                        _: { [Dropdown.Menu.Link]: {
                                            href: '#',
                                            _: 'Action'
                                        } }
                                    } },
                                    { [Dropdown.Menu.Item]: {
                                        _: { [Dropdown.Menu.Link]: {
                                            href: '#',
                                            _: 'Another action'
                                        } }
                                    } },
                                    { [Dropdown.Menu.Item]: {
                                        _: { [Dropdown.Menu.Link]: {
                                            href: '#',
                                            _: 'Something else here'
                                        } }
                                    } },
                                ]
                            } },
                        ]
                    } },
                ]);
            }
            
            export default com(DropdownExample);
        `
        } },
        { p: {_: 'The best part is you can do this with any button variant, too:'} },
        { [ExampleBlock]: {
            example: [
                [
                    { label: 'Primary', mode: 'primary' },
                    { label: 'Secondary', mode: 'secondary' },
                    { label: 'Success', mode: 'success' },
                    { label: 'Info', mode: 'info' },
                    { label: 'Warning', mode: 'warning' },
                    { label: 'Danger', mode: 'danger' },
                ].map(
                    ({ label, mode }) => [
                        { [ButtonGroup]: {
                            _: [
                                { [Button]: {
                                    mode,
                                    dropdownToggle: true,
                                    _: label
                                } },
                                { [Dropdown]: {
                                    _: { [Dropdown.Menu]: {
                                        _: [
                                            { [Dropdown.Menu.Item]: {
                                                _: { [Dropdown.Menu.Link]: {
                                                    href: '#',
                                                    _: 'Action'
                                                } }
                                            } },
                                            { [Dropdown.Menu.Item]: {
                                                _: { [Dropdown.Menu.Link]: {
                                                    href: '#',
                                                    _: 'Another action'
                                                } }
                                            } },
                                            { [Dropdown.Menu.Item]: {
                                                _: { [Dropdown.Menu.Link]: {
                                                    href: '#',
                                                    _: 'Something else here'
                                                } }
                                            } },
                                            { [Dropdown.Menu.Divider]: { } },
                                            { [Dropdown.Menu.Item]: {
                                                _: { [Dropdown.Menu.Link]: {
                                                    href: '#',
                                                    _: 'Separated link'
                                                } }
                                            } },
                                        ]
                                    } },
                                } }
                            ]
                        } },
                        { span: { $: '&nbsp;' } },
                    ]
                )
            ],
            code: `
            import com from "@xso/com";
            
            import {Dropdown, Button, ButtonGroup} from "@xso/ui";
            
            function DropdownExample() { 
                this.view(() => [
                    [
                        { label: 'Primary', mode: 'primary' },
                        { label: 'Secondary', mode: 'secondary' },
                        { label: 'Success', mode: 'success' },
                        { label: 'Info', mode: 'info' },
                        { label: 'Warning', mode: 'warning' },
                        { label: 'Danger', mode: 'danger' },
                    ].map(
                        ({ label, mode }) => [
                            { [ButtonGroup]: {
                                _: [
                                    { [Button]: {
                                        mode,
                                        dropdownToggle: true,
                                        _: label
                                    } },
                                    { [Dropdown]: {
                                        _: { [Dropdown.Menu]: {
                                            _: [
                                                { [Dropdown.Menu.Item]: {
                                                    _: { [Dropdown.Menu.Link]: {
                                                        href: '#',
                                                        _: 'Action'
                                                    } }
                                                } },
                                                { [Dropdown.Menu.Item]: {
                                                    _: { [Dropdown.Menu.Link]: {
                                                        href: '#',
                                                        _: 'Another action'
                                                    } }
                                                } },
                                                { [Dropdown.Menu.Item]: {
                                                    _: { [Dropdown.Menu.Link]: {
                                                        href: '#',
                                                        _: 'Something else here'
                                                    } }
                                                } },
                                                { [Dropdown.Menu.Divider]: { } },
                                                { [Dropdown.Menu.Item]: {
                                                    _: { [Dropdown.Menu.Link]: {
                                                        href: '#',
                                                        _: 'Separated link'
                                                    } }
                                                } },
                                            ]
                                        } },
                                    } }
                                ]
                            } },
                            { span: { $: '&nbsp;' } },
                        ]
                    )
                ]);
            }
            
            export default com(DropdownExample);
        `
        } },
    ]);
}

export default com(SingleButton);