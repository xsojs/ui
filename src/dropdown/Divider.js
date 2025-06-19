import com from "@xso/com";

function Divider() {
    this.view(()=> [
        { li: {
            _: { hr: {
                class: 'dropdown-divider'
            } }
        } }
    ]);
}

export default com(Divider);