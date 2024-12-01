import com from "@xso/com";

import baseProps from "../utils/baseProps";

function H3(props) {
    const { _ } = props;
    this.view(()=> [
        { h3: {
            ...baseProps(props),
            _
        } }
    ]);
};

export default com(H3);