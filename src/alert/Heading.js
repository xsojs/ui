import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Heading(props) {
    const { _ } = props;
    let cssClass = 'alert-heading';
    this.view(()=> [
        { h4: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
};

export default com(Heading);