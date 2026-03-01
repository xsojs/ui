import com from '@xso/com';
import css from '@xso/css';
import ExampleBlock from "../../../../components/ExampleBlock/index.js";
import {Container, Row, Col} from "@xso/ui";

function MixAndMatch() {
    this.view(() => [
        { h5: { _: 'Mix and match' } },
        { p: { _: 'Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes for each tier as needed. See the example below for a better idea of how it all works.' } },
        { [ExampleBlock]: {
            example: [
                { [Container]: {
                    class: 'text-center '+ css({
                        '>div.row': {
                            margin: '5px',
                            border: '1px solid #f61',
                            '>div[class^="col"]': {
                                border: '1px solid #f61',
                                background: '#421',
                            }
                        }
                    }),
                    _: [
                        { [Row]: {
                            _: [
                                {[Col] : { md: 8, _: '.col-md-8' }},
                                {[Col] : { span: 6, md: 4, _: '.col-6 .col-md-4' }},
                            ]
                        } },
                        { [Row]: {
                            _: [
                                {[Col] : { span: 6, md: 4, _: '.col-6 .col-md-4' }},
                                {[Col] : { span: {default: 6, md: 4}, _: '.col-6 .col-md-4' }},
                                {[Col] : { span: {default: 6, md: 4}, _: '.col-6 .col-md-4' }},
                            ]
                        } },
                        { [Row]: {
                            _: [
                                {[Col] : { span: 6, _: '.col-6' }},
                                {[Col] : { span: 6, _: '.col-6' }},
                            ]
                        } },
                    ],
                } },
            ],
            code: `
            import com from "@xso/com";
            import css from "@xso/css";
            
            import {Container, Row, Col} from "@xso/ui";
            
            function MixAndMatch() { 
                this.view(() => [
                    { [Container]: {
                        class: 'text-center '+ css({
                            '>div.row': {
                                margin: '5px',
                                border: '1px solid #f61',
                                '>div[class^="col"]': {
                                    border: '1px solid #f61',
                                    background: '#421',
                                }
                            }
                        }),
                        _: [
                            { [Row]: {
                                _: [
                                    {[Col] : { md: 8, _: '.col-md-8' }},
                                    {[Col] : { span: 6, md: 4, _: '.col-6 .col-md-4' }},
                                ]
                            } },
                            { [Row]: {
                                _: [
                                    {[Col] : { span: 6, md: 4, _: '.col-6 .col-md-4' }},
                                    {[Col] : { span: {default: 6, md: 4}, _: '.col-6 .col-md-4' }},
                                    {[Col] : { span: {default: 6, md: 4}, _: '.col-6 .col-md-4' }},
                                ]
                            } },
                            { [Row]: {
                                _: [
                                    {[Col] : { span: 6, _: '.col-6' }},
                                    {[Col] : { span: 6, _: '.col-6' }},
                                ]
                            } },
                        ],
                    } },
                ]);
            }
            
            export default com(MixAndMatch);
        `
        } },
    ]);
}

export default com(MixAndMatch);
