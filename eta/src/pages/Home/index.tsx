import React, { Component } from 'react';
import styled from 'styled-components';

const Itens = styled.div`
    p {display: none}
    p:target {display: block}
    p:not(:target) {display: none}
    p:target {display: block}
`
class Home extends Component {
    render() {
        return (
            <>
                <p>
                    <a href="#item1">item 1</a>
                    <a href="#item2">item 2</a>
                    <a href="#item3">item 3</a>
                    <a href="#default">clear</a>
                </p>
                <Itens className="items">
                    <p id="item1">... item 1...</p>
                    <p id="item2">... item 2...</p>
                    <p id="item3">...</p>
                    <p id="default"> by default, show no text</p>
                </Itens>
            </>
        );

    }
}

export default Home;