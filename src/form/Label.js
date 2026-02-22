import com from "@xso/com";

import baseProps from "../utils/baseProps";
import gridSupport from "../utils/gridSupport";
import gridCSSClass from "../utils/gridCSSClass";

const Label = com(function Label(props) {
    const {
        button = false, mode = null, outline = false,
        check = false, floating = false,
        colForm, _
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
    if (colForm) {
        cssClass += ' col-form-label';
        cssClass += gridCSSClass.col(props);
    }
    this.view(()=> gridSupport(
        props,
        { label: {
            for: props.for,
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ));
});

export default Label;