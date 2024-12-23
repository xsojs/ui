import css from "@xso/css";
import vars from "./vars";

css.def('*', {
    fontFamily: 'Roboto',
    fontSize: '20px'
})

css.def('a', {
    color: vars.secondary,
    textDecoration: 'none',
    textShadow: `0 0 2px ${vars.secondary}`,
    ':hover': {
        color: vars.primary,
        textShadow: `0 0 2px ${vars.secondary}, 0 0 2px ${vars.secondary}`,
    }
})

const theme = {
    media: {
        mobile: '@media only screen and (max-width: 768px)',
        desktop: '@media only screen and (min-width: 769px)'
    },
    aside: {
        background: vars.backgroundDark,
        navigation: {
            links: {
                active: {
                    color: vars.secondary,
                    border: `2px solid ${vars.primary}`,
                    textShadow: `0 0 2px ${vars.secondary}`,
                    boxShadow: `inset 0 0 5px ${vars.primary}, 0 0 10px ${vars.primary}`
                },
                inactive: {
                    color: vars.secondary,
                    border: `2px solid transparent`,
                    over: {
                        border: `2px solid ${vars.tertiary}`,
                        boxShadow: `inset 0 0 2px ${vars.tertiary}, 0 0 5px ${vars.tertiary}`
                    }
                }
            }
        }
    },
    header: {
        background: vars.backgroundDark,
    },
    page: {
        ' code': {
            padding: '0 5px',
            margin: '0 3px',
            fontFamily: 'Roboto Mono',
            background: vars.backgroundDark,
            border: `1px solid ${vars.tertiary}`,
        }
    },
    footer: {
        background: vars.backgroundDark,
        color: 'white',
    },
    frame: {
        maxWidth: '1000px',
        margin: '0 auto',
        padding: '20px',
    },
    blockSpace: {
        margin: '40px 0',
    },
    title: {
        color: vars.secondary,
        textTransform: 'uppercase',
        '-webkitTextStroke': `1px ${vars.tertiary}`,
        textStroke: `1px ${vars.tertiary}`,
    },
    codeBlock: {
        background: vars.backgroundDark,
        boxShadow: `0 0 10px ${vars.tertiary}`,
    },
    codeTabs: {
        buttons: {
            active: {
                color: vars.secondary,
                border: `2px solid ${vars.primary}`,
                textShadow: `0 0 2px ${vars.secondary}`,
                boxShadow: `inset 0 0 5px ${vars.primary}, 0 0 10px ${vars.primary}`
            },
            inactive: {
                color: vars.secondary,
                border: `2px solid ${vars.tertiary}`,
                boxShadow: `inset 0 0 2px ${vars.tertiary}, 0 0 5px ${vars.tertiary}`
            }
        }
    },
    svgLink: {
        ' > span > svg path': {
            fill: `${vars.secondary} !important`,
            stroke: `${vars.tertiary}`,
            strokeWidth: `20`,
        },
        ':hover > span > svg': {
            ' path': {
                fill: `${vars.primary} !important`
            },
            filter: `drop-shadow(0 0 2px ${vars.tertiary})`,
        }
    }
};

export default theme;