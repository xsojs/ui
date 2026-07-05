import com from "@xso/com";
import css from "@xso/css";
import { navigateTo } from "@xso/router";
import {Nav} from "@xso/ui";

import vars from "../../styles/vars.js";
import style from "./style.js";

function SubTopics() {
    const navRef = this.ref();
    const elements = this.state([]);

    this.setElements = (e) => {
        elements.$val = e;
    }

    const onScrollEvent = (e) => {
        const scrollTop = window.scrollY;
        navRef.current.childrenElements()[0].style.top = scrollTop + "px";
    }

    this.mount(() => {
        document.addEventListener("scroll", onScrollEvent, {
            passive: false,
            capture: false
        });
    });

    this.unmount(() => {
        document.removeEventListener("scroll", onScrollEvent);
    });

    this.postRender(() => {
        onScrollEvent();
    });

    const navLinkClick = (e, link) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
        });
        navigateTo(link);
    }

    this.view(() => [
        { aside: {
            class: 'px-3 pt-2 text-white '+ css(style.container),
            _: navRef.set({ [Nav]: {
                pills: true,
                class: 'mb-md-auto mb-0 align-items-md-start '+ css(style.nav),
                _: [
                    elements.val.map((element) => {
                        return { [Nav.Item]: {
                            _: { [Nav.Link]: {
                                    class: 'px-0',
                                    href: '#',
                                    onClick: (e)=> {
                                        e.preventDefault();
                                        window.scrollTo({
                                            top: element.offsetTop - 20 - parseInt(vars.header.height.replace("px", "")),
                                            behavior: 'instant',
                                        });
                                    },
                                    _: element.innerText,
                                } } // Nav.Link
                        } };
                    }), // Nav.Item
                ]
            }}) // Nav
        } } // div
    ]);
}

export default com(SubTopics);