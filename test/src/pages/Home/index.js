import com from "@xso/com";
import css from "@xso/css";

import { Container, Row, Col } from "@xso/ui";
import { Breadcrumb } from "@xso/ui";
import { Button } from "@xso/ui";
import { Code, Var, Kbd } from "@xso/ui";
import { Blockquote } from "@xso/ui";
import { Table } from "@xso/ui";
import { Input, Label } from "@xso/ui";
import { Select } from "@xso/ui";

import theme from "../../styles/theme";

function Home() {
    this.view(() => [
        { div: { // main
            class: css(theme.frame),
            _: [
                { [Breadcrumb]: {
                    _: [
                        { [Breadcrumb.Item]: {
                            _: 'Teste'
                        } },
                        { [Breadcrumb.Item]: {
                            active: true,
                            _: 'Teste'
                        } }
                    ]
                } },
                { [Button]: {
                    mode: 'danger',
                    outline: true,
                    _: 'Test Bootstrap'
                } },
                { [Code]: {
                    _: 'Test Bootstrap'
                } },
                { [Var]: {
                    _: 'Test Bootstrap'
                } },
                { [Kbd]: {
                    _: 'Test Bootstrap'
                } },
                { [Blockquote]: {
                    _: 'abc'
                } },
                { [Table]: {
                    striped: true,
                    dark: false,
                    hover: true,
                    responsive: true,
                    head: { dark: true },
                    columns: [
                        {
                            key: 'nome',
                            title: 'Nome'
                        },
                        {
                            key: 'idade',
                            title: 'Idade',
                            render: (v) => `(${v})`
                        }
                    ],
                    dataSource: [
                        { nome: 'André', idade: 21 },
                        { nome: 'Sandra', idade: 25 }
                    ]
                } },
                { [Container]: {
                    _: { [Row]: {
                        _: [
                            { [Col]: {
                                span: 4,
                                _: [
                                    { p: {
                                        _: [
                                            'Reactive Without Compilation',
                                            {p: {
                                                _: 'Teste...'
                                            }}
                                        ]
                                    } }
                                ]
                            } },
                            { [Col]: {
                                span: {default: 8, lg: 8},
                                offset: {default: 4, lg: 0},
                                style: {
                                    border: 'solid 2px yellow'
                                },
                                _: [
                                    { p: {
                                        _: 'Pure JavaScript Code'
                                    } }
                                ]
                            } },
                        ]
                    } }
                } },
                { [Input]: {
                    id: 'abc123',
                    type: 'checkbox',
                    button: true
                } },
                { [Label]: {
                    button: true,
                    outline: true,
                    mode: 'primary',
                    for: 'abc123',
                    _: 'Teste'
                } },
                { [Select]: {
                    _: [
                        { [Select.Option]: {
                            value: '1',
                            _: 'Ok..'
                        }}
                    ]
                } }
            ]
        } } // div.main
    ]);
}

export default com(Home);