import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Display6(props) {
    const { _ } = props;
    this.view(()=> [
        { h1: {
            ...baseProps(props, { class: 'display-6' }),
            _
        } }
    ]);
};

export default com(Display6);