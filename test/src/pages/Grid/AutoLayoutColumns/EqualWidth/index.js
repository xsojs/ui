import com from '@xso/com';
import css from '@xso/css';
import ExampleBlock from "../../../../components/ExampleBlock/index.js";
import {Container, Row, Col} from "@xso/ui";

function EqualWidth() {
    this.view(() => [
        { h5: { _: 'Equal-width' } },
        { p: { _: 'For example, here are two grid layouts that apply to every device and viewport, from xs to xxl. Add any number of unit-less classes for each breakpoint you need and every column will be the same width.' } },
        { [ExampleBlock]: {
            example: [
                { [Container]: {
                    class: 'text-center '+ css({
                        '>div.row': {
                            margin: '5px',
                            border: '1px solid #22f',
                            '>div.col': {
                                border: '1px solid #22f',
                                background: '#114',
                            }
                        }
                    }),
                    _: [
                        { [Row]: {
                            _: [
                                {[Col] : { _: '1 of 2' }},
                                {[Col] : { _: '2 of 2' }},
                            ]
                        } },
                        { [Row]: {
                            _: [
                                {[Col] : { _: '1 of 3' }},
                                {[Col] : { _: '2 of 3' }},
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
            
            function GridEqualWidth() { 
                this.view(() => [
                    { [Container]: {
                        class: 'text-center '+ css({
                            '>div.row': {
                                margin: '5px',
                                border: '1px solid #22f',
                                '>div.col': {
                                    border: '1px solid #22f',
                                    background: '#114',
                                }
                            }
                        }),
                        _: [
                            { [Row]: {
                                _: [
                                    {[Col] : { _: '1 of 2' }},
                                    {[Col] : { _: '2 of 2' }},
                                ]
                            } },
                            { [Row]: {
                                _: [
                                    {[Col] : { _: '1 of 3' }},
                                    {[Col] : { _: '2 of 3' }},
                                    {[Col] : { _: '3 of 3' }},
                                ]
                            } },
                        ],
                    } },
                ]);
            }
            
            export default com(GridEqualWidth);
        `
        } },
    ]);
}

export default com(EqualWidth);
