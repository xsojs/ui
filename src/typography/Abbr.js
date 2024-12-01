import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Abbr(props) {
    const { title, initialism = false, _ } = props;
    this.view(()=> [
        { abbr: {
            ...baseProps(props, { class: initialism ? 'initialism' : null }),
            title,
            _
        } }
    ]);
};

export default com(Abbr);