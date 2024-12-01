import com from "@xso/com";

import baseProps from "../utils/baseProps";

import Image from "../image/Image";

const FigImage = com(function FigImage(props) {
    const { _ } = props;
    this.view(()=> [
        { [Image]: {
            ...baseProps(props, { class: 'figure-image' }),
            _
        } }
    ]);
});

export default FigImage;