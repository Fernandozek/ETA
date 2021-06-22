import React, { Component } from 'react';
import styled from 'styled-components';
import PageTemplate from '../../../pages/PageTemplate';

const ETA2Container = styled.div`
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
    width: 100%;
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
const Button = styled.button`
    width: 150px;
    padding: 20px;
    
    margin-left: auto;
    margin-right: 0;
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
class Eta2 extends Component {
    render() {
        return (
            <PageTemplate>
                <ETA2Container>
                    <Card>
                        <Entradas>
                            <Op>
                                <Title>Q (m³/s)</Title>
                                <Input type="number" />
                            </Op>
                            <Op>
                                <Title>vs (m/dia)</Title>
                                <Input type="number" />
                            </Op>
                            <Op>
                                <Title>Nº un. de sedimentação</Title>
                                <Input type="number" />
                            </Op>
                            <Op>
                                <Title>Profundidade (m)</Title>
                                <Input type="number" />
                            </Op>
                        </Entradas>
                        <Dimensionar>
                            <Button>Dimensionar</Button>
                        </Dimensionar>
                    </Card>
                </ETA2Container>
            </PageTemplate>
        );
    }
}

export default Eta2;