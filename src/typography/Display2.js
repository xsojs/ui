import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Display2(props) {
    const { _ } = props;
    this.view(()=> [
        { h1: {
            ...baseProps(props, { class: 'display-2' }),
            _
        } }
    ]);
};

export default com(Display2);