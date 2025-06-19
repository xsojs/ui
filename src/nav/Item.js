import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Item(props) {
    const { dropdown = false, _ } = props;
    let cssClass = 'nav-item';
    if (dropdown) {
        cssClass += ' dropdown';
    }
    this.view(()=> [
        { li: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
}

export default com(Item);