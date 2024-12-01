import com from "@xso/com";

import baseProps from "../utils/baseProps";

import Image from "./Image";
import Caption from "./Caption";

const Figure = com(function Figure(props) {
    const { _ } = props;
    this.view(()=> [
        { figure: {
            ...baseProps(props, { class: 'figure' }),
            _
        } }
    ]);
});

Figure.Caption = Caption;
Figure.Image = Image;

export default Figure;