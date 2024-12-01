import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Row(props) {
    const {
        mode, active,
        alignMiddle = false, alignTop = false, alignBottom = false,
        _
    } = props;
    let cssClass = '';
    if (mode) {
        cssClass = `table-${mode}`;
    }
    if (active) {
        cssClass += ' table-active';
    }
    if (alignMiddle) {
        cssClass += ' align-middle';
    } else if (alignTop) {
        cssClass += ' align-top';
    } else if (alignBottom) {
        cssClass += ' align-bottom';
    }
    this.view(()=> [
        { tr: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
};

export default com(Row);