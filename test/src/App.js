import com from "@xso/com";

import Header from "./base/Header";
import Footer from "./base/Footer";
import Main from "./base/Main";
import {Route, Router} from "../../../router/src/main.js";
import Home from "./pages/Home";
import Badge from "./pages/Badge";
import Breadcrumb from "./pages/Breadcrumb";
import Button from "./pages/Button";

function App() {
    this.view(() => [
        { [Header]: {} },
        { [Main]: {
            _: [
                { [Router]: {
                    routes: [
                        { [Route]: {
                            path: '/',
                            component: Home
                        } }, // Route
                        { [Route]: {
                            path: '/badge',
                            component: Badge
                        } }, // Route
                        { [Route]: {
                            path: '/breadcrumb',
                            component: Breadcrumb
                        } }, // Route
                        { [Route]: {
                                path: '/button',
                                component: Button
                            } }, // Route
                    ]
                } }, // Router
                { [Footer]: {} },
            ]
        } }, // Main
    ]);
}

export default com(App);