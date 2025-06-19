import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Badge(props) {
    const {
        mode,
        pill = false,
        link,
        _
    } = props;
    let cssClass = 'badge';
    if (mode) {
        cssClass += ` text-bg-${mode}`;
    }
    if (pill) {
        cssClass += ` rounded-pill`;
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