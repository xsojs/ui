import com from "@xso/com";

import baseProps from "../utils/baseProps";
import {isObject} from "@xso/utils";

function Bar(props) {
    const { expand, bgTertiary, _ } = props;
    let cssClass = 'navbar';
    if (isObject(expand)) {
        if (expand.xs) {
            cssClass += ' navbar-expand-xs';
        }
        if (expand.sm) {
            cssClass += ' navbar-expand-sm';
        }
        if (expand.md) {
            cssClass += ' navbar-expand-md';
        }
        if (expand.lg) {
            cssClass += ' navbar-expand-lg';
        }
        if (expand.xl) {
            cssClass += ' navbar-expand-xl';
        }
        if (expand.xxl) {
            cssClass += ' navbar-expand-xxl';
        }
    }
    if (bgTertiary) {
        cssClass += ' bg-body-tertiary';
    }
    this.view(()=> [
        { nav: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
}

export default com(Bar);