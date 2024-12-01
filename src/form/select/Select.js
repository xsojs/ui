import com from "@xso/com";

import { isArray, isObject } from "@xso/utils";

import baseProps from "../../utils/baseProps";

import Option from "./Option";

const Select = com(function Select(props) {
    const {
        id, placeholder,
        responsive = null,
        ariaLabel = null, ariaDescribedBy = null,
        _
    } = props;
    if (isArray(_)) {
        for (const i of _) {
            com.ensureType(i, Option);
        }
    } else {
        com.ensureType(_, Option);
    }
    let cssClass = 'form-select';
    const extraProps = {};
    if (id) {
        extraProps.id = id;
    }
    if (placeholder) {
        extraProps.placeholder = placeholder;
    }
    if (isObject(responsive)) {
        if (responsive.xs) {
            cssClass += ' form-select-xs';
        }
        if (responsive.sm) {
            cssClass += ' form-select-sm';
        }
        if (responsive.md) {
            cssClass += ' form-select-md';
        }
        if (responsive.lg) {
            cssClass += ' form-select-lg';
        }
        if (responsive.xl) {
            cssClass += ' form-select-xl';
        }
        if (responsive.xxl) {
            cssClass += ' form-select-xxl';
        }
    }
    if (ariaLabel) {
        extraProps['aria-label'] = ariaLabel;
    }
    if (ariaDescribedBy) {
        extraProps['aria-describedby'] = ariaDescribedBy;
    }
    this.view(()=> [
        { select: {
            ...extraProps,
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
});

Select.Option = Option;

export default Select;