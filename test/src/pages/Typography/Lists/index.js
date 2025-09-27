import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {List} from "@xso/ui";

function Lists() {
    this.view(() => [
        { h3: { _: 'Lists' } },
        { h4: { _: 'Unstyled' } },
        { p: { _: 'Remove the default list-style and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.' } },
        { [ExampleBlock]: {
            example: [
                { [List]: {
                    unstyled: true,
                    _: [
                        { [List.Item]: { _: 'This is a list.' } },
                        { [List.Item]: { _: 'It appears completely unstyled.' } },
                        { [List.Item]: { _: 'Structurally, it’s still a list.' } },
                        { [List.Item]: { _: 'However, this style only applies to immediate child elements.' } },
                        { [List.Item]: { _: [
                            'Nested lists:',
                            { [List]: { _: [
                                { [List.Item]: { _: 'are unaffected by this style' } },
                                { [List.Item]: { _: 'will still show a bullet' } },
                                { [List.Item]: { _: 'and have appropriate left margin' } },
                            ] } }
                        ] } },
                        { [List.Item]: { _: 'This may still come in handy in some situations.' } },
                    ]
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {List} from "@xso/ui";
            
            function ListExample() { 
                this.view(() => [
                    { [List]: {
                        unstyled: true,
                        _: [
                            { [List.Item]: { _: 'This is a list.' } },
                            { [List.Item]: { _: 'It appears completely unstyled.' } },
                            { [List.Item]: { _: 'Structurally, it’s still a list.' } },
                            { [List.Item]: { _: 'However, this style only applies to immediate child elements.' } },
                            { [List.Item]: { _: [
                                'Nested lists:',
                                { [List]: { _: [
                                    { [List.Item]: { _: 'are unaffected by this style' } },
                                    { [List.Item]: { _: 'will still show a bullet' } },
                                    { [List.Item]: { _: 'and have appropriate left margin' } },
                                ] } }
                            ] } },
                            { [List.Item]: { _: 'This may still come in handy in some situations.' } },
                        ]
                    } },
                ]);
            }
            
            export default com(ListExample);
        `
        } },
        { h4: { _: 'Inline' } },
        { p: { _: 'Remove a list’s bullets and apply some light margin with a combination of two classes, .list-inline and .list-inline-item.' } },
        { [ExampleBlock]: {
            example: [
                { [List]: {
                    inline: true,
                    _: [
                        { [List.Item]: { _: 'This is a list item.' } },
                        { [List.Item]: { _: 'And another one.' } },
                        { [List.Item]: { _: 'But they’re displayed inline.' } },
                    ]
                } }
            ],
            code: `
            import com from "@xso/com";
            
            import {List} from "@xso/ui";
            
            function ListExample() { 
                this.view(() => [
                    { [List]: { 
                        inline: true,
                        _: [
                            { [List.Item]: { _: 'This is a list item.' } },
                            { [List.Item]: { _: 'And another one.' } },
                            { [List.Item]: { _: 'But they’re displayed inline.' } },
                        ]
                    } }
                ]);
            }
            
            export default com(ListExample);
            `
        } },
        { h4: { _: 'Description list alignment' } },
        { p: { _: 'Align terms and descriptions horizontally by using our grid system’s predefined classes (or semantic mixins). For longer terms, you can optionally add a .text-truncate class to truncate the text with an ellipsis.' } },
        { [ExampleBlock]: {
            example: [
                { dl: {
                    class: 'row',
                    _: [
                        { dt: { class: 'col-sm-3', _: 'Description lists' } },
                        { dd: { class: 'col-sm-9', _: 'A description list is perfect for defining terms.' } },
                        { dt: { class: 'col-sm-3', _: 'Term' } },
                        { dd: { class: 'col-sm-9', _: [
                                { p: { _: 'Definition for the term.' } },
                                { p: { _: 'And some more placeholder definition text.' } }
                        ] } },
                        { dt: { class: 'col-sm-3', _: 'Another term' } },
                        { dd: { class: 'col-sm-9', _: 'This definition is short, so no extra paragraphs or anything.' } },
                        { dt: { class: 'col-sm-3 text-truncate', _: 'Truncated term is truncated' } },
                        { dd: { class: 'col-sm-9', _: 'This can be useful when space is tight. Adds an ellipsis at the end.' } },
                        { dt: { class: 'col-sm-3', _: 'Nesting' } },
                        { dd: { class: 'col-sm-9', _: [
                            { dl: { class: 'row', _: [
                                { dt: { class: 'col-sm-4', _: 'Nested definition list' } },
                                { dd: { class: 'col-sm-8', _: 'I heard you like definition lists. Let me put a definition list inside your definition list.' } },
                            ] } }
                        ] } },
                    ]
                } }
            ],
            code: `
            import com from "@xso/com";
            
            function DescriptionListExample() { 
                this.view(() => [
                    { dl: {
                        class: 'row',
                        _: [
                            { dt: { class: 'col-sm-3', _: 'Description lists' } },
                            { dd: { class: 'col-sm-9', _: 'A description list is perfect for defining terms.' } },
                            { dt: { class: 'col-sm-3', _: 'Term' } },
                            { dd: { class: 'col-sm-9', _: [
                                { p: { _: 'Definition for the term.' } },
                                { p: { _: 'And some more placeholder definition text.' } }
                            ] } },
                            { dt: { class: 'col-sm-3', _: 'Another term' } },
                            { dd: { class: 'col-sm-9', _: 'This definition is short, so no extra paragraphs or anything.' } },
                            { dt: { class: 'col-sm-3 text-truncate', _: 'Truncated term is truncated' } },
                            { dd: { class: 'col-sm-9', _: 'This can be useful when space is tight. Adds an ellipsis at the end.' } },
                            { dt: { class: 'col-sm-3', _: 'Nesting' } },
                            { dd: { class: 'col-sm-9', _: [
                                { dl: { class: 'row', _: [
                                    { dt: { class: 'col-sm-4', _: 'Nested definition list' } },
                                    { dd: { class: 'col-sm-8', _: 'I heard you like definition lists. Let me put a definition list inside your definition list.' } },
                                ] } }
                            ] } },
                        ]
                    } }
                ]);
            }
            
            export default com(DescriptionListExample);
            `
        } },
    ]);
}

export default com(Lists);
