import com from '@xso/com';
import css from '@xso/css';
import ExampleBlock from "../../../../components/ExampleBlock/index.js";
import {Container, Row, Col} from "@xso/ui";

function StackedToHorizontal() {
    this.view(() => [
        { h5: { _: 'Stacked to horizontal' } },
        { p: { _: 'Using a single set of .col-sm-* classes, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (sm).' } },
        { [ExampleBlock]: {
            example: [
                { [Container]: {
                    class: 'text-center '+ css({
                        '>div.row': {
                            margin: '5px',
                            border: '1px solid #f2f',
                            '>div[class^="col"]': {
                                border: '1px solid #f2f',
                                background: '#414',
                            }
                        }
                    }),
                    _: [
                        { [Row]: {
                            _: [
                                {[Col] : { sm: 8, _: 'col-sm-8' }},
                                {[Col] : { sm: 4, _: 'col-sm-4' }},
                            ]
                        } },
                        { [Row]: {
                            _: [
                                {[Col] : { sm: true, _: 'col-sm' }},
                                {[Col] : { sm: true, _: 'col-sm' }},
                                {[Col] : { sm: true, _: 'col-sm' }},
                            ]
                        } },
                    ],
                } },
            ],
            code: `
            import com from "@xso/com";
            import css from "@xso/css";
            
            import {Container, Row, Col} from "@xso/ui";
            
            function StackedToHorizontal() { 
                this.view(() => [
                    { [Container]: {
                        class: 'text-center '+ css({
                            '>div.row': {
                                margin: '5px',
                                border: '1px solid #f2f',
                                '>div[class^="col"]': {
                                    border: '1px solid #f2f',
                                    background: '#414',
                                }
                            }
                        }),
                        _: [
                            { [Row]: {
                                _: [
                                    {[Col] : { sm: 8, _: 'col-sm-8' }},
                                    {[Col] : { sm: 4, _: 'col-sm-4' }},
                                ]
                            } },
                            { [Row]: {
                                _: [
                                    {[Col] : { sm: true, _: 'col-sm' }},
                                    {[Col] : { sm: true, _: 'col-sm' }},
                                    {[Col] : { sm: true, _: 'col-sm' }},
                                ]
                            } },
                        ],
                    } },
                ]);
            }
            
            export default com(StackedToHorizontal);
        `
        } },
    ]);
}

export default com(StackedToHorizontal);
