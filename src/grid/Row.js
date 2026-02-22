import com from "@xso/com";

import baseProps from "../utils/baseProps";

import gridCSSClass from "../utils/gridCSSClass";

function Row(props) {
    const {
        alignItems = null, alignSelf = null,
        justifyContent = null, cols = null,
        gutters = null, guttersX = null, guttersY = null,
        noGutters = false, _
    } = props;
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
    cssClass += gridCSSClass.loadDataConfigs([
        {class: 'row-cols', data: cols},
        {class: 'g', data: gutters},
        {class: 'gx', data: guttersX},
        {class: 'gy', data: guttersY}
    ]);
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
