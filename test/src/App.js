import com from "@xso/com";

import Header from "./base/Header";
import Footer from "./base/Footer";
import Main from "./base/Main";
import {Route, Router} from "../../../router/src/main.js";
import Home from "./pages/Home";
import Alert from "./pages/Alert";
import Badge from "./pages/Badge";
import Breadcrumb from "./pages/Breadcrumb";
import Button from "./pages/Button";
import Dropdown from "./pages/Dropdown";
import Typography from "./pages/Typography";

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
                            path: '/alert',
                            component: Alert
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
                        { [Route]: {
                            path: '/dropdown',
                            component: Dropdown
                        } }, // Route
                        { [Route]: {
                            path: '/typography',
                            component: Typography
                        } }, // Route
                    ]
                } }, // Router
                { [Footer]: {} },
            ]
        } }, // Main
    ]);
}

export default com(App);