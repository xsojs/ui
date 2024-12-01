import com from "@xso/com";

import baseProps from "../utils/baseProps";

import Item from "./Item";

const Breadcrumb = com(function Breadcrumb(props) {
    const { _ } = props;
    this.view(()=> [
        { nav: {
            'aria-label': 'breadcrumb',
            _: { ol: {
                ...baseProps(props, { class: 'breadcrumb' }),
                _
            } }
        } }
    ]);
});

Breadcrumb.Item = Item;

export default Breadcrumb;