import com from "@xso/com";

import baseProps from "../utils/baseProps";
import {isArray, isFunction} from "@xso/utils";

import Link from './Link';
import Heading from './Heading';

const Alert = com(function Alert(props) {
    const {
        mode,
        dismissible = false,
        _
    } = props;
    let cssClass = 'alert';
    if (mode) {
        cssClass += ` alert-${mode}`;
    }
    let __ = [];
    if (_) {
        if (isArray(_)) {
            __ = [..._];
        } else {
            __.push(_);
        }
    }
    if (dismissible) {
        cssClass += ` alert-dismissible`;
        __.push({ button: {
            type: 'button',
            class: 'btn-close',
            'data-bs-dismiss': 'alert',
            'aria-label': 'Close',
            onClick: () => isFunction(props.onClose) && props.onClose()
        } });
    }
    this.view(()=> {
        return [
            { div: {
                ...baseProps(props, { class: cssClass }),
                role: 'alert',
                _: __
            } }
        ];
    });
});

Alert.Link = Link;
Alert.Heading = Heading;

export default Alert;