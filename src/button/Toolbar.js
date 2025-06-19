import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Toolbar(props) {
    const {
        role = 'toolbar',
        ariaLabel = null,
        _
    } = props;
    let cssClass = 'btn-toolbar';
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

export default com(Toolbar);