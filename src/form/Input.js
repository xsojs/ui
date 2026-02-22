import com from "@xso/com";

import baseProps from "../utils/baseProps";
import generateID from "../utils/generateID";

const Input = com(function Input(props) {
    const {
        id = 'input_'+ generateID(), placeholder = null,
        type = 'text', size,
        ariaLabel = null, ariaDescribedBy = null,
        rows = null
    } = props;
    let cssClass = 'form-control';
    const extraProps = { type };
    extraProps.id = id;
    if (placeholder) {
        extraProps.placeholder = placeholder;
    }
    if (type === 'checkbox') {
        cssClass = ' form-check-input';
        extraProps.type = 'checkbox';
        if (props.switch) {
            extraProps.role = 'switch';
        }
        if (props.button) {
            cssClass = 'btn-check';
            extraProps.autocomplete = 'off';
        }
    } else if (type === 'radio') {
        cssClass = ' form-check-input';
        extraProps.type = 'radio';
        if (props.button) {
            cssClass = 'btn-check';
            extraProps.autocomplete = 'off';
        }
    } else if (type === 'range') {
        cssClass = ' form-range';
    }
    if (size) {
        if (size === 'lg' || size === 'large') {
            cssClass += ' form-control-lg';
        } else if (size === 'sm' || size === 'small') {
            cssClass += ' form-control-sm';
        }
    }
    if (ariaLabel) {
        extraProps['aria-label'] = ariaLabel;
    }
    if (ariaDescribedBy) {
        extraProps['aria-describedby'] = ariaDescribedBy;
    }
    this.view(()=> {
        if (type === 'textarea') {
            if (rows) {
                extraProps['rows'] = rows;
            }
            return {
                textarea: {
                    id,
                    ...extraProps,
                    ...baseProps(props, {class: cssClass})
                }
            };
        }
        return { input: {
            id,
            ...extraProps,
            ...baseProps(props, { class: cssClass })
        } };
    });
});

export default Input;