import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Var(props) {
    const { _ } = props;
    this.view(()=> [
        { var: {
            ...baseProps(props),
            _
        } }
    ]);
};

export default com(Var);