import com from "@xso/com";

import { isObject } from "@xso/utils";

import baseProps from "../utils/baseProps";

const Floating = com(function Floating(props) {
    const {
        responsive = null, ariaLabel = null,
        _
    } = props;
    let cssClass = 'form-floating';
    if (isObject(responsive)) {
        if (responsive.xs) {
            cssClass += ' xs-'+ responsive.xs;
        }
        if (responsive.sm) {
            cssClass += ' sm-'+ responsive.sm;
        }
        if (responsive.md) {
            cssClass += ' md-'+ responsive.md;
        }
        if (responsive.lg) {
            cssClass += ' lg-'+ responsive.lg;
        }
        if (responsive.xl) {
            cssClass += ' xl-'+ responsive.xl;
        }
        if (responsive.xxl) {
            cssClass += ' xxl-'+ responsive.xxl;
        }
    }
    this.view(()=> [
        { div: {
                ...baseProps(props, { class: cssClass }),
                _
        } }
    ]);
});

export default Floating;