import com from "@xso/com";

import baseProps from "../../utils/baseProps";

const Option = com(function Option(props) {
    const {
        value,
        _
    } = props;
    this.view(()=> [
        { option: {
            ...baseProps(props, { }),
            value,
            _
        } }
    ]);
});

export default Option;