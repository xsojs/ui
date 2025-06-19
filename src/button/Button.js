import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Button(props) {
    const {
        type = 'button',
        role = 'button',
        mode,
        outline = false,
        size,
        block = false,
        disabled = false,
        dropdownToggle,
        ariaExpanded,
        _
    } = props;
    let cssClass = 'btn';
    if (mode) {
        cssClass += ` btn${outline ? '-outline' : ''}-${mode}`;
    }
    if (size) {
        if (size === 'lg' || size === 'large') {
            cssClass += ' btn-lg';
        } else if (size === 'sm' || size === 'small') {
            cssClass += ' btn-sm';
        }
    }
    if (block) {
        cssClass += ' btn-block';
    }
    const disabledProps = {};
    if (disabled === true) {
        cssClass += ' disabled';
        disabledProps.disabled = true;
        disabledProps['aria-disabled'] = "true";
    }
    const extraProps = {
        role
    };
    if (dropdownToggle) {
        cssClass += ' dropdown-toggle';
        extraProps['data-bs-toggle'] = 'dropdown';
        if (dropdownToggle === 'split') {
            cssClass += ' dropdown-toggle-split';
        }
    }
    if (ariaExpanded === true) {
        extraProps['aria-expanded'] = 'true';
    }
    if (ariaExpanded === false) {
        extraProps['aria-expanded'] = 'false';
    }
    this.view(()=> {
        if (type === 'link') {
            return [
                { a: {
                    ...extraProps,
                    ...baseProps(props, { class: cssClass }),
                    ...disabledProps,
                    _
                } }
            ];
        }
        return [
            { button: {
                ...extraProps,
                ...baseProps(props, { class: cssClass }),
                type,
                ...disabledProps,
                _
            } }
        ];
    });
}

export default com(Button);