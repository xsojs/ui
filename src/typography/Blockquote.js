import com from "@xso/com";

import baseProps from "../utils/baseProps";

const Blockquote = com(function Blockquote(props) {
    const { center = false, end = false, footer = null, _ } = props;
    this.view(()=> {
        if (footer == null && center == false && end == false) {
            return [
                { blockquote: {
                    ...baseProps(props, { class: 'blockquote' }),
                    _
                } }
            ];
        }
        let cssClass = '';
        if (center) {
            cssClass = 'text-center';
        } else if (end) {
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
                    footer
                ]
            } }
        ];
    });
});

Blockquote.Footer = com(function Footer(props) {
    const { _ } = props;
    this.view(()=> [
        { figcaption: {
            ...baseProps(props, { class: 'blockquote-footer' }),
            _
        } }
    ]);
});

export default Blockquote;