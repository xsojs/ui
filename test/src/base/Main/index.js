import com from "@xso/com";
import css from "@xso/css";
import {Router} from "@xso/router";

import SideMenu from '../SideMenu';
import SubTopics from '../SubTopics';

import {Container, Row, Col} from "@xso/ui";

import style from "./style.js";

function Main({_}) {
    const mainRef = this.ref();
    const subTopicsRef = this.ref();
    const routerOnChange = (path) => {
        window.setTimeout(() => {
            const elements = mainRef.current.querySelectorAll("h3");
            subTopicsRef.current.setElements([...elements]);
        }, 0);
    };
    this.mount(() => {
        Router.addOnChange(routerOnChange)
    });
    this.unmount(() => {
        Router.removeOnChange(routerOnChange);
    });
    this.view(()=> {
        return [
            {[SideMenu]: {}},
            mainRef.set({ main: {
                class: css(style.main),
                _
            } }), // Main
            subTopicsRef.set({[SubTopics]: {}})
        ];
    });
}

export default com(Main);
