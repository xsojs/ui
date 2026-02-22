import {isNumber, isObject, isString} from "../../../utils/src/main";

import Row from "../grid/Row";
import Col from "../grid/Col";

function gridSupport(props, content) {
    const {row, col } = props;
    let colProps = null;
    if (col) {
        if (isString(col) || isNumber(col)) {
            colProps = {span: col};
        } else if (isObject(col)) {
            colProps = {...col};
        }
    }
    let rowProps = null;
    if (row) {
        if (isString(row) || isNumber(row)) {
            rowProps = {cols: row};
        } else if (isObject(row)) {
            rowProps = {...row};
        }
    }
    if (rowProps) {
        return { [Row]: {
            ...rowProps,
            _: colProps ? { [Col]: {
                ...colProps,
                _: content
            } } : content
        } };
    }
    if (colProps) {
        return { [Col]: {
            ...colProps,
            _: content
        } };
    }
    return content;
}

gridSupport.hasRow = (props)=> {
    return !!props?.row;
}

gridSupport.hasCol = (props)=> {
    return !!props?.col;
}

gridSupport.check = (props)=> {
    return gridSupport.hasRow(props) || gridSupport.hasCol(props);
}


export default gridSupport;