import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Text(props) {
    const {
        _
    } = props;
    let cssClass = 'dropdown-item-text';
    this.view(()=> [
        { span: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
}

export default com(Text);