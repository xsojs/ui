import com from '@xso/com';
import css from '@xso/css';

import {Alert} from '@xso/ui';

import ExampleBlock from "../../../components/ExampleBlock/index.js";

const style = {
    icon: {
        width: '1em', height: '1em', verticalAlign: '-.125em', fill: 'currentcolor'
    }
};

function Icons() {
    this.view(() => [
        { h3: { _: 'Icons' } },
        { p: { _: 'Similarly, you can use flexbox utilities and Bootstrap Icons to create alerts with icons. Depending on your icons and content, you may want to add more utilities or custom styles.' } },
        { [ExampleBlock]: {
            example: [
                { [Alert]: {
                    mode: 'primary',
                    class: 'd-flex align-items-center',
                    _: [
                        { svg: {
                            viewBox: '0 0 16 16',
                            class: 'bi flex-shrink-0 me-2',
                            style: {
                                width: '1em', height: '1em', verticalAlign: '-.125em', fill: 'currentcolor'
                            },
                            'aria-label': 'Warning',
                            role: 'img',
                            _: { path: {
                                d: 'M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'
                            } },
                        } },
                        'An example alert with an icon.',
                    ]
                } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Alert} from "@xso/ui";
                
                function AlertsExample() { 
                    this.view(() => [
                        { [Alert]: {
                            mode: 'primary',
                            class: 'd-flex align-items-center',
                            _: [
                                { svg: {
                                    viewBox: '0 0 16 16',
                                    class: 'bi flex-shrink-0 me-2',
                                    style: {
                                        width: '1em', height: '1em', verticalAlign: '-.125em', fill: 'currentcolor'
                                    },
                                    'aria-label': 'Warning',
                                    role: 'img',
                                    _: { path: {
                                        d: 'M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'
                                    } },
                                } },
                                'An example alert with an icon.',
                            ]
                        } },
                    ]);
                }
                
                export default com(AlertsExample);
            `
        } },
        { p: { _: 'Need more than one icon for your alerts? Consider using more Bootstrap Icons and making a local SVG sprite like so to easily reference the same icons repeatedly.' } },
        { [ExampleBlock]: {
            example: [
                { svg: {
                    class: 'd-none',
                    _: [
                        { symbol: {
                            id: 'check-circle-fill',
                            viewBox: '0 0 16 16',
                            _: {
                                path: {
                                    d: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'
                                }
                            }
                        } },
                        { symbol: {
                            id: 'info-fill',
                            viewBox: '0 0 16 16',
                            _: {
                                path: {
                                    d: 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'
                                }
                            }
                        } },
                        { symbol: {
                            id: 'exclamation-triangle-fill',
                            viewBox: '0 0 16 16',
                            _: {
                                path: {
                                    d: 'M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'
                                }
                            }
                        } },
                    ],
                } },
                { [Alert]: {
                    mode: 'primary',
                    class: 'd-flex align-items-center',
                    _: [
                        { svg: {
                            class: 'bi flex-shrink-0 me-2 '+ css(style.icon),
                            'aria-label': 'Info',
                            role: 'img',
                            _: { use: {
                                'href': '#info-fill'
                            } },
                        } },
                        'An example alert with an icon.',
                    ]
                } },
                { [Alert]: {
                    mode: 'success',
                    class: 'd-flex align-items-center',
                    _: [
                        { svg: {
                            class: 'bi flex-shrink-0 me-2 '+ css(style.icon),
                            'aria-label': 'Success',
                            role: 'img',
                            _: { use: {
                                'href': '#check-circle-fill'
                            } },
                        } },
                        'An example success alert with an icon.',
                    ]
                } },
                { [Alert]: {
                    mode: 'warning',
                    class: 'd-flex align-items-center',
                    _: [
                        { svg: {
                            class: 'bi flex-shrink-0 me-2 '+ css(style.icon),
                            'aria-label': 'Warning',
                            role: 'img',
                            _: { use: {
                                'href': '#exclamation-triangle-fill'
                            } },
                        } },
                        'An example warning alert with an icon.',
                    ]
                } },
                { [Alert]: {
                    mode: 'danger',
                    class: 'd-flex align-items-center',
                    _: [
                        { svg: {
                            class: 'bi flex-shrink-0 me-2 '+ css(style.icon),
                            'aria-label': 'Danger',
                            role: 'img',
                            _: { use: {
                                'href': '#exclamation-triangle-fill'
                            } },
                        } },
                        'An example danger alert with an icon.',
                    ]
                } },
            ],
            code: `
                import com from "@xso/com";
                import css from "@xso/css";
                
                import {Alert} from "@xso/ui";
                
                const style = {
                    icon: {
                        width: '1em', height: '1em', verticalAlign: '-.125em', fill: 'currentcolor'
                    }
                };
                
                function AlertsExample() { 
                    this.view(() => [
                        { svg: {
                            class: 'd-none',
                            _: [
                                { symbol: {
                                    id: 'check-circle-fill',
                                    viewBox: '0 0 16 16',
                                    _: {
                                        path: {
                                            d: 'M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z'
                                        }
                                    }
                                } },
                                { symbol: {
                                    id: 'info-fill',
                                    viewBox: '0 0 16 16',
                                    _: {
                                        path: {
                                            d: 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'
                                        }
                                    }
                                } },
                                { symbol: {
                                    id: 'exclamation-triangle-fill',
                                    viewBox: '0 0 16 16',
                                    _: {
                                        path: {
                                            d: 'M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z'
                                        }
                                    }
                                } },
                            ],
                        } },
                        { [Alert]: {
                            mode: 'primary',
                            class: 'd-flex align-items-center',
                            _: [
                                { svg: {
                                    class: 'bi flex-shrink-0 me-2 '+ css(style.icon),
                                    'aria-label': 'Info',
                                    role: 'img',
                                    _: { use: {
                                        'href': '#info-fill'
                                    } },
                                } },
                                'An example alert with an icon.',
                            ]
                        } },
                        { [Alert]: {
                            mode: 'success',
                            class: 'd-flex align-items-center',
                            _: [
                                { svg: {
                                    class: 'bi flex-shrink-0 me-2 '+ css(style.icon),
                                    'aria-label': 'Success',
                                    role: 'img',
                                    _: { use: {
                                        'href': '#check-circle-fill'
                                    } },
                                } },
                                'An example success alert with an icon.',
                            ]
                        } },
                        { [Alert]: {
                            mode: 'warning',
                            class: 'd-flex align-items-center',
                            _: [
                                { svg: {
                                    class: 'bi flex-shrink-0 me-2 '+ css(style.icon),
                                    'aria-label': 'Warning',
                                    role: 'img',
                                    _: { use: {
                                        'href': '#exclamation-triangle-fill'
                                    } },
                                } },
                                'An example warning alert with an icon.',
                            ]
                        } },
                        { [Alert]: {
                            mode: 'danger',
                            class: 'd-flex align-items-center',
                            _: [
                                { svg: {
                                    class: 'bi flex-shrink-0 me-2 '+ css(style.icon),
                                    'aria-label': 'Danger',
                                    role: 'img',
                                    _: { use: {
                                        'href': '#exclamation-triangle-fill'
                                    } },
                                } },
                                'An example danger alert with an icon.',
                            ]
                        } },
                    ]);
                }
                
                export default com(AlertsExample);
            `
        } },
    ]);
}

export default com(Icons);