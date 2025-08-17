import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Abbr} from "@xso/ui";

function Abbreviations() {
    this.view(() => [
        { h3: { _: 'Abbreviations' } },
        { p: { _: 'Stylized implementation of HTML\'s <abbr> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.' } },
        { p: { _: 'Add .initialism to an abbreviation for a slightly smaller font-size.' } },
        { [ExampleBlock]: {
            example: [
                { p: {
                    _: {[Abbr]: {title: 'attribute', _: 'attr'}},
                } },
                { p: {
                    _: { [Abbr]: {
                        title: 'HyperText Markup Language',
                        initialism: true,
                        _: 'HTML'
                    } }
                } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Abbr} from "@xso/ui";
            
            function AbbrExample() { 
                this.view(() => [
                    { p: {
                        _: {[Abbr]: {title: 'attribute', _: 'attr'}},
                    } },
                    { p: {
                        _: { [Abbr]: {
                            title: 'HyperText Markup Language',
                            initialism: true,
                            _: 'HTML'
                        } }
                    } },
                ]);
            }
            
            export default com(AbbrExample);
        `
        } },
    ]);
}

export default com(Abbreviations);
