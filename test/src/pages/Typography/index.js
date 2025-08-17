import com from '@xso/com';
import Headings from "./Headings";
import DisplayHeadings from "./DisplayHeadings";
import Abbreviations from "./Abbreviations";
import Blockquotes from "./Blockquotes";
import Lists from "./Lists";

function TypographyPage() {
    this.view(() => [
        { h1: { _: 'Typography' } },
        { p: { _: 'Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.' } },
        { [Headings]: {} },
        { [DisplayHeadings]: {} },
        { [Abbreviations]: {} },
        { [Blockquotes]: {} },
        { [Lists]: {} },
    ]);
}

export default com(TypographyPage);
