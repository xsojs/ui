import com from "@xso/com";
import { navigateTo } from "@xso/router";
import {Nav} from "@xso/ui";

function SideMenu() {
    this.view(() => [
        { div: {
            class: 'd-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100',
            _: { [Nav]: {
                pills: true,
                class: 'flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start',
                _: [
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: 'align-middle px-0',
                            href: '/alert',
                            onClick: (e)=> { e.preventDefault(); navigateTo('/alert'); },
                            _: 'Alert',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: 'align-middle px-0',
                            href: '/badge',
                            onClick: (e)=> { e.preventDefault(); navigateTo('/badge'); },
                            _: 'Badge',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                                class: 'align-middle px-0',
                                href: '/breadcrumb',
                                onClick: (e)=> { e.preventDefault(); navigateTo('/breadcrumb'); },
                                _: 'Breadcrumb',
                            } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: 'align-middle px-0',
                            href: '/button',
                            onClick: (e)=> { e.preventDefault(); navigateTo('/button'); },
                            _: 'Button',
                        } } // Nav.Link
                    } }, // Nav.Item
                    { [Nav.Item]: {
                        _: { [Nav.Link]: {
                            class: 'align-middle px-0',
                            href: '/typography',
                            _: 'Typography',
                        } } // Nav.Link
                    } }, // Nav.Item
                ]
            }} // Nav
        } } // div
    ]);
}

export default com(SideMenu);