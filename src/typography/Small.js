import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Small(props) {
    const { muted = false, secondary = false, _ } = props;
    let cssClass = '';
    if (muted == true) {
        cssClass += ' text-muted';
    }
    if (secondary == true) {
        cssClass += ' text-body-secondary';
    }
    this.view(()=> [
        { small: {
            ...baseProps(props, { class: cssClass.trim() }),
            _
        } }
    ]);
};

export default com(Small);