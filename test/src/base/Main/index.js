import com from "@xso/com";
import css from "@xso/css";

import { Router, Route } from "@xso/router";

import SideMenu from '../SideMenu';
import Home from '../../pages/Home';

import style from "./style.js";
import {Container, Row, Col} from "@xso/ui";

function Main({_}) {
    this.view(()=> [
        { [Container]: {
            fluid: true,
            _: { [Row]: {
                class: 'flex-nowrap',
                _: [
                    { [Col]: {
                        auto: true,
                        span: {md: 4, xl: 2, sm: 3},
                        class: 'px-md-2 px-0 bg-dark',
                        _: { [SideMenu]: { } }
                    } }, // Col
                    { [Col]: {
                        _: { main: {
                            class: css(style.main),
                            _
                        } } // main
                    } } // Col
                ]
            } } // Row
        } }, // Container
    ]);
}

export default com(Main);
