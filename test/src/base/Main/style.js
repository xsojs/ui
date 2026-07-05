import theme from "../../styles/theme";
import vars from "../../styles/vars";

const style = {
    main: {
        ...theme.page,
        paddingTop: `calc(${vars.header.height} + 10px)`,
        paddingLeft: `calc(${vars.aside.width} + 10px)`,
        paddingRight: `calc(${vars.aside.width} + 10px)`,
        minHeight: `100vh`,
    }
};

export default style;