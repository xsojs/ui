import com from "../../../com/src/main";
import baseProps from "../utils/baseProps";

const ListItem = com(function ListItem(props) {
    const { inline, _ } = props;
    this.view(()=> {
        let cssClass = '';
        if (inline) {
            cssClass = 'list-inline-item';
        }
        return { li: {
                ...baseProps(props, {class: cssClass}),
                _
            } };
    });
});

export default ListItem;