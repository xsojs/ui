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
                    cssClass += ` ${config.class}-${key}-${config.data[key]}`;
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
        } = props;
        let cssClass = '';
        cssClass += loadDataConfigs([
            { class: 'col', data: span}, {class: 'offset', data: offset}
        ]);
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