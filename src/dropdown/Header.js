import com from "@xso/com";

function Header() {
    this.view(()=> [
        { li: {
                _: { h6: {
                        class: 'dropdown-header'
                    } }
            } }
    ]);
}

export default com(Header);