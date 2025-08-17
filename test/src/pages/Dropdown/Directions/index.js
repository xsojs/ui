import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Dropdown, Button, ButtonGroup} from "@xso/ui";

function Directions() {
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
            { h3: { _: 'Directions' } },
            { p: {_: 'Directions are flipped in RTL mode. As such, .dropstart will appear on the right side.'} },
            { h4: { _: 'Centered' } },
            { p: {_: 'Make the dropdown menu centered below the toggle with .dropdown-center on the parent element.'} },
            { [ExampleBlock]: {
                example: [
                    { [Dropdown]: {
                        center: true,
                        _: [
                            { [Button]: {
                                mode: 'secondary',
                                dropdownToggle: true,
                                _: 'Example of a centered dropdown'
                            } },
                            dropdownMenu
                        ]
                    } },
                ],
                code: `
                import com from "@xso/com";
                
                import {Dropdown, Button, ButtonGroup} from "@xso/ui";
                
                function DropdownExample() { 
                    this.view(() => [
                        { [Dropdown]: {
                            center: true,
                            _: [
                                { [Button]: {
                                    mode: 'secondary',
                                    dropdownToggle: true,
                                    _: 'Example of a centered dropdown'
                                } },
                                // Dropdown menu here...
                            ]
                        } },
                    ]);
                }
                
                export default com(DropdownExample);
            `
            } },
            { h4: { _: 'Dropup' } },
            { p: {_: 'Trigger dropdown menus above elements by adding .dropup to the parent element.'} },
            { [ExampleBlock]: {
                example: [
                    { [ButtonGroup]: {
                            drop: 'up',
                            _: [
                                { [Button]: {
                                        mode: 'secondary',
                                        dropdownToggle: true,
                                        _: 'Dropup'
                                    } },
                                dropdownMenu
                            ]
                        } },
                    ' ',
                    { [ButtonGroup]: {
                            drop: 'up',
                            _: [
                                { [Button]: {
                                    mode: 'secondary',
                                    _: 'Split dropup'
                                } },
                                { [Button]: {
                                    mode: 'secondary',
                                    dropdownToggle: 'split'
                                } },
                                dropdownMenu
                            ]
                        } },
                ],
                code: `
                    import com from "@xso/com";
                    
                    import {Dropdown, Button, ButtonGroup} from "@xso/ui";
                    
                    function DropdownExample() { 
                        this.view(() => [
                            { [ButtonGroup]: {
                                drop: 'up',
                                _: [
                                    { [Button]: {
                                        mode: 'secondary',
                                        dropdownToggle: true,
                                        _: 'Dropup'
                                    } },
                                    // Dropdown menu here...
                                ]
                            } },
                            ' ',
                            { [ButtonGroup]: {
                                drop: 'up',
                                _: [
                                    { [Button]: {
                                        mode: 'secondary',
                                        _: 'Split dropup'
                                    } },
                                    { [Button]: {
                                        mode: 'secondary',
                                        dropdownToggle: 'split'
                                    } },
                                    // Dropdown menu here...
                                ]
                            } },
                        ]);
                    }
                    
                    export default com(DropdownExample);
                `
            } },
            { h4: { _: 'Dropup centered' } },
            { p: {_: 'Make the dropup menu centered above the toggle with .dropup-center on the parent element.'} },
            { [ExampleBlock]: {
                example: [
                    { [ButtonGroup]: {
                        drop: 'up-center',
                        _: [
                            { [Button]: {
                                mode: 'secondary',
                                dropdownToggle: true,
                                _: 'Example of centered dropup'
                            } },
                            dropdownMenu
                        ]
                    } },
                ],
                code: `
                    import com from "@xso/com";
                    
                    import {Dropdown, Button, ButtonGroup} from "@xso/ui";
                    
                    function DropdownExample() { 
                        this.view(() => [
                            { [ButtonGroup]: {
                                drop: 'up-center',
                                _: [
                                    { [Button]: {
                                        mode: 'secondary',
                                        dropdownToggle: true,
                                        _: 'Example of centered dropup'
                                    } },
                                    // Dropdown menu here...
                                ]
                            } }
                        ]);
                    }
                    
                    export default com(DropdownExample);
                `
            } },
            { h4: { _: 'Dropend' } },
            { p: {_: 'Trigger dropdown menus at the right of the elements by adding .dropend to the parent element.'} },
            { [ExampleBlock]: {
                example: [
                    { [ButtonGroup]: {
                        drop: 'end',
                        _: [
                            { [Button]: {
                                    mode: 'secondary',
                                    dropdownToggle: true,
                                    _: 'Dropend'
                                } },
                            dropdownMenu
                        ]
                    } },
                    ' ',
                    { [ButtonGroup]: {
                        drop: 'end',
                        _: [
                            { [Button]: {
                                mode: 'secondary',
                                _: 'Split dropend'
                            } },
                            { [Button]: {
                                mode: 'secondary',
                                dropdownToggle: 'split'
                            } },
                            dropdownMenu
                        ]
                    } },
                ],
                code: `
                import com from "@xso/com";
                
                import {Dropdown, Button, ButtonGroup} from "@xso/ui";
                
                function DropdownExample() { 
                    this.view(() => [
                        { [ButtonGroup]: {
                            drop: 'end',
                            _: [
                                { [Button]: {
                                    mode: 'secondary',
                                    dropdownToggle: true,
                                    _: 'Dropend'
                                } },
                                // Dropdown menu here...
                            ]
                        } },
                        ' ',
                        { [ButtonGroup]: {
                            drop: 'end',
                            _: [
                                { [Button]: {
                                    mode: 'secondary',
                                    _: 'Split dropend'
                                } },
                                { [Button]: {
                                    mode: 'secondary',
                                    dropdownToggle: 'split'
                                } },
                                // Dropdown menu here...
                            ]
                        } },
                    ]);
                }
                
                export default com(DropdownExample);
            `
            } },
            { h4: { _: 'Dropstart' } },
            { p: {_: 'Trigger dropdown menus at the left of the elements by adding .dropstart to the parent element.'} },
            { [ExampleBlock]: {
                example: [
                    { [ButtonGroup]: {
                        drop: 'start',
                        _: [
                            { [Button]: {
                                mode: 'secondary',
                                dropdownToggle: true,
                                _: 'Dropstart'
                            } },
                            dropdownMenu
                        ]
                    } },
                    ' ',
                    { [ButtonGroup]: {
                        drop: 'start',
                        _: [
                            { [Button]: {
                                mode: 'secondary',
                                dropdownToggle: 'split'
                            } },
                            dropdownMenu,
                            { [Button]: {
                                mode: 'secondary',
                                _: 'Split dropstart'
                            } }
                        ]
                    } },
                ],
                code: `
                import com from "@xso/com";
                
                import {Dropdown, Button, ButtonGroup} from "@xso/ui";
                
                function DropdownExample() { 
                    this.view(() => [
                        { [ButtonGroup]: {
                            drop: 'start',
                            _: [
                                { [Button]: {
                                    mode: 'secondary',
                                    dropdownToggle: true,
                                    _: 'Dropstart'
                                } },
                                // Dropdown menu here...
                            ]
                        } },
                        ' ',
                        { [ButtonGroup]: {
                            drop: 'start',
                            _: [
                                { [Button]: {
                                    mode: 'secondary',
                                    dropdownToggle: 'split'
                                } },
                                // Dropdown menu here...,
                                { [Button]: {
                                    mode: 'secondary',
                                    _: 'Split dropstart'
                                } }
                            ]
                        } },
                    ]);
                }
                
                export default com(DropdownExample);
            `
            } },
        ]
    });
}

export default com(Directions);