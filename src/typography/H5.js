import com from "@xso/com";

import baseProps from "../utils/baseProps";

function H5(props) {
    const { _ } = props;
    this.view(()=> [
        { h5: {
            ...baseProps(props),
            _
        } }
    ]);
};

export default com(H5);