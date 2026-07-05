import vars from "../../styles/vars.js";

const style = {
    container: {
        position: "fixed",
        overflow: "auto",
        right: "0",
        top: vars.header.height,
        borderLeft: "2px solid #0E1116",
        ...vars.aside,
        height: `calc(100vh - ${vars.header.height})`,
    },
    nav: {
        "> li": {
            width: "100%",
        }
    }
}

export default style;