import com from "@xso/com";

import baseProps from "../utils/baseProps";
import gridCSSClass from "../utils/gridCSSClass";

function Col(props) {
    const {auto, _} = props;
    let cssClass = 'col';
    if (auto) {
        cssClass += '-auto';
    }
    cssClass += gridCSSClass.col(props);
    this.view(()=> [
        { div: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
}

export default com(Col);