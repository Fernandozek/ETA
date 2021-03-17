import React, { Component } from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import Dec from '../../Utils/Dec';

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
const Resultados = styled.div`
    margin-top: 100px;
    padding: 0 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(min-width: 768px){
        flex-direction: row;
    }
`
const CardResultados = styled.div`
    width: 100%;
    padding: 15px;
    margin-bottom: 30px;
    background-color: var(--branco);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 768px){
        width: 65%;
        margin-right: 20px;
    }
    @media(min-width: 768px){
        width: 75%;
    }
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 768px){
        width: 28%;
    }
`
const TitleCard = styled.h2`
    margin-bottom: 30px;
    text-align: left;
    color: var(--primaria-dark);

`
const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: auto auto auto;
    @media(min-width: 1000px){
        grid-template-columns: auto auto auto auto auto;
    }
`
const GridRight = styled.div`
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    text-align: left;
`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ItemRight = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`
const Name = styled.h2`
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--gray-dark);
    position: relative;
    display: inline-block;
    
    .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: #555;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 1;
        bottom: 125%;
        left: 50%;
        margin-left: -60px;
        opacity: 0;
        transition: opacity 0.3s;
    }

    .tooltiptext::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }

    :hover .tooltiptext {
        visibility: visible;
        opacity: 1;
    }
`
const Value = styled.p`
    color: var(--gray-dark);
`
const TitleValue = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--primaria);
`
class Eta2 extends Component {
    render() {
        var pontos = 5;
        var tmp = [];
        for (var i = 0; i < pontos; i++) {
            tmp.push(i);
        }
        const [V1, V2, V3] = Dec.dec(0.8, 40, 4, 4.5);

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

                    <Resultados>
                        <Left>
                            <CardResultados>
                                <TitleCard>Painel de resultados</TitleCard>
                                <Grid>
                                    <Item>
                                        <Name>ql (m³/s)
                                            <span className="tooltiptext">Vazão que passa pela unidade</span>  
                                        </Name>
                                        <Value>{V1[0].toFixed(4)}</Value>
                                    </Item>
                                    <Item>
                                        <Name>t (s)
                                            <span className="tooltiptext">Tempo de detenção</span>  
                                        </Name>
                                        <Value>{V1[1].toFixed(0)}</Value>
                                    </Item>
                                    <Item>
                                        <Name>B (m)
                                            <span className="tooltiptext">Tempo de detenção</span>  
                                        </Name>
                                        <Value>{V1[2].toFixed(0)}</Value>
                                    </Item>
                                    <Item>
                                        <Name>L (m)</Name>
                                        <Value>{V1[3].toFixed(4)}</Value>
                                    </Item>
                                    <Item>
                                        <Name>V0 (cm/s)</Name>
                                        <Value>{V1[4].toFixed(4)}</Value>
                                    </Item>
                                    <Item>
                                        <Name>As (m²)</Name>
                                        <Value>{V2[0].toFixed(0)}</Value>
                                    </Item>
                                    <Item>
                                        <Name>Lv (m)</Name>
                                        <Value>{V2[1].toFixed(4)}</Value>
                                    </Item>
                                    <Item>
                                        <Name>Lcalha (m)</Name>
                                        <Value>{V2[2].toFixed(4)}</Value>
                                    </Item>
                                    <Item>
                                        <Name>Nº de calhas</Name>
                                        <Value>{V2[3].toFixed(0)}</Value>
                                    </Item>
                                    <Item>
                                        <Name>S entre calhas (m)</Name>
                                        <Value>{V2[4].toFixed(4)}</Value>
                                    </Item>
                                </Grid>
                            </CardResultados>
                            <CardResultados>
                                <TitleCard>Alturas obtidas (m)</TitleCard>
                                <Grid>
                                    
                                </Grid>
                            </CardResultados>
                            
                        </Left>
                        <Right>
                            <CardResultados>
                                <GridRight>
                                    <ItemRight>
                                        <TitleValue>Nº de Reynolds (Re)</TitleValue>
                                        <Value>{V3[0]}</Value>
                                    </ItemRight>
                                    <ItemRight>
                                        <TitleValue>Condição satisfeita:</TitleValue>
                                        <Value>Re menor 2000 </Value>
                                    </ItemRight>
                                    <ItemRight>
                                        <TitleValue>L/B</TitleValue>
                                        <Value>{V3[2].toFixed(5)}</Value>
                                    </ItemRight>
                                </GridRight>
                                {

                                }
                            </CardResultados>

                        </Right>
                    </Resultados>
                </ETA2Container>
            </PageTemplate>
        );
    }
}

export default Eta2;