import com from "@xso/com";

import baseProps from "../utils/baseProps";

import { isArray } from "@xso/utils";

import Col from "./Col";

function Row(props) {
    const {
        alignItems = null, alignSelf = null,
        justifyContent = null, cols = null,
        gutters = null, guttersX = null, guttersY = null,
        noGutters = false, _
    } = props;
    if (isArray(_)) {
        for (const i of _) {
            com.ensureType(i, Col);
        }
    } else {
        com.ensureType(_, Col);
    }
    let cssClass = 'row';
    if (alignItems) {
        cssClass += ` align-items-${alignItems}`;
    }
    if (alignSelf) {
        cssClass += ` align-self-${alignSelf}`;
    }
    if (justifyContent) {
        cssClass += ` justify-content-${justifyContent}`;
    }
    for (const config of [
        { class: 'row-cols', value: cols},
        {class: 'g', value: gutters},
        {class: 'gx', value: guttersX},
        {class: 'gy', value: guttersY}
    ]) {
        if (config.value) {
            if (isNumber(config.value) || isString(config.value)) {
                cssClass += ` ${config.class}-${config.value}`;
            } else if (isObject(config.value)) {
                config.value = {...config.value};
                if (config.value.default) {
                    cssClass += ` ${config.class}-${config.value.default}`;
                    delete config.value.default;
                }
                for (const key of Object.keys(config.value)) {
                    cssClass += ` ${config.class}-${key}-${config.value[key]}`;
                }
            }
        }
    }
    if (noGutters) {
        cssClass += ` g-0`;
    }
    this.view(()=> [
        { div: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
}

export default com(Row);
