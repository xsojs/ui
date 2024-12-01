import com from "@xso/com";

import baseProps from "../utils/baseProps";

const Input = com(function Input(props) {
    const {
        id = null, placeholder = null,
        type = 'text',
        ariaLabel = null, ariaDescribedBy = null,
    } = props;
    let cssClass = 'form-control';
    const extraProps = {};
    if (id) {
        extraProps.id = id;
    }
    if (placeholder) {
        extraProps.placeholder = placeholder;
    }
    if (type == 'checkbox') {
        cssClass = ' form-check-input';
        extraProps.type = 'checkbox';
        if (props.switch) {
            extraProps.role = 'switch';
        }
        if (props.button) {
            cssClass = 'btn-check';
            extraProps.autocomplete = 'off';
        }
    } else if (type == 'radio') {
        cssClass = ' form-check-input';
        extraProps.type = 'radio';
        if (props.button) {
            cssClass = 'btn-check';
            extraProps.autocomplete = 'off';
        }
    } else if (type == 'range') {
        cssClass = ' form-range';
    }
    if (ariaLabel) {
        extraProps['aria-label'] = ariaLabel;
    }
    if (ariaDescribedBy) {
        extraProps['aria-describedby'] = ariaDescribedBy;
    }
    if (type == 'textarea') {
        this.view(()=> [
            { input: {
                    id: props.id,
                    ...extraProps,
                    ...baseProps(props, { class: cssClass })
                } }
        ]);
        return;
    }
    this.view(()=> [
        { input: {
            id: props.id,
            ...extraProps,
            ...baseProps(props, { class: cssClass })
        } }
    ]);
});

export default Input;