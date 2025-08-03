import com from '@xso/com';
import ExampleBlock from "../../../components/ExampleBlock/index.js";
import {Display1, Display2, Display3, Display4, Display5, Display6} from "@xso/ui";

function DisplayHeadings() {
    this.view(() => [
        { h3: { _: 'Display headings' } },
        { p: { _: 'Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a display heading—a larger, slightly more opinionated heading style.' } },
        { [ExampleBlock]: {
            example: [
                { [Display1]: { _: [ 'Display 1' ] } },
                { [Display2]: { _: [ 'Display 2' ] } },
                { [Display3]: { _: [ 'Display 3' ] } },
                { [Display4]: { _: [ 'Display 4' ] } },
                { [Display5]: { _: [ 'Display 5' ] } },
                { [Display6]: { _: [ 'Display 6' ] } },
            ],
            code: `
            import com from "@xso/com";
            
            import {Display1, Display2, Display3, Display4, Display5, Display6} from "@xso/ui";
            
            function HeadingsExample() { 
                this.view(() => [
                    { [Display1]: { _: [ 'Display 1' ] } },
                    { [Display2]: { _: [ 'Display 2' ] } },
                    { [Display3]: { _: [ 'Display 3' ] } },
                    { [Display4]: { _: [ 'Display 4' ] } },
                    { [Display5]: { _: [ 'Display 5' ] } },
                    { [Display6]: { _: [ 'Display 6' ] } },
                ]);
            }
            
            export default com(HeadingsExample);
        `
        } },
    ]);
}

export default com(DisplayHeadings);
