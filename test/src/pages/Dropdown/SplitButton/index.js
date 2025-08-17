import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Dropdown, Button, ButtonGroup} from "@xso/ui";

function SplitButton() {
    this.view(() => [
        { h3: { _: 'Split button' } },
        { p: {_: 'Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of .dropdown-toggle-split for proper spacing around the dropdown caret.'} },
        { p: {_: 'We use this extra class to reduce the horizontal padding on either side of the caret by 25% and remove the margin-left that’s added for regular button dropdowns. Those extra changes keep the caret centered in the split button and provide a more appropriately sized hit area next to the main button.'} },
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
                                    _: label
                                } },
                                { [Button]: {
                                    mode,
                                    dropdownToggle: 'split',
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
                                        _: label
                                    } },
                                    { [Button]: {
                                        mode,
                                        dropdownToggle: 'split',
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

export default com(SplitButton);