import com from '@xso/com';
import css from '@xso/css';

import CodeBlock from "../CodeBlock/index.js";

import style from './style.js';

function ExampleBlock({example, code}) {
    this.view(() => [
        { div: {
            class: css(style.exampleBlock),
            _: example
        } },
        { [CodeBlock]: {
            language: 'javascript',
            source: code
        }}, // CodeBlock
    ]);
}

export default com(ExampleBlock);