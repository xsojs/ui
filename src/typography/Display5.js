import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Display5(props) {
    const { _ } = props;
    this.view(()=> [
        { h1: {
            ...baseProps(props, { class: 'display-5' }),
            _
        } }
    ]);
};

export default com(Display5);