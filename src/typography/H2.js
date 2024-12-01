import com from "@xso/com";

import baseProps from "../utils/baseProps";

function H2(props) {
    const { _ } = props;
    this.view(()=> [
        { h2: {
            ...baseProps(props),
            _
        } }
    ]);
};

export default com(H2);