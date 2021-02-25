import React, { Component } from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import Floc from '../../Utils/Floc';
import { useState } from 'react';

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
const Resultados = styled.div`
    margin-top: 100px;
    padding: 0 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
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
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`
const TitleCard = styled.h2`
    margin-bottom: 30px;
    text-align: left;
    color: var(--primaria-dark);

`
const Name = styled.h2`
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--gray-dark);
`
const Value = styled.p`
    color: var(--gray-dark);
`
const Grid = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: auto auto auto auto;
`
const Section = styled.section`
    margin-top: 20px;
    @media(min-width: 768px){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

    }
`

const TableHead = styled.th`
    padding: 10px 5px; 
    color: var(--gray-dark);
    background-color: var(--gray-light);
    @media(min-width: 768px){
        font-size: 1.2rem;
    }
`
const Table = styled.table`
    margin-top: 20px;
    border-collapse: collapse;
    text-align: center;
    border-radius: 8px;
`
const TableHeadContainer = styled.thead`
    color: #fff;
    ${TableHead}:first-child{
        border-radius: 8px 0 0 0;
    }
    ${TableHead}:last-child{
        border-radius: 0 8px 0 0;
    }

`
const TableData = styled.td`
    padding: 10px 5px; 
    font-size: 0.8rem;
    color: var(--gray-dark);
    @media(min-width: 768px){
        font-size: 1.3rem;
    }
`
const TableRowContainer = styled.tr`
    background-color: var(--gray-light);
    border-radius: 0 0 8px 8px;    

`
interface Table1Props {
    points: number
}
const Tr1: React.FC<Table1Props> = (props) => {
    var tmp = [];
    var pontos = 1;
    for (var i = 0; i < 8; i++) {
        tmp.push(i);
    }
    var [M22, M2, M11, q, Vol, A, B, a] = Floc.floc(0.8, 25, 4, 4.5, 4, 11, 70, 50, 30, 15, 10);
    var [V1, V2, V3, V4, V5, V6, V7, V8] = Floc.m22(M22);
    return (
        <>
            {
                tmp.map((i, index) => {

                    return (

                        <TableRowContainer >
                            <TableData>{V1[i]}</TableData>
                            <TableData>{V2[i]}</TableData>
                            <TableData>{V3[i]}</TableData>
                            <TableData>{V4[i]}</TableData>
                            <TableData>{V5[i]}</TableData>
                            <TableData>{V6[i]}</TableData>
                            <TableData>{V7[i]}</TableData>
                            <TableData>{V8[i]}</TableData>
                        </TableRowContainer>
                    );
                })
            }
        </>
    )
}
export default function Coagulacao(props: any) {
        var [M22, M2, M11, q, Vol, A, B, a] = Floc.floc(0.8, 25, 4, 4.5, 4, 11, 70, 50, 30, 15, 10);
        var [V1, V2, V3, V4, V5, V6, V7, V8] = Floc.m22(M22);
        const [qms, setQms] = useState("");
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
                                    <Input type="number" />
                                </Op>
                                <Button>Dimensionar</Button>
                            </Fator>
                        </Dimensionar>
                    </Card>
                    <Resultados>
                        <CardResultados>
                            <TitleCard>Velocidades Obtidas (m/s)</TitleCard>
                            <Grid>
                                <Item>
                                    <Name>Área total de filtração (m²)</Name>
                                    <Value>{q}</Value>
                                </Item>
                                <Item>
                                    <Name>Número de filtros</Name>
                                    <Value>{Vol}</Value>
                                </Item>
                                <Item>
                                    <Name>Área de cada filtro (m²)</Name>
                                    <Value>{A}</Value>
                                </Item>
                                <Item>
                                    <Name>Dimensões do filtro L e Y (m)</Name>
                                    <Value>{B}</Value><br />
                                    <Value>{a}</Value>
                                </Item>
                            </Grid>
                        </CardResultados>
                        <CardResultados>
                            <TitleCard>Lavagem de filtros / Lâmina mínima de água sobre o leito filtrante</TitleCard>
                            <Grid>
                                <Item>
                                    <Name>Vazão de água de lavagem (m³/s)</Name>
                                    <Value>{V1[0]}</Value>
                                </Item>
                                <Item>
                                    <Name>Volume de lavagem (m³)</Name>
                                    <Value>{V1[1]}</Value>
                                </Item>

                                <Item>
                                    <Name>Volume de reservação (m³)</Name>
                                    <Value>{V1[2]}</Value>
                                </Item>
                                <Item>
                                    <Name>Tubulação de água de lavagem (mm)</Name>
                                    <Value>{V1[3]}</Value>
                                </Item>
                                <Item>
                                    <Name>Vazão de ar (L/s)</Name>
                                    <Value>{ }</Value>
                                </Item>
                                <Item>
                                    <Name>Lâmina da água (m)</Name>
                                    <Value>{ }</Value>
                                </Item>
                            </Grid>
                        </CardResultados>
                        <CardResultados>
                            <Section>
                                <Table>
                                    <TableHeadContainer>
                                        <TableHead>n</TableHead>
                                        <TableHead>e</TableHead>
                                        <TableHead>V1 (m/s)</TableHead>
                                        <TableHead>V2 (m/s)</TableHead>
                                        <TableHead>Dhd (m)</TableHead>
                                        <TableHead>Dhl (m)</TableHead>
                                        <TableHead>G'</TableHead>
                                        <TableHead>C</TableHead>
                                    </TableHeadContainer>
                                    <Tr1
                                        points={props.points}

                                    />
                                </Table>
                            </Section>
                        </CardResultados>
                        <CardResultados>
                            <TitleCard>Vertedor de saída</TitleCard>
                            <Grid>
                                <Item>
                                    <Name>Dimenssões de vertedor B e h (m)</Name>
                                    <Value>{ }</Value><br />
                                    <Value>{ }</Value>
                                </Item>
                                <Item>
                                    <Name>Consideração</Name>
                                    <Value>{ }</Value><br />
                                    <Value>{ }</Value>
                                </Item>
                            </Grid>
                        </CardResultados>
                        <CardResultados>
                            <TitleCard>Perdas de carga</TitleCard>
                            <Grid>
                                <Item>
                                    <Name>Areia</Name>
                                    <Value>{ }</Value>
                                </Item>
                                <Item>
                                    <Name>Antracito</Name>
                                    <Value>{ }</Value>
                                </Item>
                                <Item>
                                    <Name>Total</Name>
                                    <Value>{ }</Value>
                                </Item>
                                <Item>
                                    <Name>Camada Suporte</Name>
                                    <Value>{ }</Value>
                                </Item>
                            </Grid>
                        </CardResultados>
                        <CardResultados>
                            <TitleCard>Velocidade mpinima de fluidificação (m/s)</TitleCard>
                            <Grid>
                                <Item>
                                    <Name>Areia</Name>
                                    <Value>{ }</Value>
                                </Item>
                                <Item>
                                    <Name>Antracito</Name>
                                    <Value>{ }</Value>
                                </Item>
                                <Item>
                                    <Name>Bifásico</Name>
                                    <Value>{ }</Value>
                                </Item>
                            </Grid>
                        </CardResultados>
                    </Resultados>
                </ETA3Container>
            </PageTemplate>
        );
}

