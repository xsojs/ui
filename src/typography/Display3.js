import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Display3(props) {
    const { _ } = props;
    this.view(()=> [
        { h1: {
            ...baseProps(props, { class: 'display-3' }),
            _
        } }
    ]);
};

export default com(Display3);