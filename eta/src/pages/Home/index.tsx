import React, { Component, useState } from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import Eta1 from '../../components/Home/ETA1';
import Eta2 from '../../components/Home/ETA2';
import Eta3 from '../../components/Home/ETA3';
import Eta4 from '../../components/Home/ETA4';
const HomeContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 50px 0;
`

const Menu = styled.div`
    a{
        padding: 10px 30px;
        font-size: 1.2rem;
        color: var(--branco);
        text-decoration: none;
        background-color: var(--gray);
        border-radius: 8px 8px 0 0;
    }
    
`
const Itens = styled.div`
    
    div {display: none}
    div:target {display: block}
    div:not(:target) {display: none}
    div:target {
        display: block;
        width: 600px;
        height: 400px;
        background-color: red;
    }
    
`

export default function Home(props:any) {
        return (
            <PageTemplate>
                <HomeContainer>
                    {
                        /*
                         
                    <Menu>
                        <a href="#canal1">Un. de Coagulação</a>
                        <a href="#canal2">Un de Decantação</a>
                        <a href="#canal3">Un de Floculação</a>
                        <a href="#canal4">Un. de Filtração</a>
                    </Menu>
                    <Itens>
                        <div id="canal1">
                            
                        </div>
                        <div id="canal2" >
                            <Eta2 />
                        </div>
                        <div id="canal3">
                            <Eta3  />
                        </div>
                        <div id="canal4">
                            <Eta4  />
                        </div>
                    </Itens>
                    */
                }
                </HomeContainer>
            </PageTemplate>
        );
}
