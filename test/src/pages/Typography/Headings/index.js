import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {H1, H2, H3, H4, H5, H6} from "@xso/ui";

function Headings() {
    this.view(() => [
        { h3: { _: 'Headings' } },
        { p: { _: 'All HTML headings, <h1> through <h6>, are available.' } },
        { [ExampleBlock]: {
            example: [
                { [H1]: { _: [ 'H1. Heading 1' ] } },
                { [H2]: { _: [ 'H2. Heading 2' ] } },
                { [H3]: { _: [ 'H3. Heading 3' ] } },
                { [H4]: { _: [ 'H4. Heading 4' ] } },
                { [H5]: { _: [ 'H5. Heading 5' ] } },
                { [H6]: { _: [ 'H6. Heading 6' ] } },
            ],
            code: `
            import com from "@xso/com";
            
            import {H1, H2, H3, H4, H5, H6} from "@xso/ui";
            
            function HeadingsExample() { 
                this.view(() => [
                    { [H1]: { _: [ 'H1. Heading 1' ] } },
                    { [H2]: { _: [ 'H2. Heading 2' ] } },
                    { [H3]: { _: [ 'H3. Heading 3' ] } },
                    { [H4]: { _: [ 'H4. Heading 4' ] } },
                    { [H5]: { _: [ 'H5. Heading 5' ] } },
                    { [H6]: { _: [ 'H6. Heading 6' ] } },
                ]);
            }
            
            export default com(HeadingsExample);
        `
        } },
        { p: { _: '.h1 through .h6 classes are also available, for when you want to match the font styling of a heading but cannot use the associated HTML element.' } },
        { [ExampleBlock]: {
            example: [
                { p: { class: 'h1', _: [ 'H1. Heading 1' ] } },
                { p: { class: 'h2', _: [ 'H2. Heading 2' ] } },
                { p: { class: 'h3', _: [ 'H3. Heading 3' ] } },
                { p: { class: 'h4', _: [ 'H4. Heading 4' ] } },
                { p: { class: 'h5', _: [ 'H5. Heading 5' ] } },
                { p: { class: 'h6', _: [ 'H6. Heading 6' ] } },
            ],
            code: `
            import com from "@xso/com";
            
            function HeadingsExample() { 
                this.view(() => [
                    { p: { class: 'h1', _: [ 'H1. Heading 1' ] } },
                    { p: { class: 'h2', _: [ 'H2. Heading 2' ] } },
                    { p: { class: 'h3', _: [ 'H3. Heading 3' ] } },
                    { p: { class: 'h4', _: [ 'H4. Heading 4' ] } },
                    { p: { class: 'h5', _: [ 'H5. Heading 5' ] } },
                    { p: { class: 'h6', _: [ 'H6. Heading 6' ] } },
                ]);
            }
            
            export default com(HeadingsExample);
        `
        } },
        { h3: { _: 'Customizing headings' } },
        { p: { _: 'Use the included utility classes to recreate the small secondary heading text from Bootstrap 3.' } },
        { [ExampleBlock]: {
            example: [
                { [H3]: { _: [
                    'Fancy display heading ',
                    { small: {
                        class: 'text-body-secondary',
                        _: 'With faded secondary text'
                    } }
                ] } },
            ],
            code: `
            import com from "@xso/com";
            
            import {H3} from "@xso/ui";
            
            function HeadingsExample() { 
                this.view(() => [
                    { [H3]: { _: [
                        'Fancy display heading ',
                        { small: {
                            class: 'text-body-secondary',
                            _: 'With faded secondary text'
                        } }
                    ] } },
                ]);
            }
            
            export default com(HeadingsExample);
        `
        } },
    ]);
}

export default com(Headings);
