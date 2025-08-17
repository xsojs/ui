import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Link(props) {
    const {
        active = false,
        disabled = false,
        _
    } = props;
    let cssClass = 'dropdown-item';
    if (active) {
        cssClass += ' active';
    }
    const extraProps = {
        type: 'button'
    };
    if (disabled) {
        cssClass += ' disabled';
        extraProps['aria-disabled'] = 'true';
    }
    this.view(()=> [
        { button: {
            ...extraProps,
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
}

export default com(Link);