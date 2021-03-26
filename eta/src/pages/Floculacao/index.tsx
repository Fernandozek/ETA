import React, { Component, FormEvent, useEffect } from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import Floc from '../../Utils/Floc';
import Floc3 from '../../Utils/Floc3';
import Floc5 from '../../Utils/Floc5';
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
        margin-top: 20px;
    }
    @media(min-width: 1000px){
        width: 100%;
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
        width: 100px;
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
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
`
const CardResultados = styled.div`
    width: 80%;
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
const Grid = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto auto auto auto auto;
`
const Section = styled.section`
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

const TableHead = styled.th`
    padding: 10px; 
    color: var(--gray-dark);
    background-color: var(--branco);
    border: 1px solid #555;
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
        font-size: 1rem;
    }
`
const TableRowContainer = styled.tr`
    background-color: var(--gray-light);
    border-radius: 0 0 8px 8px;    

`
interface Table1Props {
    points: number
}
interface GProps {
    in: number
}
const Tr1: React.FC<Table1Props> = (props) => {
    var tmp = [];
    var pontos = 1;
    for (var i = 0; i < 8; i++) {
        tmp.push(i);
    }
    var [M22, M2, M11, q, Vol, A, B, a] = Floc.floc(0.8, 25, 4, 4.5, 4, 11, 70, 50, 30, 15, 10);
    var [V1, V2, V3, V4, V5, V6, V7, V8] = Floc.m22(M11);
    return (
        <>
            {
                tmp.map((i, index) => {

                    return (

                        <TableRowContainer >
                            <TableData>{V1[i]?.toFixed(0)}</TableData>
                            <TableData>{V2[i]?.toFixed(4)}</TableData>
                            <TableData>{V3[i]?.toFixed(4)}</TableData>
                            <TableData>{V4[i]?.toFixed(4)}</TableData>
                            <TableData>{V5[i]?.toFixed(4)}</TableData>
                            <TableData>{V6[i]?.toFixed(4)}</TableData>
                            <TableData>{V7[i]?.toFixed(4)}</TableData>
                            <TableData>{V8[i]?.toFixed(4)}</TableData>
                        </TableRowContainer>
                    );
                })
            }
        </>
    )
}
const Tr2: React.FC<Table1Props> = (props) => {
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
                            <TableData>{V1[i]?.toFixed(0)}</TableData>
                            <TableData>{V2[i]?.toFixed(4)}</TableData>
                            <TableData>{V3[i]?.toFixed(4)}</TableData>
                            <TableData>{V4[i]?.toFixed(4)}</TableData>
                            <TableData>{V5[i]?.toFixed(4)}</TableData>
                            <TableData>{V6[i]?.toFixed(4)}</TableData>
                            <TableData>{V7[i]?.toFixed(4)}</TableData>
                            <TableData>{V8[i]?.toFixed(4)}</TableData>
                        </TableRowContainer>
                    );
                })
            }
        </>
    )
}
const G: React.FC<GProps> = (props) => {
    var tmp = [];
    var pontos = props.in;

    for (var i = 0; i < pontos; i++) {
        tmp.push(i);
    }

    return (
        <>
            {
                tmp.map((i, index) => {

                    return (

                        <Op>
                            <Title>G{index + 1} (1/s)</Title>
                            <Input type="number" />
                        </Op>
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
    const [gs, setGs] = useState("3");
    const [gValues, setGValues] = useState<string[]>([]);

    useEffect(() => {
        var tmp = Array<string>();
        var pontos = Number(gs);
        
        for (var i = 0; i < pontos; i++) {
            tmp.push("");
            
        }
        setGValues(tmp);
    
    }, [gs])
    function handleGchange(i: number, value: string){
        const updated = gValues.map((gvalue, index) => {
            if(index === i){
                return value;
            }else{
                return gvalue;
            }
        })
        setGValues(updated);
    }
   
    return (
        <PageTemplate>
            <ETA3Container>
                <Card>
                    <select name="" id="" onChange={(e) => {
                        const valor = e.target.value;
                        setGs(valor);
                    }}>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
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
                        {
                            gValues.map((gvalue, i) => {

                                return (

                                    <Op>
                                        <Title>G{i + 1} (1/s)</Title>
                                        <Input 
                                            type="number" 
                                            value={gvalue}
                                            onChange={(e) => handleGchange(i, e.target.value)}
                                        />
                                    </Op>
                                );
                            })
                        }
                        {/*
                            <G 
                            in = {Number(gs)}
                        />
                        */}
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
                                <Name>ql (m³/s)
                                    <span className="tooltiptext">Vazão da água</span>
                                </Name>
                                <Value>{Number(q).toFixed(2)}</Value>
                            </Item>
                            <Item>
                                <Name>Volume (m³)
                                    <span className="tooltiptext">Volume de água</span>
                                </Name>
                                <Value>{Number(Vol).toFixed(0)}</Value>
                            </Item>
                            <Item>
                                <Name>Area (m²)
                                    <span className="tooltiptext">Volume de água</span>
                                </Name>
                                <Value>{Number(A).toFixed(4)}</Value>
                            </Item>
                            <Item>
                                <Name>Largura (m)
                                    <span className="tooltiptext">Comprimento do canal ou trecho considerado</span>
                                </Name>
                                <Value>{Number(B).toFixed(4)}</Value><br />
                            </Item>
                            <Item>
                                <Name>Comprimento (m)</Name>
                                <Value>{Number(a).toFixed(4)}</Value>
                            </Item>
                        </Grid>
                    </CardResultados>
                    <CardResultados>
                        <Section>
                            <Table>
                                <TableHeadContainer>
                                    <TableHead>n</TableHead>
                                    <TableHead><i>e</i></TableHead>
                                    <TableHead>V<sub>1</sub> (m/s)</TableHead>
                                    <TableHead>V<sub>2</sub> (m/s)</TableHead>
                                    <TableHead>Δhd (m)</TableHead>
                                    <TableHead>Δhl (m)</TableHead>
                                    <TableHead>Δht (m)</TableHead>
                                    <TableHead>G (1/s)</TableHead>
                                </TableHeadContainer>
                                <Tr1
                                    points={props.points}

                                />
                            </Table>
                        </Section>
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
                                    <TableHead>Dht (m)</TableHead>
                                    <TableHead>G (1/s)</TableHead>
                                </TableHeadContainer>
                                <Tr2
                                    points={props.points}

                                />
                            </Table>
                        </Section>
                    </CardResultados>
                </Resultados>
            </ETA3Container>
        </PageTemplate>
    );
}

