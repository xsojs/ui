import com from "@xso/com";

import baseProps from "../utils/baseProps";

import Item from "./Item";
import Header from "./Header";
import Divider from "./Divider";
import Link from "./Link";

const Menu = com(function Menu(props) {
    const { dark, _ } = props;
    let cssClass = 'dropdown-menu';
    if (dark) {
        cssClass += ' dropdown-menu-dark';
    }
    this.view(()=> [
        { ul: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
});

Menu.Item = Item;
Menu.Header = Header;
Menu.Divider = Divider;
Menu.Link = Link;

export default Menu;