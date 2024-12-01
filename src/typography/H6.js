import com from "@xso/com";

import baseProps from "../utils/baseProps";

function H6(props) {
    const { _ } = props;
    this.view(()=> [
        { h6: {
            ...baseProps(props),
            _
        } }
    ]);
};

export default com(H6);