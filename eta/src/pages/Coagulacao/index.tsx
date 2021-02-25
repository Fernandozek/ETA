import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Coag from '../../Utils/Coag';
import PageTemplate from '../PageTemplate';
import { Link } from 'react-router-dom';
const EtaContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 50px 0px;
`
const Card = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px 10px 30px 10px;
    background-color: var(--branco);
    border-radius: 8px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    @media(min-width: 768px){
        padding: 15px 20px 40px 20px;
    }
`
const Parshall = styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: space-around;
    @media(min-width: 768px){
        justify-content: initial;
        font-size: 1.2rem;
        min-width: 600px;
        max-width: 100%;
    }
`
const Selecione = styled.select`
    border-radius: 8px;
    color: var(--gray-dark);
    height: 30px;
    @media(min-width: 768px){
        margin-left: 10px;
        width: 135px;
        height: 35px;
        font-size: 1.2rem;
    }
`
const Title = styled.h2`
    color: var(--h2);
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
const Entrada = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3{
        color: var(--gray-dark);
    }
    @media(min-width: 768px){
        margin-top: 25px;
        margin-right: 20px;
        h3{
            font-size: 1.4rem;
        }
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
const Input = styled.input`
    margin-top: 10px;
    width: 80px;
    padding: 5px;
    font-size: 1.4rem;
    border: 1px solid var(--gray-dark);  
    border-radius: 8px;
    outline: none;
    text-align: center;
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
const Dimensionar = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Checkbox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--gray-dark);
    font-size: 1.2rem;
    input{
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
`
const Button = styled(Link)`
    width: 150px;
    background-color: var(--secundaria);
    border: none;
    font-weight: bold;
    color: var(--branco);
    border-radius: 8px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Resultados = styled.div`
    margin-top: 100px;
    padding: 0 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media(min-width: 768px){
        display: grid;
        grid-gap: 50px;
        grid-template-columns: auto auto;
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
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
`
const TitleCard = styled.h2`
    margin-bottom: 30px;
    text-align: left;
    color: var(--primaria-dark);

`
const Grid = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-template-columns: auto auto auto auto;
`
const GridRight = styled.div`
    margin: 40px;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-gap: 80px;
    grid-template-columns: auto auto;
`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Name = styled.h2`
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--gray-dark);
`
const Value = styled.p`
    color: var(--gray-dark);
`
const TitleValue = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--primaria);
`
const CardRow = styled.div`
    margin-bottom: 10px;
    border-bottom: 1px solid var(--gray);
    display: flex;
    align-items: center;
    justify-content: center;
`
const P1 = styled.p`
    font-size: 1.3rem;
    margin-right: 15px;
    color: var(--gray-dark);
`
const P2 = styled.p`
    font-size: 1.3rem;
    color: var(--gray-dark);
`
interface Table1Props {
    points: number
}
const Tr1: React.FC<Table1Props> = (props) => {
    var tmp = [];
    var pontos = 1;
    for (var i = 0; i < pontos; i++) {
        tmp.push(i);
    }
    return (
        <>
            {
                tmp.map((i, index) => {

                    return (

                        <TableRowContainer >
                            <TableData>0.1520</TableData>
                            <TableData>1.8420</TableData>
                            <TableData>0.8360</TableData>
                            <TableData>0.1140</TableData>
                            <TableData>0.4030</TableData>
                            <TableData>0.0760</TableData>
                            <TableData>0.6100</TableData>
                            <TableData>0.3940</TableData>
                        </TableRowContainer>
                    );
                })
            }
        </>
    )
}

export default function Coagulacao(props: any) {
    var pontos = 4;
    var tmp = [];
    for (var i = 0; i < pontos; i++) {
        tmp.push(i);
    }
    const [q, setQ] = useState("");
    //const Q = props.location.state.q;
    
    const [V, H, O] = Coag.coag(props.q);
    return (
        <PageTemplate>
            <EtaContainer>
                <Card>
                    <Parshall>
                        <Title>Selecione o Medidor Parshall</Title>
                        <Selecione>
                            <option value="0">W7,6 (cm) / Q: 0,8 - 53,8</option>
                            <option value="1">W15,2 (cm) / Q: 1,4 - 110,4</option>
                            <option value="2">W22,9 (cm) / Q: 2,5 - 252,0</option>
                            <option value="3">W30,5 (cm) / Q: 3,1 - 455,9</option>
                            <option value="4">W45,7 (cm) / Q: 4,2 - 696,6</option>
                            <option value="5">W61,0 (cm) / Q: 11,9 - 937,0</option>
                            <option value="6">W91,5 (cm) / Q: 17,3 - 1427,2</option>
                            <option value="7">W122,0 (cm) / Q: 36,8 - 1922,7</option>
                            <option value="8">W152,5 (cm) / Q: 45,3 - 2423,9</option>
                            <option value="9">W183,0 (cm) / Q: 73,6 - 2930,8</option>
                            <option value="10">W213,5 (cm) / Q: 85,0 - 3437,7</option>
                            <option value="11">W244,0 (cm) / Q: 99,1 - 3950,2</option>
                        </Selecione>
                    </Parshall>
                    <Section>
                        <Entrada>
                            <h3>Q (m³/s)</h3>
                            <Input 
                                type="number" 
                                value={q}
                                onChange={e => setQ(e.target.value)}
                            />
                        </Entrada>
                        <Table>
                            <TableHeadContainer>
                                <TableHead>W (cm)</TableHead>
                                <TableHead>k</TableHead>
                                <TableHead>n</TableHead>
                                <TableHead>N</TableHead>
                                <TableHead>D</TableHead>
                                <TableHead>K</TableHead>
                                <TableHead>G'</TableHead>
                                <TableHead>C</TableHead>
                            </TableHeadContainer>
                            <Tr1
                                points={props.points}

                            />
                        </Table>
                    </Section>
                    <Dimensionar>
                        <Checkbox>
                            <input type="checkbox" />
                            <p>Mostrar modelo</p>
                        </Checkbox>
                        <Button to={{
                            pathname:"/coagulacao",
                            state: {
                                q
                            }
                        }}>
                            Dimensionar
                        </Button>
                    </Dimensionar>
                </Card>
                <Resultados>
                    <Left>
                        <CardResultados>
                            <TitleCard>Velocidades Obtidas (m/s)</TitleCard>
                            <Grid>
                                <Item>
                                    <Name>V<sub>s</sub></Name>
                                    <Value>{V[0].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>V<sub>1</sub></Name>
                                    <Value>{V[1].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>V<sub>2</sub></Name>
                                    <Value>{V[2].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>V<sub>3</sub></Name>
                                    <Value>{V[3].toFixed(4)}</Value>
                                </Item>
                            </Grid>
                        </CardResultados>
                        <CardResultados>
                            <TitleCard>Alturas obtidas (m)</TitleCard>
                            <Grid>
                                <Item>
                                    <Name>h<sub>0</sub></Name>
                                    <Value>{H[0].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>h<sub>1</sub></Name>
                                    <Value>{H[1].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>h<sub>2</sub></Name>
                                    <Value>{H[2].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>h<sub>3</sub></Name>
                                    <Value>{H[3].toFixed(4)}</Value>
                                </Item>
                            </Grid>
                        </CardResultados>
                        <CardResultados>
                            <Grid>
                                <Item>
                                    <Name>D' (m)</Name>
                                    <Value>{O[0].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>q (m³/s/m)</Name>
                                    <Value>{O[1].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>E0 (m)</Name>
                                    <Value>{O[2].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>Fr1</Name>
                                    <Value>{O[3].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>hf (m)</Name>
                                    <Value>{O[4].toFixed(4)}</Value>
                                </Item>
                            </Grid>
                        </CardResultados>
                    </Left>
                    <Right>
                        <CardResultados>
                            <GridRight>
                                <Item>
                                    <TitleValue>T</TitleValue>
                                    <Value>{O[5].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <TitleValue>G</TitleValue>
                                    <Value>{O[6].toFixed(4)}</Value>
                                </Item>
                            </GridRight>
                        </CardResultados>
                        
                    </Right>
                </Resultados>
            </EtaContainer>
        </PageTemplate>
    );
}
