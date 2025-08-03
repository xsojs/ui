import com from '@xso/com';
import Headings from "./Headings";
import DisplayHeadings from "./DisplayHeadings";

function TypographyPage() {
    this.view(() => [
        { h1: { _: 'Typography' } },
        { p: { _: 'Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.' } },
        { [Headings]: {} },
        { [DisplayHeadings]: {} },
    ]);
}

export default com(TypographyPage);
