import com from "@xso/com";

import baseProps from "../utils/baseProps";

const Text = com(function Text(props) {
    const {
        tag = 'div',
        _, $
    } = props;
    let cssClass = 'form-text';
    this.view(()=> [
        { [tag]: {
            ...baseProps(props, { class: cssClass }),
            _, $
        } }
    ]);
});

export default Text;