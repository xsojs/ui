import com from "@xso/com";

import baseProps from "../utils/baseProps";

import Menu from "./Menu";

const Dropdown = com(function Dropdown(props) {
    const { center, _ } = props;
    let cssClass = 'dropdown';
    if (center) {
        cssClass += '-center';
    }
    this.view(()=> [
        { div: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
});

Dropdown.Menu = Menu;

export default Dropdown;