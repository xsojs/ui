import com from '@xso/com';
import ExampleBlock from "../../components/ExampleBlock/index.js";
import {Breadcrumb} from "@xso/ui";

function BreadcrumbPage() {
    this.view(() => [
        { h1: { _: 'Breadcrumb' } },
        { p: { _: 'Indicate the current page’s location within a navigational hierarchy that automatically adds separators via CSS.' } },
        { h3: { _: 'Example' } },
        { p: { _: 'Use an ordered or unordered list with linked list items to create a minimally styled breadcrumb. Use our utilities to add additional styles as desired.' } },
        { [ExampleBlock]: {
            example: [
                { [Breadcrumb]: {
                    _: [
                        { [Breadcrumb.Item]: { active: true, _: 'Home' } },
                    ]
                } },
                { [Breadcrumb]: {
                    _: [
                        { [Breadcrumb.Item]: {
                            _: { a: { href: '#', _: 'Home' } }
                        } },
                        { [Breadcrumb.Item]: { active: true, _: 'Library' } },
                    ]
                } },
                { [Breadcrumb]: {
                    _: [
                        { [Breadcrumb.Item]: {
                            _: { a: { href: '#', _: 'Home' } }
                        } },
                        { [Breadcrumb.Item]: {
                            _: { a: { href: '#', _: 'Library' } }
                        } },
                        { [Breadcrumb.Item]: { active: true, _: 'Data' } },
                    ]
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Breadcrumb} from "@xso/ui";
            
            function BreadcrumbExample() { 
                this.view(() => [
                    { [Breadcrumb]: {
                        _: [
                            { [Breadcrumb.Item]: { active: true, _: 'Home' } },
                        ]
                    } },
                    { [Breadcrumb]: {
                        _: [
                            { [Breadcrumb.Item]: {
                                _: { a: { href: '#', _: 'Home' } }
                            } },
                            { [Breadcrumb.Item]: { active: true, _: 'Library' } },
                        ]
                    } },
                    { [Breadcrumb]: {
                        _: [
                            { [Breadcrumb.Item]: {
                                _: { a: { href: '#', _: 'Home' } }
                            } },
                            { [Breadcrumb.Item]: {
                                _: { a: { href: '#', _: 'Library' } }
                            } },
                            { [Breadcrumb.Item]: { active: true, _: 'Data' } },
                        ]
                    } },
                ]);
            }
            
            export default com(BreadcrumbExample);
        `
        } },
        { h3: { _: 'Dividers' } },
        { p: { _: 'Dividers are automatically added in CSS through ::before and content. They can be changed by modifying a local CSS custom property --bs-breadcrumb-divider.' } },
        { [ExampleBlock]: {
            example: [
                { [Breadcrumb]: {
                    style: { '--bs-breadcrumb-divider': `'>'` },
                    _: [
                        { [Breadcrumb.Item]: {
                            _: { a: { href: '#', _: 'Home' } }
                        } },
                        { [Breadcrumb.Item]: { active: true, _: 'Library' } },
                    ]
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Breadcrumb} from "@xso/ui";
            
            function BreadcrumbExample() { 
                this.view(() => [
                    { [Breadcrumb]: {
                        style: { '--bs-breadcrumb-divider': \`'>'\` },
                        _: [
                            { [Breadcrumb.Item]: {
                                _: { a: { href: '#', _: 'Home' } }
                            } },
                            { [Breadcrumb.Item]: { active: true, _: 'Library' } },
                        ]
                    } },
                ]);
            }
            
            export default com(BreadcrumbExample);
        `
        } },
        { p: { _: 'It\'s also possible to use an embedded SVG icon. Apply it via our CSS custom property:' } },
        { [ExampleBlock]: {
            example: [
                { [Breadcrumb]: {
                    style: {
                        '--bs-breadcrumb-divider': (
                            'url("data:image/svg+xml,' + encodeURI(`
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8">
                                    <path d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="#6c757d"/>
                                </svg>
                            `).replaceAll('#', '%23') + '")'
                        )
                    },
                    _: [
                        { [Breadcrumb.Item]: {
                                _: { a: { href: '#', _: 'Home' } }
                            } },
                        { [Breadcrumb.Item]: { active: true, _: 'Library' } },
                    ]
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Breadcrumb} from "@xso/ui";
            
            function BreadcrumbExample() { 
                this.view(() => [
                    { [Breadcrumb]: {
                        style: {
                            '--bs-breadcrumb-divider': (
                                'url("data:image/svg+xml,' + encodeURI(\`
                                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8">
                                        <path d="M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z" fill="#6c757d"/>
                                    </svg>
                                \`).replaceAll('#', '%23') + '")'
                            )
                        },
                        _: [
                            { [Breadcrumb.Item]: {
                                _: { a: { href: '#', _: 'Home' } }
                            } },
                            { [Breadcrumb.Item]: { active: true, _: 'Library' } },
                        ]
                    } },
                ]);
            }
            
            export default com(BreadcrumbExample);
        `
        } },
        { p: { _: 'You can also remove the divider setting --bs-breadcrumb-divider: \'\'; (empty strings in CSS custom properties counts as a value).' } },
        { [ExampleBlock]: {
            example: [
                { [Breadcrumb]: {
                    style: { '--bs-breadcrumb-divider': `''` },
                    _: [
                        { [Breadcrumb.Item]: {
                                _: { a: { href: '#', _: 'Home' } }
                            } },
                        { [Breadcrumb.Item]: { active: true, _: 'Library' } },
                    ]
                } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Breadcrumb} from "@xso/ui";
                
                function BreadcrumbExample() { 
                    this.view(() => [
                        { [Breadcrumb]: {
                            style: { '--bs-breadcrumb-divider': \`''\` },
                            _: [
                                { [Breadcrumb.Item]: {
                                    _: { a: { href: '#', _: 'Home' } }
                                } },
                                { [Breadcrumb.Item]: { active: true, _: 'Library' } },
                            ]
                        } },
                    ]);
                }
                
                export default com(BreadcrumbExample);
            `
        } },
    ]);
}

export default com(BreadcrumbPage);