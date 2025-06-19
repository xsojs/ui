import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Group(props) {
    const {
        role = 'group',
        size,
        vertical = false,
        drop,
        ariaLabel = null,
        _
    } = props;
    let cssClass = 'btn-group';
    if (vertical) {
        cssClass = 'btn-group-vertical';
    }
    if (drop) {
        if (drop === 'start') {
            cssClass += ' dropstart';
        } else if (drop === 'end') {
            cssClass += ' dropend';
        } else if (drop === 'up') {
            cssClass += ' dropup';
        }
    }
    if (size) {
        if (size === 'lg' || size === 'large') {
            cssClass += ' btn-group-lg';
        } else if (size === 'sm' || size === 'small') {
            cssClass += ' btn-group-sm';
        }
    }
    const extraProps = {
        role
    };
    if (ariaLabel) {
        extraProps['aria-label'] = ariaLabel;
    }
    this.view(()=> {
        return [
            { div: {
                ...extraProps,
                ...baseProps(props, { class: cssClass }),
                _
            } }
        ];
    });
}

export default com(Group);