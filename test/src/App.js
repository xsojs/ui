import com from "@xso/com";

import Main from "./base/Main";

function App() {
    this.view(() => [
        { [Main]: {} }
    ]);
}

export default com(App);