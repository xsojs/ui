import com from "@xso/com";

import baseProps from "../utils/baseProps";

const Validity = com(function Validity(props) {
    const {
        valid = false,
        tooltip = false,
        _
    } = props;
    let cssClass = valid ? 'valid' : 'invalid';
    if (tooltip) {
        cssClass += '-tooltip';
    } else {
        cssClass += '-feedback';
    }
    this.view(()=> [
        { div: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
});

export default Validity;