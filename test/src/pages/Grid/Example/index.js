import com from '@xso/com';
import css from '@xso/css';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Container, Row, Col} from "@xso/ui";

function Example() {
    this.view(() => [
        { h3: { _: 'Example' } },
        { p: { _: 'Bootstrap\'s grid system uses a series of containers, rows, and columns to layout and align content. It’s built with flexbox and is fully responsive. Below is an example and an in-depth explanation for how the grid system comes together.' } },
        { [ExampleBlock]: {
            example: [
                { [Container]: {
                    class: 'text-center '+ css({
                        '>div.row': {
                            margin: '5px',
                            border: '1px solid #ff2',
                            '>div.col': {
                                border: '1px solid #ff2',
                                background: '#441',
                            }
                        }
                    }),
                    _: [
                        { [Row]: {
                            _: [
                                {[Col] : { _: 'Column 1' }},
                                {[Col] : { _: 'Column 2' }},
                            ]
                        } },
                    ],
                } },
            ],
            code: `
            import com from "@xso/com";
            import css from "@xso/css";
            
            import {Container, Row, Col} from "@xso/ui";
            
            function GridExample() { 
                this.view(() => [
                    { [Container]: {
                        class: 'text-center '+ css({
                            '>div.row': {
                                margin: '5px',
                                border: '1px solid #ff2',
                                '>div.col': {
                                    border: '1px solid #ff2',
                                    background: '#441',
                                }
                            }
                        }),
                        _: [
                            { [Row]: {
                                _: [
                                    {[Col] : { _: 'Column 1' }},
                                    {[Col] : { _: 'Column 2' }},
                                ]
                            } },
                        ],
                    } },
                ]);
            }
            
            export default com(GridExample);
        `
        } },
        { p: { _: 'The above example creates three equal-width columns across all devices and viewports using our predefined grid classes. Those columns are centered in the page with the parent .container.' } },
    ]);
}

export default com(Example);
