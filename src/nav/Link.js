import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Link(props) {
    const {
        role,
        href,
        active = false,
        disabled = false,
        dropdownToggle = false,
        ariaCurrent,
        ariaExpanded,
        _
    } = props;
    let cssClass = 'nav-link';
    if (active) {
        cssClass += ' active';
    }
    if (disabled) {
        cssClass += ' disabled';
    }
    const extraProps = { };
    if (role) {
        extraProps.role = role;
    }
    if (ariaCurrent) {
        extraProps['aria-current'] = ariaCurrent;
    }
    if (ariaExpanded === true) {
        extraProps['aria-expanded'] = 'true';
    }
    if (ariaExpanded === false) {
        extraProps['aria-expanded'] = 'false';
    }
    if (dropdownToggle === true) {
        cssClass += ' dropdown-toggle';
        extraProps['data-bs-toggle'] = 'dropdown';
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