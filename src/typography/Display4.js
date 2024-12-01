import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Display4(props) {
    const { _ } = props;
    this.view(()=> [
        { h1: {
            ...baseProps(props, { class: 'display-4' }),
            _
        } }
    ]);
};

export default com(Display4);