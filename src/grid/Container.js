import com from "@xso/com";

import baseProps from "../utils/baseProps";

import Row from "./Row";

function Container(props) {
    const { span, textCenter, _ } = props;
    com.ensureType(_, Row);
    let cssClass = '';
    if (span) {
        if (isString(span)) {
            cssClass += ` container-${span}`;
        } else if (isObject(span)) {
            for (const key of Object.keys(span)) {
                if (span[key] == true) {
                    cssClass += ` container-${key}`;
                }
            }
        }
    }
    if (cssClass == '') {
        cssClass = 'container';
    }
    if (textCenter == true) {
        cssClass = ' text-center';
    }
    this.view(()=> [
        { div: {
            ...baseProps(props, { class: cssClass.trim() }),
            _
        } }
    ]);
}

export default com(Container);
