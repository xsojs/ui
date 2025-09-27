import com from '@xso/com';

import Example from './Example';
import Sizing from './Sizing';
import Text from './Text';

function FormControlPage() {
    this.view(() => [
        { h1: { _: 'Form control' } },
        { p: { _: 'Give textual form controls like <input>s and <textarea>s an upgrade with custom styles, sizing, focus states, and more.' } },
        { [Example]: { } },
        { [Sizing]: { } },
        { [Text]: { } },
    ]);
}

export default com(FormControlPage);