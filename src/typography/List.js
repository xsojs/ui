import com from "@xso/com";

import baseProps from "../utils/baseProps";
import {isArray, isObject} from "@xso/utils";

const List = com(function List(props) {
    const { unstyled = false, inline = false, _ } = props;
    this.view(()=> {
        let cssClass = '';
        if (unstyled === true) {
            cssClass = ' list-unstyled';
        }
        if (inline === true) {
            cssClass = ' list-inline';
            if (isArray(_)) {
                for (const i of _) {
                    if (com.isSameType(i, ListItem)) {
                        com.props(i).inline = true;
                    }
                }
            } else if (isObject(_) && com.is(_)) {
                if (com.isSameType(_, ListItem)) {
                    com.props(_).inline = true;
                }
            }
        }
        return [
            { ul: {
                ...baseProps(props, { class: cssClass }),
                _
            } }
        ];
    });
});

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

List.Item = ListItem;

export default List;