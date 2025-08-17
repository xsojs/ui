import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Dropdown, Button, ButtonGroup} from "@xso/ui";

function Sizing() {
    this.view(() => {
        const dropdownMenu = { [Dropdown.Menu]: {
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
        } };
        return [
            { h3: { _: 'Sizing' } },
            { p: {_: 'Button dropdowns work with buttons of all sizes, including default and split dropdown buttons.'} },
            { [ExampleBlock]: {
                example: [
                    { [ButtonGroup]: {
                        _: [
                            { [Button]: {
                                mode: 'secondary',
                                size: 'large',
                                dropdownToggle: true,
                                _: 'Large button'
                            } },
                            dropdownMenu
                        ]
                    } },
                    { span: { $: '&nbsp;' } },
                    { [ButtonGroup]: {
                        _: [
                            { [Button]: {
                                mode: 'secondary',
                                size: 'lg',
                                _: 'Large split button'
                            } },
                            { [Button]: {
                                mode: 'secondary',
                                size: 'lg',
                                dropdownToggle: 'split',
                            } },
                            dropdownMenu
                        ]
                    } },
                ],
                code: `
                import com from "@xso/com";
                
                import {Dropdown, Button, ButtonGroup} from "@xso/ui";
                
                function DropdownExample() { 
                    this.view(() => {
                        const dropdownMenu = { [Dropdown.Menu]: {
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
                        } };
                        return  [
                            { [ButtonGroup]: {
                                _: [
                                    { [Button]: {
                                        mode: 'secondary',
                                        size: 'large',
                                        dropdownToggle: true,
                                        _: 'Large button'
                                    } },
                                    dropdownMenu
                                ]
                            } },
                            { span: { $: '&nbsp;' } },
                            { [ButtonGroup]: {
                                _: [
                                    { [Button]: {
                                        mode: 'secondary',
                                        size: 'lg',
                                        _: 'Large split button'
                                    } },
                                    { [Button]: {
                                        mode: 'secondary',
                                        size: 'lg',
                                        dropdownToggle: 'split',
                                    } },
                                    dropdownMenu
                                ]
                            } },
                        ]
                    });
                }
                
                export default com(DropdownExample);
            `
            } },
            { [ExampleBlock]: {
                example: [
                    { [ButtonGroup]: {
                        _: [
                            { [Button]: {
                                mode: 'secondary',
                                size: 'small',
                                dropdownToggle: true,
                                _: 'Small button'
                            } },
                            dropdownMenu
                        ]
                    } },
                    { span: { $: '&nbsp;' } },
                    { [ButtonGroup]: {
                        _: [
                            { [Button]: {
                                mode: 'secondary',
                                size: 'sm',
                                _: 'Small split button'
                            } },
                            { [Button]: {
                                mode: 'secondary',
                                size: 'sm',
                                dropdownToggle: 'split',
                            } },
                            dropdownMenu
                        ]
                    } },
                ],
                code: `
                    import com from "@xso/com";
                    
                    import {Dropdown, Button, ButtonGroup} from "@xso/ui";
                    
                    function DropdownExample() { 
                        this.view(() => {
                            const dropdownMenu = { [Dropdown.Menu]: {
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
                            } };
                            return  [
                                { [ButtonGroup]: {
                                    _: [
                                        { [Button]: {
                                            mode: 'secondary',
                                            size: 'small',
                                            dropdownToggle: true,
                                            _: 'Small button'
                                        } },
                                        dropdownMenu
                                    ]
                                } },
                                { span: { $: '&nbsp;' } },
                                { [ButtonGroup]: {
                                    _: [
                                        { [Button]: {
                                            mode: 'secondary',
                                            size: 'sm',
                                            _: 'Small split button'
                                        } },
                                        { [Button]: {
                                            mode: 'secondary',
                                            size: 'sm',
                                            dropdownToggle: 'split',
                                        } },
                                        dropdownMenu
                                    ]
                                } },
                            ]
                        });
                    }
                    
                    export default com(DropdownExample);
                `
            } },
        ]
    });
}

export default com(Sizing);