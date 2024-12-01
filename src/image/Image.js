import com from "@xso/com";

import baseProps from "../utils/baseProps";

function Image(props) {
    const {
        src, alt, width, height, fluid = false,
        thumbnail = false, rounded = false,
        floatLeft = false, floatRight = false,
        marginAuto = false, block = false,
        _
    } = props;
    let cssClass = '';
    if (fluid) {
        cssClass += ' img-fluid';
    }
    if (thumbnail) {
        cssClass += ' img-thumbnail';
    }
    if (rounded) {
        cssClass += ' rounded';
    }
    if (floatLeft) {
        cssClass += ' float-left';
    }
    if (floatRight) {
        cssClass += ' float-right';
    }
    if (marginAuto) {
        cssClass += ' mx-auto';
    }
    if (block) {
        cssClass += ' d-block';
    }
    this.view(()=> [
        { img: {
            ...baseProps(props, { class: cssClass.trim() }),
            src,
            alt,
            width,
            height,
            _
        } }
    ]);
};

export default com(Image);