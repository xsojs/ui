import com from "@xso/com";
import css from "@xso/css";

import { Router, Route } from "@xso/router";

import Home from '../../pages/Home';

import styles from "./styles";

function Main() {
    this.view(()=> [
        { main: {
            class: css(styles.main),
            _: [
                { [Router]: {
                    routes: [
                        { [Route]: {
                            path: '/',
                            component: Home
                        } }
                    ]
                } }
            ]
        } }
    ]);
}

export default com(Main);
