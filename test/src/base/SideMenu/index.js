import com from "@xso/com";
import { navigateTo } from "@xso/router";
import {Nav} from "@xso/ui";

const classNavTitle = 'mt-5 px-0';
const classNavLink = 'px-0';

function SideMenu() {

    const navLinkClick = (e, link) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
        });
        navigateTo(link);
    }
    this.view(() => [
        { div: {
            class: 'd-flex flex-column align-items-md-start px-3 pt-2 text-white min-vh-100',
            _: { [Nav]: {
                pills: true,
                class: 'flex-column mb-md-auto mb-0 align-items-md-start',
                _: [
                    { [Nav.Item]: {
                        _: { h6: {
                            class: classNavTitle,
                            _: 'Layout',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/grid',
                            onClick: (e)=> { navLinkClick(e, '/grid'); },
                            _: 'Grid',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/columns',
                            onClick: (e)=> { navLinkClick(e, '/columns'); },
                            _: 'Columns',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/gutters',
                            onClick: (e)=> { navLinkClick(e, '/gutters'); },
                            _: 'Gutters',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { h6: {
                            class: 'mt-5 px-0',
                            _: 'Content',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/typography',
                            _: 'Typography',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/images',
                            onClick: (e)=> { navLinkClick(e, '/images'); },
                            _: 'Images',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/tables',
                            onClick: (e)=> { navLinkClick(e, '/tables'); },
                            _: 'Tables',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { h6: {
                            class: classNavTitle,
                            _: 'Forms',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/form-control',
                            onClick: (e)=> { navLinkClick(e, '/form-control'); },
                            _: 'Form control',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/select',
                            onClick: (e)=> { navLinkClick(e, '/select'); },
                            _: 'Select',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/checks-radios',
                            onClick: (e)=> { navLinkClick(e, '/checks-radios'); },
                            _: 'Checks & radios',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/range',
                            onClick: (e)=> { navLinkClick(e, '/range'); },
                            _: 'Range',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/input-group',
                            onClick: (e)=> { navLinkClick(e, '/input-group'); },
                            _: 'Input group',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/floating-labels',
                            onClick: (e)=> { navLinkClick(e, '/floating-labels'); },
                            _: 'Floating labels',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/form-layout',
                            onClick: (e)=> { navLinkClick(e, '/form-layout'); },
                            _: 'Form layout',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/form-validation',
                            onClick: (e)=> { navLinkClick(e, '/form-validation'); },
                            _: 'Form validation',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { h6: {
                            class: classNavTitle,
                            _: 'Components',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/alert',
                            onClick: (e)=> { navLinkClick(e, '/alert'); },
                            _: 'Alert',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/badge',
                            onClick: (e)=> { navLinkClick(e, '/badge'); },
                            _: 'Badge',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                                class: classNavLink,
                                href: '/breadcrumb',
                                onClick: (e)=> { navLinkClick(e, '/breadcrumb'); },
                                _: 'Breadcrumb',
                            } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: classNavLink,
                            href: '/button',
                            onClick: (e)=> { navLinkClick(e, '/button'); },
                            _: 'Button',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                                class: classNavLink,
                                href: '/dropdown',
                                onClick: (e)=> { navLinkClick(e, '/dropdown'); },
                                _: 'Dropdown',
                            } } // Nav.Link
                    } }, // Nav.Item
                ]
            }} // Nav
        } } // div
    ]);
}

export default com(SideMenu);