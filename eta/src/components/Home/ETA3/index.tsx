import React, { Component } from 'react';
import styled from 'styled-components';
import PageTemplate from '../../../pages/PageTemplate';

const ETA3Container = styled.div`
    width: 100%;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Card = styled.div`
    width: 100%;
    background-color: var(--branco);
    border-radius: 8px;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

`
const Entradas = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    @media(min-width: 768px){
        min-width: 600px;
        margin-top: 20px;
    }
    @media(min-width: 1000px){
        min-width: 800px;
    }
`
const Op = styled.div`
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    @media(min-width: 1000px){
    }
`
const Title = styled.h3`
    max-width: 120px;
    font-size: 0.8rem;
    color: var(--gray-dark);
    margin-bottom: 10px;
    text-align: center;
    @media(min-width: 768px){
        width: 130px;
        font-size: 0.8rem;
    }
    @media(min-width: 1000px){
        min-width: 180px;
        max-width: 200px;
        font-size: 1.2rem;
    }
`
const Input = styled.input`
    width: 60px;
    outline: none;
    height: 40px;
    padding: 10px;
    text-align: center;
    border: 1px solid var(--gray-dark);
    border-radius: 8px;
    @media(min-width: 768px){
        width: 120px;
    }
`
const Dimensionar = styled.div`
    width: 100%;
    margin-top: 40px;
`
const Fator = styled.div`
    width: 254px;
    background-color: red;
    margin-left: auto;
    margin-right: 0;
    display: flex;
    @media(min-width: 768px){
        width: 274px;
    }
    @media(min-width: 1000px){
        width: 344px;
    }
`
const Button = styled.button`
    width: 150px;
    padding: 20px;
    
    font-size: 1.2rem;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    color: var(--branco);
    background-color: var(--secundaria);
    display: flex;
    align-items: center;
    justify-content: center;
    @media(min-width: 768px){
        font-size: 1.4rem;
    }
`
class Eta3 extends Component {
    render() {
        return (
            <PageTemplate>
                <ETA3Container>
                    <Card>
                        <Entradas>
                            <Op>
                                <Title>Q (m³/s)</Title>
                                <Input type="number" />
                            </Op>
                            <Op>
                                <Title>t (min)</Title>
                                <Input type="number" />
                            </Op>
                            <Op>
                                <Title>Nº de canais</Title>
                                <Input type="number" />
                            </Op>
                            <Op>
                                <Title>Profundidade</Title>
                                <Input type="number" />
                            </Op>
                            <Op>
                                <Title>Nº de decantadores</Title>
                                <Input type="number" />
                            </Op>
                        </Entradas>
                        <Entradas>
                            <Op>
                                <Title>Largura (m)</Title>
                                <Input type="number" />
                            </Op>
                            <Op>
                                <Title>G1 (1/s)</Title>
                                <Input type="number" />
                            </Op>
                            <Op>
                                <Title>G2 (1/s)</Title>
                                <Input type="number" />
                            </Op>
                            <Op>
                                <Title>G3 (1/s)</Title>
                                <Input type="number" />
                            </Op>
                            <Op>
                                <Title>G4 (1/s)</Title>
                                <Input type="number" />
                            </Op>
                            
                        </Entradas>
                        <Dimensionar>
                            <Fator>
                                <Op>
                                    <Title>Fator de correção (%)</Title>
                                    <Input />
                                </Op>
                                <Button>Dimensionar</Button>
                            </Fator>
                        </Dimensionar>
                    </Card>
                </ETA3Container>
            </PageTemplate>
        );
    }
}

export default Eta3;