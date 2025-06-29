import com from '@xso/com';
import ExampleBlock from "../../components/ExampleBlock/index.js";
import {Button} from "@xso/ui";

import Base from "./Base";
import Variants from "./Variants";
import ButtonTags from "./ButtonTags";
import OutlineButtons from "./OutlineButtons";
import Sizes from "./Sizes";

function ButtonPage() {
    this.view(() => [
        { h1: { _: 'Button' } },
        { p: { _: 'Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.' } },
        { [Base]: { } },
        { [Variants]: { } },
        { h3: { _: 'Disable text wrapping' } },
        { p: { _: 'If you don’t want the button text to wrap, you can add the .text-nowrap class to the button.' } },
        { [ButtonTags]: { } },
        { [OutlineButtons]: { } },
        { [Sizes]: { } },
    ]);
}

export default com(ButtonPage);