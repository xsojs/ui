import com from "@xso/com";

import baseProps from "../utils/baseProps";

function HeadCell(props) {
    const { row = false, col = false, _ } = props;
    let { scope } = props;
    if (row) {
        scope = 'row';
    }
    if (col) {
        scope = 'col';
    }
    this.view(()=> [
        { th: {
            ...baseProps(props),
            scope,
            _
        } }
    ]);
};

export default com(HeadCell);