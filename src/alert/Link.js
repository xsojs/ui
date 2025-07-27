import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Link(props) {
    const { href, _ } = props;
    let cssClass = 'alert-link';
    this.view(()=> [
        { a: {
            ...baseProps(props, { class: cssClass }),
            href,
            _
        } }
    ]);
};

export default com(Link);