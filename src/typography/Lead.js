import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Lead(props) {
    const { _ } = props;
    this.view(()=> [
        { p: {
            ...baseProps(props, { class: 'lead' }),
            _
        } }
    ]);
};

export default com(Lead);