import com from "@xso/com";

import Header from "./base/Header";
import Footer from "./base/Footer";
import Main from "./base/Main";
import {Route, Router} from "../../../router/src/main.js";
import Home from "./pages/Home";

// LAYOUT
import Grid from "./pages/Grid";
import Columns from "./pages/Columns";
import Gutters from "./pages/Gutters";

// CONTENT
import Typography from "./pages/Typography";
import Images from "./pages/Images";
import Tables from "./pages/Tables";

// FORMS
import FormControl from "./pages/FormControl";
import Select from "./pages/Select";
import ChecksRadios from "./pages/ChecksRadios";
import Range from "./pages/Range";
import InputGroup from "./pages/InputGroup";
import FloatingLabels from "./pages/FloatingLabels";
import FormLayout from "./pages/FormLayout";
import FormValidation from "./pages/FormValidation";

// COMPONENTS
import Alert from "./pages/Alert";
import Badge from "./pages/Badge";
import Breadcrumb from "./pages/Breadcrumb";
import Button from "./pages/Button";
import Dropdown from "./pages/Dropdown";

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

                        /**
                         * LAYOUT
                         */
                        { [Route]: {
                            path: '/grid',
                            component: Grid
                        } }, // Route
                        { [Route]: {
                            path: '/columns',
                            component: Columns
                        } }, // Route
                        { [Route]: {
                            path: '/gutters',
                            component: Gutters
                        } }, // Route

                        /**
                         * CONTENT
                         */
                        { [Route]: {
                            path: '/typography',
                            component: Typography
                        } }, // Route
                        { [Route]: {
                            path: '/images',
                            component: Images
                        } }, // Route
                        { [Route]: {
                            path: '/tables',
                            component: Tables
                        } }, // Route

                        /**
                         * FORMS
                         */
                        { [Route]: {
                            path: '/form-control',
                            component: FormControl
                        } }, // Route
                        { [Route]: {
                            path: '/select',
                            component: Select
                        } }, // Route
                        { [Route]: {
                            path: '/checks-radios',
                            component: ChecksRadios
                        } }, // Route
                        { [Route]: {
                            path: '/range',
                            component: Range
                        } }, // Route
                        { [Route]: {
                            path: '/input-group',
                            component: InputGroup
                        } }, // Route
                        { [Route]: {
                            path: '/floating-labels',
                            component: FloatingLabels
                        } }, // Route
                        { [Route]: {
                            path: '/form-layout',
                            component: FormLayout
                        } }, // Route
                        { [Route]: {
                            path: '/form-validation',
                            component: FormValidation
                        } }, // Route

                        /**
                         * COMPONENTS
                         */
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
                    ]
                } }, // Router
                { [Footer]: {} },
            ]
        } }, // Main
    ]);
}

export default com(App);