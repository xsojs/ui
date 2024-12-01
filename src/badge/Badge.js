import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Badge(props) {
    const {
        mode,
        light = false,
        pill = false,
        link,
        _
    } = props;
    let cssClass = 'badge';
    if (mode) {
        cssClass += ` badge-${mode}`;
    }
    if (light == true) {
        cssClass += ` badge-light`;
    }
    if (pill == true) {
        cssClass += ` badge-pill`;
    }
    this.view(()=> {
        if (link) {
            return [
                { a: {
                    ...baseProps(props, { class: cssClass }),
                    ...link,
                    _
                } }
            ];
        }
        return [
            { span: {
                ...baseProps(props, { class: cssClass }),
                _
            } }
        ];
    });
}

export default com(Badge);