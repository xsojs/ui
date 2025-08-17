import com from "@xso/com";

import baseProps from "../utils/baseProps";

import Item from "./Item";
import Header from "./Header";
import Divider from "./Divider";
import Link from "./Link";
import Button from "./Button";
import Text from "./Text";
import {isBoolean, isObject} from "@xso/utils";

const Menu = com(function Menu(props) {
    const { dark, end, _ } = props;
    let cssClass = 'dropdown-menu';
    if (dark) {
        cssClass += ' dropdown-menu-dark';
    }
    if (end) {
        if (isBoolean(end)) {
            cssClass += ` dropdown-menu-end`;
        } else if (isObject(end)) {
            for (const key of Object.keys(end)) {
                if (end[key] === true) {
                    cssClass += ` dropdown-menu-${key}-end`;
                }
            }
        }
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
Menu.Button = Button;
Menu.Text = Text;

export default Menu;