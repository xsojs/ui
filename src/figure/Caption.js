import com from "@xso/com";

import baseProps from "../utils/baseProps";

const FigCaption = com(function FigCaption(props) {
    const { end = false, _ } = props;
    let cssClass = 'figure-caption';
    if (end) {
        cssClass += ' text-end';
    }
    this.view(()=> [
        { figcaption: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
});

export default FigCaption;