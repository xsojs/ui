import com from "@xso/com";

import baseProps from "../utils/baseProps";
import generateID from "../utils/generateID";
import {isObject, isString} from "@xso/utils";
import Label from "./Label";
import Text from "./Text";
import gridSupport from "../utils/gridSupport";

const Field = com(function Field(props) {
    const {
        id = 'form_field_'+ generateID(),
        row = null,
        label, input, text
    } = props;
    let labelProps = {};
    let textProps = {};
    if (!input) {
        throw new Error('The input must be defined.');
    }
    if (label) {
        if (isString(label)) {
            labelProps._ = label;
        } else if (isObject(label)) {
            labelProps = {...label};
        }
        labelProps.for = id;
    }
    const {col} = com.props(input);
    com.props(input, {id});
    if (text) {
        const id = 'form_field_text_'+ generateID();
        com.props(input, {ariaDescribedBy: id});
        if (isString(text)) {
            textProps._ = text;
        } else if (isObject(text)) {
            textProps = {...text};
        }
        textProps.id = id;
    }
    this.view(()=> {
        let fieldLabel = null;
        if (label) {
            fieldLabel = { [Label]: {
                    ...labelProps
                } };
        }
        let fieldText = null;
        if (text) {
            fieldText = { [Text]: {
                    ...textProps
                } };
        }
        if (row || col) {
            const view = [];
            const fieldView = [];
            if (label && !gridSupport.check(label)) {
                fieldView.push(fieldLabel);
            }
            fieldView.push(input);
            if (text && !gridSupport.check(text)) {
                fieldView.push(fieldText);
            }

            if (gridSupport.hasRow(props) && (!gridSupport.hasRow(label) || !gridSupport.hasRow(text))) {
                if (gridSupport.hasRow(label)) {
                    view.push(fieldLabel);
                }
                view.push(gridSupport({row}, [
                    !gridSupport.hasRow(label) && gridSupport.hasCol(label) ? fieldLabel : null,
                    gridSupport({col}, input),
                    !gridSupport.hasRow(text) && gridSupport.hasCol(text) ? fieldText : null,
                ]));
                if (gridSupport.hasRow(text)) {
                    view.push(fieldText);
                }
                return view;
            }

            if (gridSupport.check(label)) {
                view.push(fieldLabel);
            }
            view.push(gridSupport(props, fieldView));
            if (gridSupport.check(text)) {
                view.push(fieldText);
            }
            return view;
        } else {
            return [
                fieldLabel,
                input,
                fieldText
            ]
        }
    });
});

export default Field;