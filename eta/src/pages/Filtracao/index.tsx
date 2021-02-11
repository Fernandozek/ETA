import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Coag from '../../Utils/Coag';
import PageTemplate from '../PageTemplate';
import Eta1 from '../../components/Home/ETA1';
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
const Button = styled.button`
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

export default function Coagulacao(props:any)  {
    return (
        <PageTemplate>
            <EtaContainer>
                <Card>
                    <Parshall>
                        <Title>Selecione o Medidor Parshall</Title>
                        <Selecione>
                            <option value="0">3. W15,2 (cm)</option>
                            <option value="1">3. W15,2 (cm)</option>
                            <option value="2">3. W15,2 (cm)</option>
                            <option value="3">3. W15,2 (cm)</option>
                            <option value="4">3. W15,2 (cm)</option>
                            <option value="5">3. W15,2 (cm)</option>
                            <option value="6">3. W15,2 (cm)</option>
                            <option value="7">3. W15,2 (cm)</option>
                            <option value="8">3. W15,2 (cm)</option>
                            <option value="9">3. W15,2 (cm)</option>
                            <option value="10">3. W15,2 (cm)</option>
                            <option value="11">3. W15,2 (cm)</option>
                        </Selecione>
                    </Parshall>
                    <Section>
                        <Entrada>
                            <h3>Q (I/s)</h3>
                            <Input type="number" />
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
                        <Button>Dimensionar</Button>
                    </Dimensionar>
                </Card>
                <TableRowContainer>
                
            </TableRowContainer>
            </EtaContainer>
        </PageTemplate>
    );
}

