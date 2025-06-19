import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Link(props) {
    const {
        href,
        active = false,
        disabled = false,
        _
    } = props;
    let cssClass = 'dropdown-item';
    if (active) {
        cssClass += ' active';
    }
    const extraProps = {};
    if (disabled) {
        cssClass += ' disabled';
        extraProps['aria-disabled'] = 'true';
    }
    if (href) {
        extraProps['href'] = href;
    }
    this.view(()=> [
        { a: {
            ...extraProps,
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
}

export default com(Link);