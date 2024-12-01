import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Head(props) {
    const { light, dark, _ } = props;
    let cssClass = '';
    if (light) {
        cssClass += ' table-light';
    }
    if (dark) {
        cssClass += ' table-dark';
    }
    this.view(()=> [
        { thead: {
            ...baseProps(props, { class: cssClass.trim() }),
            _
        } }
    ]);
};

export default com(Head);