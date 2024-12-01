import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Body(props) {
    const { _ } = props;
    this.view(()=> [
        { tbody: {
            ...baseProps(props),
            _
        } }
    ]);
};

export default com(Body);