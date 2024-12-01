import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Item(props) {
    const { active = false, _ } = props;
    let cssClass = 'breadcrumb-item';
    if (active) {
        cssClass += ' active';
    }
    this.view(()=> [
        { li: {
            ...baseProps(props, { class: cssClass }),
            'aria-current': 'page',
            _
        } }
    ]);
};

export default com(Item);