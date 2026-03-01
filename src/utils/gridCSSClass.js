import {isBoolean, isNumber, isObject, isString} from "../../../utils/src/main";

function loadDataConfigs(configs) {
    let cssClass = '';
    for (const config of configs) {
        if (config.data) {
            if (isNumber(config.data) || isString(config.data)) {
                cssClass += ` ${config.class}-${config.data}`;
            } else if (isObject(config.data)) {
                config.data = {...config.data};
                if (config.data.default) {
                    cssClass += ` ${config.class}-${config.data.default}`;
                    delete config.data.default;
                }
                for (const key of Object.keys(config.data)) {
                    if (isBoolean(config.data[key])) {
                        cssClass += ` ${config.class}-${key}`;
                    } else {
                        cssClass += ` ${config.class}-${key}-${config.data[key]}`;
                    }
                }
            }
        }
    }
    return cssClass;
}

const gridCSSClass = {
    loadDataConfigs,
    col: (props)=> {
        const {
            span = null, offset = null, order = null,
            marginLeftAuto = null, marginRightAuto = null,
            xs, sm, md, lg, xl, xxl
        } = props;
        let cssClass = '';
        cssClass += loadDataConfigs([
            { class: 'col', data: span}, {class: 'offset', data: offset}
        ]);
        (function $responsiveProps(key, value) {
            if (value) {
                if (isBoolean(value)) {
                    cssClass += ` col-${key}`;
                } else if (isNumber(value)) {
                    cssClass += ` col-${key}-${value}`;
                }
            }
            return $responsiveProps;
        })('xs', xs)('sm', sm)('md', md)('lg', lg)('xl', xl)('xxl', xxl);
        for (const marginAuto of [
            { class: 'ml', data: marginLeftAuto}, {class: 'mr', data: marginRightAuto}
        ]) {
            if (marginAuto.data) {
                if (isBoolean(marginAuto.data) && marginAuto.data === true) {
                    cssClass += ` ${marginAuto.class}-auto`;
                } else if (isObject(marginAuto.data)) {
                    marginAuto.data = {...marginAuto.data};
                    if (marginAuto.data.default === true) {
                        cssClass += ` ${marginAuto.class}-auto`;
                        delete marginAuto.data.default;
                    }
                    for (const key of Object.keys(marginAuto.data)) {
                        if (marginAuto.data[key] === true) {
                            cssClass += ` ${marginAuto.class}-${key}-auto`;
                        }
                    }
                }
            }
        }
        if (order) {
            cssClass += ` order-${order}`;
        }
        return cssClass;
    }
};

export default gridCSSClass;