
function baseProps(props, base = {}) {
    const newProps = {};
    if (props.class) {
        if (base.class && base.class != '') {
            newProps['class'] = base.class.trim() +' '+ props.class.trim();
        } else {
            newProps['class'] = props.class.trim();
        }
    } else if (base.class && base.class != '') {
        newProps['class'] = base.class.trim();
    }
    if (props.style) {
        newProps['style'] = props.style;
    }
    for (const _key of Object.keys(props)) {
        const key = _key.toLowerCase();
        if (key == 'onclick'
            || key == 'ondblclick'
            || key == 'onblur'
            || key == 'onfocus'
            || key == 'onfocusin'
            || key == 'onfocusout'
            || key == 'ongotpointercapture'
            || key == 'onlostpointercapture'
            || key == 'onmousein'
            || key == 'onmousedown'
            || key == 'onmouseenter'
            || key == 'onmouseleave'
            || key == 'onmousemove'
            || key == 'onmouseout'
            || key == 'onmouseover'
            || key == 'onmouseup'
            || key == 'oninput'
            || key == 'onchange'
            || key == 'onkeydown'
            || key == 'onkeyup'
            || key == 'onpointercancel'
            || key == 'onpointerdown'
            || key == 'onpointerenter'
            || key == 'onpointerleave'
            || key == 'onpointermove'
            || key == 'onpointerout'
            || key == 'onpointerover'
            || key == 'onpointerup'
            || key == 'onscrool'
            || key == 'onscroolend'
            || key == 'ontouchcancel'
            || key == 'ontouchend'
            || key == 'ontouchmove'
            || key == 'ontouchstart'
            || key == 'onwheel') {
            newProps[key] = props[_key];
        }
    }
    return newProps;
}

export default baseProps;