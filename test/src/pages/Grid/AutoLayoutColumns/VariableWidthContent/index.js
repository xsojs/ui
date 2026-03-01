import com from '@xso/com';
import css from '@xso/css';
import ExampleBlock from "../../../../components/ExampleBlock/index.js";
import {Container, Row, Col} from "@xso/ui";

function VariableWidthContent() {
    this.view(() => [
        { h5: { _: 'Variable width content' } },
        { p: { _: 'Use col-{breakpoint}-auto classes to size columns based on the natural width of their content.' } },
        { [ExampleBlock]: {
            example: [
                { [Container]: {
                    class: 'text-center '+ css({
                        '>div.row': {
                            margin: '5px',
                            border: '1px solid #2f2',
                            '>div.col': {
                                border: '1px solid #2f2',
                                background: '#141',
                            }
                        }
                    }),
                    _: [
                        { [Row]: {
                            justifyContent: 'md-center',
                            _: [
                                {[Col] : { span: {lg: 2}, _: '1 of 3' }},
                                {[Col] : { span: {md: 'auto'}, _: 'Variable width content' }},
                                {[Col] : { span: {lg: 2}, _: '3 of 3' }},
                            ]
                        } },
                        { [Row]: {
                            _: [
                                {[Col] : { _: '1 of 3' }},
                                {[Col] : { span: {md: 'auto'}, _: 'Variable width content' }},
                                {[Col] : { span: {lg: 2}, _: '3 of 3' }},
                            ]
                        } },
                    ],
                } },
            ],
            code: `
            import com from "@xso/com";
            import css from "@xso/css";
            
            import {Container, Row, Col} from "@xso/ui";
            
            function VariableWidthContent() { 
                this.view(() => [
                    { [Container]: {
                        class: 'text-center '+ css({
                            '>div.row': {
                                margin: '5px',
                                border: '1px solid #2f2',
                                '>div.col': {
                                    border: '1px solid #2f2',
                                    background: '#141',
                                }
                            }
                        }),
                        _: [
                            { [Row]: {
                                justifyContent: 'md-center',
                                _: [
                                    {[Col] : { span: {lg: 2}, _: '1 of 3' }},
                                    {[Col] : { span: {md: 'auto'}, _: 'Variable width content' }},
                                    {[Col] : { span: {lg: 2}, _: '3 of 3' }},
                                ]
                            } },
                            { [Row]: {
                                _: [
                                    {[Col] : { _: '1 of 3' }},
                                    {[Col] : { span: {md: 'auto'}, _: 'Variable width content' }},
                                    {[Col] : { span: {lg: 2}, _: '3 of 3' }},
                                ]
                            } },
                        ],
                    } },
                ]);
            }
            
            export default com(VariableWidthContent);
        `
        } },
    ]);
}

export default com(VariableWidthContent);
