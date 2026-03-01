import com from '@xso/com';
import css from '@xso/css';
import ExampleBlock from "../../../../components/ExampleBlock/index.js";
import {Container, Row, Col} from "@xso/ui";

function SettingOneColumnWidth() {
    this.view(() => [
        { h5: { _: 'Setting one column width' } },
        { p: { _: 'Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it. You may use predefined grid classes (as shown below), grid mixins, or inline widths. Note that the other columns will resize no matter the width of the center column.' } },
        { [ExampleBlock]: {
            example: [
                { [Container]: {
                    class: 'text-center '+ css({
                        '>div.row': {
                            margin: '5px',
                            border: '1px solid #f22',
                            '>div.col': {
                                border: '1px solid #f22',
                                background: '#411',
                            }
                        }
                    }),
                    _: [
                        { [Row]: {
                            _: [
                                {[Col] : { _: '1 of 3' }},
                                {[Col] : { span: 6, _: '2 of 3 (wider)' }},
                                {[Col] : { _: '3 of 3' }},
                            ]
                        } },
                        { [Row]: {
                            _: [
                                {[Col] : { _: '1 of 3' }},
                                {[Col] : { span: 5, _: '2 of 3 (wider)' }},
                                {[Col] : { _: '3 of 3' }},
                            ]
                        } },
                    ],
                } },
            ],
            code: `
            import com from "@xso/com";
            import css from "@xso/css";
            
            import {Container, Row, Col} from "@xso/ui";
            
            function SettingOneColumnWidth() { 
                this.view(() => [
                    { [Container]: {
                        class: 'text-center '+ css({
                            '>div.row': {
                                margin: '5px',
                                border: '1px solid #f22',
                                '>div.col': {
                                    border: '1px solid #f22',
                                    background: '#411',
                                }
                            }
                        }),
                        _: [
                            { [Row]: {
                                _: [
                                    {[Col] : { _: '1 of 3' }},
                                    {[Col] : { span: 6, _: '2 of 3 (wider)' }},
                                    {[Col] : { _: '3 of 3' }},
                                ]
                            } },
                            { [Row]: {
                                _: [
                                    {[Col] : { _: '1 of 3' }},
                                    {[Col] : { span: 5, _: '2 of 3 (wider)' }},
                                    {[Col] : { _: '3 of 3' }},
                                ]
                            } },
                        ],
                    } },
                ]);
            }
            
            export default com(SettingOneColumnWidth);
        `
        } },
    ]);
}

export default com(SettingOneColumnWidth);
