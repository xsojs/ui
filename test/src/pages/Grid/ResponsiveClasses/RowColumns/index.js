import com from '@xso/com';
import css from '@xso/css';
import ExampleBlock from "../../../../components/ExampleBlock/index.js";
import {Container, Row, Col} from "@xso/ui";

function RowColumns() {
    this.view(() => [
        { h5: { _: 'Row columns' } },
        { p: { _: 'Use the responsive .row-cols-* classes to quickly set the number of columns that best render your content and layout. Whereas normal .col-* classes apply to the individual columns (e.g., .col-md-4), the row columns classes are set on the parent .row as a shortcut. With .row-cols-auto you can give the columns their natural width.' } },
        { p: { _: 'Use these row columns classes to quickly create basic grid layouts or to control your card layouts.' } },
        { [ExampleBlock]: {
            example: [
                { [Container]: {
                    class: 'text-center '+ css({
                        '>div.row': {
                            margin: '5px',
                            marginBottom: '20px',
                            border: '4px solid #f11',
                            '&:nth-child(1)': { borderColor: '#f11' },
                            '&:nth-child(2)': { borderColor: '#1f1' },
                            '&:nth-child(3)': { borderColor: '#11f' },
                            '&:nth-child(4)': { borderColor: '#f1f' },
                            '&:nth-child(5)': { borderColor: '#ff1', marginBottom: 'unset' },
                            '>div[class^="col"]': {
                                border: '2px solid #fff',
                                background: '#444',
                            }
                        }
                    }),
                    _: [
                        { [Row]: {
                            cols: 2,
                            _: [
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                            ]
                        } },
                        { [Row]: {
                            cols: 3,
                            _: [
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                            ]
                        } },
                        { [Row]: {
                            cols: 'auto',
                            _: [
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                            ]
                        } },
                        { [Row]: {
                            cols: 4,
                            _: [
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                            ]
                        } },
                        { [Row]: {
                            cols: 4,
                            _: [
                                {[Col] : { _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                                {[Col] : { span: 6, _: 'Column' }},
                                {[Col] : { _: 'Column' }},
                            ]
                        } },
                    ],
                } },
            ],
            code: `
            import com from "@xso/com";
            import css from "@xso/css";
            
            import {Container, Row, Col} from "@xso/ui";
            
            function RowColumns() { 
                this.view(() => [
                    { [Container]: {
                        class: 'text-center '+ css({
                            '>div.row': {
                                margin: '5px',
                                marginBottom: '20px',
                                border: '4px solid #f11',
                                '&:nth-child(1)': { borderColor: '#f11' },
                                '&:nth-child(2)': { borderColor: '#1f1' },
                                '&:nth-child(3)': { borderColor: '#11f' },
                                '&:nth-child(4)': { borderColor: '#f1f' },
                                '&:nth-child(5)': { borderColor: '#ff1', marginBottom: 'unset' },
                                '>div[class^="col"]': {
                                    border: '2px solid #fff',
                                    background: '#444',
                                }
                            }
                        }),
                        _: [
                            { [Row]: {
                                cols: 2,
                                _: [
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                ]
                            } },
                            { [Row]: {
                                cols: 3,
                                _: [
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                ]
                            } },
                            { [Row]: {
                                cols: 'auto',
                                _: [
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                ]
                            } },
                            { [Row]: {
                                cols: 4,
                                _: [
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                ]
                            } },
                            { [Row]: {
                                cols: 4,
                                _: [
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                    {[Col] : { span: 6, _: 'Column' }},
                                    {[Col] : { _: 'Column' }},
                                ]
                            } },
                        ],
                    } },
                ]);
            }
            
            export default com(RowColumns);
        `
        } },
    ]);
}

export default com(RowColumns);
