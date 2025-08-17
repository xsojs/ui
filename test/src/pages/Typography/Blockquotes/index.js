import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Blockquote} from "@xso/ui";

function Blockquotes() {
    this.view(() => [
        { h3: { _: 'Blockquotes' } },
        { p: { _: 'For quoting blocks of content from another source within your document. Wrap <blockquote class="blockquote"> around any HTML as the quote.' } },
        { [ExampleBlock]: {
            example: [
                { [Blockquote]: {
                    _: 'A well-known quote, contained in a blockquote element.'
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Blockquote} from "@xso/ui";
            
            function BlockquoteExample() { 
                this.view(() => [
                    { [Blockquote]: {
                        _: 'A well-known quote, contained in a blockquote element.'
                    } },
                ]);
            }
            
            export default com(BlockquoteExample);
        `
        } },
        { h3: { _: 'Naming a source' } },
        { p: { _: 'The HTML spec requires that blockquote attribution be placed outside the <blockquote>. When providing attribution, wrap your <blockquote> in a <figure> and use a <figcaption> or a block level element (e.g., <p>) with the .blockquote-footer class. Be sure to wrap the name of the source work in <cite> as well.' } },
        { [ExampleBlock]: {
            example: [
                { [Blockquote]: {
                    _: 'A well-known quote, contained in a blockquote element.',
                    footer: [
                        'Someone famous in ',
                        { cite : {title: 'Source Title', _: 'Source Title' } }
                    ],
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Blockquote} from "@xso/ui";
            
            function BlockquoteExample() { 
                this.view(() => [
                    { [Blockquote]: {
                        _: 'A well-known quote, contained in a blockquote element.',
                        footer: [
                            'Someone famous in ',
                            { cite : {title: 'Source Title', _: 'Source Title' } }
                        ],
                    } },
                ]);
            }
            
            export default com(BlockquoteExample);
            `
        } },
        { h3: { _: 'Alignment' } },
        { p: { _: 'Use text utilities as needed to change the alignment of your blockquote.' } },
        { [ExampleBlock]: {
            example: [
                { [Blockquote]: {
                    align: 'center',
                    footer: [
                        'Someone famous in ',
                        { cite : {title: 'Source Title', _: 'Source Title' } }
                    ],
                    _: 'A well-known quote, contained in a blockquote element.',
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Blockquote} from "@xso/ui";
            
            function BlockquoteExample() { 
                this.view(() => [
                    { [Blockquote]: {
                        align: 'center',
                        footer: [
                            'Someone famous in ',
                            { cite : {title: 'Source Title', _: 'Source Title' } }
                        ],
                        _: 'A well-known quote, contained in a blockquote element.',
                    } },
                ]);
            }
            
            export default com(BlockquoteExample);
            `
        } },
        { [ExampleBlock]: {
            example: [
                { [Blockquote]: {
                    align: 'end',
                    footer: [
                        'Someone famous in ',
                        { cite : {title: 'Source Title', _: 'Source Title' } }
                    ],
                    _: 'A well-known quote, contained in a blockquote element.',
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Blockquote} from "@xso/ui";
            
            function BlockquoteExample() { 
                this.view(() => [
                    { [Blockquote]: {
                        align: 'end',
                        footer: [
                            'Someone famous in ',
                            { cite : {title: 'Source Title', _: 'Source Title' } }
                        ],
                        _: 'A well-known quote, contained in a blockquote element.',
                    } },
                ]);
            }
            
            export default com(BlockquoteExample);
            `
        } },
    ]);
}

export default com(Blockquotes);
