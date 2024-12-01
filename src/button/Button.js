import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Button(props) {
    const {
        type = 'button',
        mode,
        outline = false,
        size,
        block = false,
        disabled = false,
        _
    } = props;
    let cssClass = 'btn';
    if (mode) {
        cssClass += ` btn${outline ? '-outline' : ''}-${mode}`;
    }
    if (size) {
        if (size == 'lg' || size == 'large') {
            cssClass += ' btn-lg';
        } else if (size == 'sm' || size == 'small') {
            cssClass += ' btn-sm';
        }
    }
    if (block) {
        cssClass += ' btn-block';
    }
    const disabledProps = {};
    if (disabled == true) {
        cssClass += ' disabled';
        disabledProps.disabled = true;
        disabledProps['aria-disabled'] = "true";
    }
    this.view(()=> {
        if (type == 'link') {
            return [
                { a: {
                    ...baseProps(props, { class: cssClass }),
                    role: "button",
                    ...disabledProps,
                    _
                } }
            ];
        }
        return [
            { button: {
                ...baseProps(props, { class: cssClass }),
                type,
                ...disabledProps,
                _
            } }
        ];
    });
}

export default com(Button);