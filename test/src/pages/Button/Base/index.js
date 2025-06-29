import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Button} from "@xso/ui";

function Base() {
    this.view(() => [
        { h3: { _: 'Base class' } },
        { p: { _: 'Bootstrap has a base .btn class that sets up basic styles such as padding and content alignment. By default, .btn controls have a transparent border and background color, and lack any explicit focus and hover styles.' } },
        { [ExampleBlock]: {
            example: [
                { [Button]: { _: 'Base Class' } },
            ],
            code: `
                import com from "@xso/com";
                
                import {Button} from "@xso/ui";
                
                function ButtonExample() { 
                    this.view(() => [
                        { [Button]: { _: 'Base Class' } },
                    ]);
                }
                
                export default com(ButtonExample);
            `
        } },
    ]);
}

export default com(Base);