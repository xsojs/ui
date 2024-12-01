import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Display1(props) {
    const { _ } = props;
    this.view(()=> [
        { h1: {
            ...baseProps(props, { class: 'display-1' }),
            _
        } }
    ]);
};

export default com(Display1);