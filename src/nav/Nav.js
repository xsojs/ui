import com from "@xso/com";

import baseProps from "../utils/baseProps";

import Item from "./Item";
import Link from "./Link";

const Nav = com(function Nav(props) {
    const { bar, tabs, pills, underline, fill, justified, scroll, _ } = props;
    let cssClass = bar ? 'navbar-nav' : 'nav';
    if (tabs) {
        cssClass += ' nav-tabs';
    }
    if (pills) {
        cssClass += ' nav-pills';
    }
    if (underline) {
        cssClass += ' nav-underline';
    }
    if (fill) {
        cssClass += ' nav-fill';
    }
    if (justified) {
        cssClass += ' nav-justified';
    }
    if (bar && scroll) {
        cssClass += ' navbar-nav-scroll';
    }
    this.view(()=> [
        { ul: {
            ...baseProps(props, { class: cssClass }),
            _
        } }
    ]);
});

Nav.Item = Item;
Nav.Link = Link;

export default Nav;