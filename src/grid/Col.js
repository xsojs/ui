import com from "@xso/com";

import { isBoolean, isNumber, isObject, isString } from "@xso/utils";

import baseProps from "../utils/baseProps";

function Col(props) {
    let {
        span = null, offset = null, auto = null,
        marginLeftAuto = null, marginRightAuto = null
    } = props;
    const {order = null, _} = props;
    let cssClass = 'col';
    if (auto) {
        cssClass += '-auto';
    }
    for (const config of [
        { class: 'col', value: span}, {class: 'offset', value: offset}
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
    for (const marginAuto of [
        { class: 'ml', value: marginLeftAuto}, {class: 'mr', value: marginRightAuto}
    ]) {
        if (marginAuto.value) {
            if (isBoolean(marginAuto.value) && marginAuto.value == true) {
                cssClass += ` ${marginAuto.class}-auto`;
            } else if (isObject(marginAuto.value)) {
                marginAuto.value = {...marginAuto.value};
                if (marginAuto.value.default == true) {
                    cssClass += ` ${marginAuto.class}-auto`;
                    delete marginAuto.value.default;
                }
                for (const key of Object.keys(marginAuto.value)) {
                    if (marginAuto.value[key] == true) {
                        cssClass += ` ${marginAuto.class}-${key}-auto`;
                    }
                }
            }
        }
    }
    if (order) {
        cssClass += ` order-${order}`;
    }
    this.view(()=> [
        { div: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
}

export default com(Col);