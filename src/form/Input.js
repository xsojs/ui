import com from "@xso/com";

import baseProps from "../utils/baseProps";
import generateID from "../utils/generateID";
import {isObject, isString} from "@xso/utils";
import Label from "./Label";
import Text from "./Text";

const Input = com(function Input(props) {
    const {
        id = 'input_'+ generateID(), placeholder = null,
        type = 'text', size,
        label = null, text = null,
        ariaLabel = null, ariaDescribedBy = null,
        rows = null
    } = props;
    let labelProps = {};
    let textProps = {};
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
    if (label) {
        if (isString(label)) {
            labelProps._ = label;
        } else if (isObject(label)) {
            labelProps = {...label};
        }
        labelProps.for = id;
    }
    if (ariaLabel) {
        extraProps['aria-label'] = ariaLabel;
    }
    if (text) {
        const id = 'form_text_'+ generateID();
        extraProps['aria-describedby'] = id;
        if (isString(text)) {
            textProps._ = text;
        } else if (isObject(text)) {
            textProps = {...text};
        }
        textProps.id = id;
    }
    if (ariaDescribedBy) {
        extraProps['aria-describedby'] = ariaDescribedBy;
    }
    if (type === 'textarea') {
        if (rows) {
            extraProps['rows'] = rows;
        }
        this.view(()=> [
            label ? { [Label]: {
                ...labelProps
            }} : null,
            { textarea: {
                id: props.id,
                ...extraProps,
                ...baseProps(props, { class: cssClass })
            } },
            text ? { [Text]: {
                ...textProps
            }} : null,
        ]);
        return;
    }
    this.view(()=> [
        label ? { [Label]: {
            ...labelProps
        }} : null,
        { input: {
            id: props.id,
            ...extraProps,
            ...baseProps(props, { class: cssClass })
        } },
        text ? { [Text]: {
            ...textProps
        }} : null,
    ]);
});

export default Input;