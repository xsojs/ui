import com from "@xso/com";

import baseProps from "../utils/baseProps";

const Label = com(function Label(props) {
    const {
        button = false, mode = null, outline = false,
        check = false, floating = false,
        _
    } = props;
    let cssClass = '';
    if (button) {
        cssClass = 'btn';
        if (mode) {
            cssClass += ` btn${outline ? '-outline' : ''}-${mode}`;
        }
    } else if (check) {
        cssClass += ' form-check-label';
    } else if (!floating) {
        cssClass += ' form-label';
    }
    this.view(()=> [
        { label: {
            for: props.for,
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
});

export default Label;