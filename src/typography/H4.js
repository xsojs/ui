import com from "@xso/com";

import baseProps from "../utils/baseProps";

function H4(props) {
    const { _ } = props;
    this.view(()=> [
        { h4: {
            ...baseProps(props),
            _
        } }
    ]);
};

export default com(H4);