import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Code(props) {
    const { _ } = props;
    this.view(()=> [
        { code: {
            ...baseProps(props),
            _
        } }
    ]);
};

export default com(Code);