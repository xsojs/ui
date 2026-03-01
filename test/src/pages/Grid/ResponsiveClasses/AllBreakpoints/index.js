import com from '@xso/com';
import css from '@xso/css';
import ExampleBlock from "../../../../components/ExampleBlock/index.js";
import {Container, Row, Col} from "@xso/ui";

function AllBreakpoints() {
    this.view(() => [
        { h5: { _: 'All breakpoints' } },
        { p: { _: 'For grids that are the same from the smallest of devices to the largest, use the .col and .col-* classes. Specify a numbered class when you need a particularly sized column; otherwise, feel free to stick to .col.' } },
        { [ExampleBlock]: {
            example: [
                { [Container]: {
                    class: 'text-center '+ css({
                        '>div.row': {
                            margin: '5px',
                            border: '1px solid #2ff',
                            '>div[class^="col"]': {
                                border: '1px solid #2ff',
                                background: '#144',
                            }
                        }
                    }),
                    _: [
                        { [Row]: {
                            _: [
                                {[Col] : { _: 'col' }},
                                {[Col] : { _: 'col' }},
                                {[Col] : { _: 'col' }},
                                {[Col] : { _: 'col' }},
                            ]
                        } },
                        { [Row]: {
                            _: [
                                {[Col] : { span: 8, _: 'col-8' }},
                                {[Col] : { span: 4, _: 'col-4' }},
                            ]
                        } },
                    ],
                } },
            ],
            code: `
            import com from "@xso/com";
            import css from "@xso/css";
            
            import {Container, Row, Col} from "@xso/ui";
            
            function AllBreakpoints() { 
                this.view(() => [
                    { [Container]: {
                        class: 'text-center '+ css({
                            '>div.row': {
                                margin: '5px',
                                border: '1px solid #2ff',
                                '>div[class^="col"]': {
                                    border: '1px solid #2ff',
                                    background: '#144',
                                }
                            }
                        }),
                        _: [
                            { [Row]: {
                                _: [
                                    {[Col] : { _: 'col' }},
                                    {[Col] : { _: 'col' }},
                                    {[Col] : { _: 'col' }},
                                    {[Col] : { _: 'col' }},
                                ]
                            } },
                            { [Row]: {
                                _: [
                                    {[Col] : { span: 8, _: 'col-8' }},
                                    {[Col] : { span: 4, _: 'col-4' }},
                                ]
                            } },
                        ],
                    } },
                ]);
            }
            
            export default com(AllBreakpoints);
        `
        } },
    ]);
}

export default com(AllBreakpoints);
