import com from "@xso/com";

import baseProps from "../utils/baseProps";

function H1(props) {
    const { _ } = props;
    this.view(()=> [
        { h1: {
            ...baseProps(props),
            _
        } }
    ]);
};

export default com(H1);