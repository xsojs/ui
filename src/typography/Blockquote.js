import com from "@xso/com";

import baseProps from "../utils/baseProps";

const Blockquote = com(function Blockquote(props) {
    const { align = null, footer = null, _ } = props;
    this.view(()=> {
        if (footer == null && align == null) {
            return [
                { blockquote: {
                    ...baseProps(props, { class: 'blockquote' }),
                    _
                } }
            ];
        }
        let cssClass = '';
        if (align === 'center') {
            cssClass = 'text-center';
        } else if (align === 'end') {
            cssClass = 'text-end';
        }
        return [
            { figure: {
                ...baseProps(props, { class: cssClass }),
                _: [
                    { blockquote: {
                        class: 'blockquote',
                        _
                    } },
                    footer ? { figcaption: {
                        class: 'blockquote-footer',
                        _: footer
                    } } : null
                ]
            } }
        ];
    });
});

export default Blockquote;