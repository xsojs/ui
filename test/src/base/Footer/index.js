import com from "@xso/com";
import css from "@xso/css";

import style from "./style.js";

function Footer() {
    this.view(() => [
        { footer: {
            _: 'Footer...'
        } }
    ]);
}

export default com(Footer);