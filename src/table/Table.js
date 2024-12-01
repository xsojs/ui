import com from "@xso/com";

import baseProps from "../utils/baseProps";
import { isBoolean, isObject, isString } from "@xso/utils";

import HeadCell from "./HeadCell";
import DataCell from "./DataCell";
import Head from "./Head";
import Body from "./Body";
import Row from "./Row";

const Table = com(function Table(props) {
    const {
        mode = null,
        light = false, dark = false,
        striped = false, stripedColumns = false, 
        bordered = false, borderless = false, hover = false,
        small = false,
        alignMiddle = false, alignTop = false, alignBottom = false,
        responsive = false,
        head, columns, dataSource,
        _
    } = props;
    let cssClass = 'table';
    if (mode) {
        cssClass = `table-${mode}`;
    }
    if (light) {
        cssClass += ' table-light';
    }
    if (dark) {
        cssClass += ' table-dark';
    }
    if (striped) {
        cssClass += ' table-striped';
    }
    if (stripedColumns) {
        cssClass += ' table-striped-columns';
    }
    if (bordered) {
        cssClass += ' table-bordered';
    }
    if (borderless) {
        cssClass += ' table-borderless';
    }
    if (hover) {
        cssClass += ' table-hover';
    }
    if (small) {
        cssClass += ' table-sm';
    }
    if (alignMiddle) {
        cssClass += ' align-middle';
    } else if (alignTop) {
        cssClass += ' align-top';
    } else if (alignBottom) {
        cssClass += ' align-bottom';
    }
    this.view(()=> {
        let table = null;
        if (columns && dataSource) {
            const cols = [];
            const rows = [];
            for (const column of columns) {
                cols.push({ [HeadCell]: {
                    col: true,
                    _: column.title
                } });
            }
            for (const data of dataSource) {
                const dataCells = [];
                for (const column of columns) {
                    dataCells.push({ [DataCell]: {
                        _: column.render ? column.render(data[column.key], data) : data[column.key]
                    } });
                }
                rows.push({ [Row]: {
                    _: dataCells
                } });
            }
            table = { table: {
                ...baseProps(props, { class: cssClass }),
                _: [
                    { [Head]: {
                        ...(head ? head : {}),
                        _: { [Row]: {
                            _: cols
                        } }
                    } },
                    { [Body]: {
                        _: rows
                    } }
                ]
            } };
        } else {
            table = { table: {
                ...baseProps(props, { class: cssClass }),
                _
            } };
        }
        if (responsive) {
            let cssClass = '';
            if (isBoolean(responsive)) {
                cssClass = 'table-responsive';
            } else if (isObject(responsive)) {
                if (responsive.xs) {
                    cssClass += ' table-responsive-xs';
                }
                if (responsive.sm) {
                    cssClass += ' table-responsive-sm';
                }
                if (responsive.md) {
                    cssClass += ' table-responsive-md';
                }
                if (responsive.lg) {
                    cssClass += ' table-responsive-lg';
                }
                if (responsive.xl) {
                    cssClass += ' table-responsive-xl';
                }
                if (responsive.xxl) {
                    cssClass += ' table-responsive-xxl';
                }
            } else if (isString(responsive)) {
                cssClass = responsive;
            }
            return [
                { div: {
                    class: cssClass.trim(),
                    _: table
                } }
            ];
        }
        return [ table ];
    });
});

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.HeadCell = HeadCell;
Table.DataCell = DataCell;

export default Table;