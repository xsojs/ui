import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Kbd(props) {
    const { _ } = props;
    this.view(()=> [
        { kbd: {
            ...baseProps(props),
            _
        } }
    ]);
};

export default com(Kbd);