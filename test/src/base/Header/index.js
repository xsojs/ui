import com from "@xso/com";
import css from "@xso/css";

import style from "./style.js";

function Header() {
    this.view(() => [
        { header: {
            _: 'Header...'
        } }
    ]);
}

export default com(Header);