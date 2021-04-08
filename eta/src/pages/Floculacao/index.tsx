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
    width: 900px;
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
    justify-content: center;
    margin-bottom: 20px;
    @media(min-width: 768px){
        margin-top: 20px;
    }
    @media(min-width: 1000px){
        width: 100%;
    }
`
const Op = styled.div`
    width: 150px;
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
const Select = styled.select`
    width: 60px;
    height: 40px;
    border-radius: 8px;
    font-size: 1.2rem;
    padding-left: 10px;
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
    qvalue: number,
    tvalue: number,
    ncvalue: number,
    profvalue: number,
    ndvalue: number,
    lvalue: number,
    g1value: number,
    g2value: number,
    g3value: number,
    g4value: number,
    g5value: number,
    fatorvalue: number
}
interface ResultsProps {
    qvalue: number,
    tvalue: number,
    ncvalue: number,
    profvalue: number,
    ndvalue: number,
    lvalue: number,
    g1value: number,
    g2value: number,
    g3value: number,
    g4value: number,
    g5value: number,
    fatorvalue: number
}
const Tr1: React.FC<Table1Props> = (props) => {
    var tmp = [];
    var pontos = 1;
    for (var i = 0; i < props.ncvalue; i++) {
        tmp.push(i);
    }
    if (props.ncvalue == 4) {
        var [M22, M2, M11, q, Vol, A, B, a] = Floc.floc(props.qvalue, props.tvalue, props.ncvalue, props.profvalue, props.ndvalue, props.lvalue, props.g1value, props.g2value, props.g3value, props.g4value, props.fatorvalue);
    } else {
        if (props.ncvalue == 3) {
            var [M22, M2, M11, q, Vol, A, B, a] = Floc3.floc(props.qvalue, props.tvalue, props.ncvalue, props.profvalue, props.ndvalue, props.lvalue, props.g1value, props.g2value, props.g3value, props.fatorvalue);
        } else {
            var [M22, M2, M11, q, Vol, A, B, a] = Floc5.floc(props.qvalue, props.tvalue, props.ncvalue, props.profvalue, props.ndvalue, props.lvalue, props.g1value, props.g2value, props.g3value, props.g4value, props.g5value, props.fatorvalue);
        }
    }
    var [V11, V12, V13, V14, V15, V16, V17, V18] = Floc.m11(M11);
    return (
        <>
            {
                tmp.map((i, index) => {

                    return (

                        <TableRowContainer >
                            <TableData>{V11[i]?.toFixed(0)}</TableData>
                            <TableData>{V12[i]?.toFixed(4)}</TableData>
                            <TableData>{V13[i]?.toFixed(4)}</TableData>
                            <TableData>{V14[i]?.toFixed(4)}</TableData>
                            <TableData>{V15[i]?.toFixed(4)}</TableData>
                            <TableData>{V16[i]?.toFixed(4)}</TableData>
                            <TableData>{V17[i]?.toFixed(4)}</TableData>
                            <TableData>{V18[i]?.toFixed(4)}</TableData>
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
    for (var i = 0; i < props.ncvalue; i++) {
        tmp.push(i);
    }
    if (props.ncvalue == 4) {
        var [M22, M2, M11, q, Vol, A, B, a] = Floc.floc(props.qvalue, props.tvalue, props.ncvalue, props.profvalue, props.ndvalue, props.lvalue, props.g1value, props.g2value, props.g3value, props.g4value, props.fatorvalue);
    } else {
        if (props.ncvalue == 3) {
            var [M22, M2, M11, q, Vol, A, B, a] = Floc3.floc(props.qvalue, props.tvalue, props.ncvalue, props.profvalue, props.ndvalue, props.lvalue, props.g1value, props.g2value, props.g3value, props.fatorvalue);
        } else {
            var [M22, M2, M11, q, Vol, A, B, a] = Floc5.floc(props.qvalue, props.tvalue, props.ncvalue, props.profvalue, props.ndvalue, props.lvalue, props.g1value, props.g2value, props.g3value, props.g4value, props.g5value, props.fatorvalue);
        }
    }
    var [V21, V22, V23, V24, V25, V26, V27, V28] = Floc.m22(M22);
    return (
        <>
            {
                tmp.map((i, index) => {

                    return (

                        <TableRowContainer >
                            <TableData>{V21[i]?.toFixed(0)}</TableData>
                            <TableData>{V22[i]?.toFixed(4)}</TableData>
                            <TableData>{V23[i]?.toFixed(4)}</TableData>
                            <TableData>{V24[i]?.toFixed(4)}</TableData>
                            <TableData>{V25[i]?.toFixed(4)}</TableData>
                            <TableData>{V26[i]?.toFixed(4)}</TableData>
                            <TableData>{V27[i]?.toFixed(4)}</TableData>
                            <TableData>{V28[i]?.toFixed(4)}</TableData>
                        </TableRowContainer>
                    );
                })
            }
        </>
    )
}

const Result: React.FC<ResultsProps> = (props) => {
    if (props.g4value !== 0 && props.g5value === 0) {
        var [M22, M2, M11, q, Vol, A, B, a] = Floc.floc(props.qvalue, props.tvalue, props.ncvalue, props.profvalue, props.ndvalue, props.lvalue, props.g1value, props.g2value, props.g3value, props.g4value, props.fatorvalue);
    } else {
        if (props.g4value === 0) {
            var [M22, M2, M11, q, Vol, A, B, a] = Floc3.floc(props.qvalue, props.tvalue, props.ncvalue, props.profvalue, props.ndvalue, props.lvalue, props.g1value, props.g2value, props.g3value, props.fatorvalue);
        } else {
            var [M22, M2, M11, q, Vol, A, B, a] = Floc5.floc(props.qvalue, props.tvalue, props.ncvalue, props.profvalue, props.ndvalue, props.lvalue, props.g1value, props.g2value, props.g3value, props.g4value, props.g5value, props.fatorvalue);
        }
    }
    var [V11, V12, V13, V14, V15, V16, V17, V18] = Floc.m11(M11);
    var [V21, V22, V23, V24, V25, V26, V27, V28] = Floc.m22(M22);
    return (
        <Resultados>
            <CardResultados>
                <TitleCard>Velocidades Obtidas (m/s)</TitleCard>
                <Grid>
                    <Item>
                        <Name>ql (m³/s)
                                    <span className="tooltiptext">Vazão da água</span>
                        </Name>
                        <Value>{Number(q).toFixed(4)}</Value>
                    </Item>
                    <Item>
                        <Name>Volume (m³)
                                    <span className="tooltiptext">Volume de água</span>
                        </Name>
                        <Value>{Number(Vol).toFixed(0)}</Value>
                    </Item>
                    <Item>
                        <Name>Area (m²)
                                <span className="tooltiptext">Área superficial do floculador</span>
                        </Name>
                        <Value>{Number(A)?.toFixed(4)}</Value>
                    </Item>
                    <Item>
                        <Name>Largura (m)
                                <span className="tooltiptext">Largura do canal ou trecho considerado</span>
                        </Name>
                        <Value>{Number(B).toFixed(4)}</Value><br />
                    </Item>
                    <Item>
                        <Name>Comprimento (m)
                            <span className="tooltiptext">Comprimento do canal ou trecho considerado</span>
                        </Name>
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
                            qvalue={props.qvalue}
                            tvalue={props.tvalue}
                            ncvalue={props.ncvalue}
                            profvalue={props.profvalue}
                            ndvalue={props.ndvalue}
                            lvalue={props.lvalue}
                            g1value={props.g1value}
                            g2value={props.g2value}
                            g3value={props.g3value}
                            g4value={props.g4value}
                            g5value={props.g5value}
                            fatorvalue={props.fatorvalue}
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
                            <TableHead>V<sub>1</sub> (m/s)</TableHead>
                            <TableHead>V<sub>2</sub> (m/s)</TableHead>
                            <TableHead>Dhd (m)</TableHead>
                            <TableHead>Dhl (m)</TableHead>
                            <TableHead>Dht (m)</TableHead>
                            <TableHead>G (1/s)</TableHead>
                        </TableHeadContainer>
                        <Tr2
                            qvalue={props.qvalue}
                            tvalue={props.tvalue}
                            ncvalue={props.ncvalue}
                            profvalue={props.profvalue}
                            ndvalue={props.ndvalue}
                            lvalue={props.lvalue}
                            g1value={props.g1value}
                            g2value={props.g2value}
                            g3value={props.g3value}
                            g4value={props.g4value}
                            g5value={props.g5value}
                            fatorvalue={props.fatorvalue}
                        />
                    </Table>
                </Section>
            </CardResultados>
        </Resultados>
    );
}
const Floculacao: React.FC<ResultsProps> = (props) => {


    const [qms, setQms] = useState("");
    const [gs, setGs] = useState("3");
    const [gValues, setGValues] = useState<string[]>([]);

    const [qvalue, setQvalue] = useState("");
    const [tvalue, setTvalue] = useState("");
    const [profvalue, setProfvalue] = useState("");
    const [ndvalue, setNdvalue] = useState("");
    const [lvalue, setLvalue] = useState("");
    const [g1value, setG1value] = useState("");
    const [g2value, setG2value] = useState("");
    const [g3value, setG3value] = useState("");
    const [g4value, setG4value] = useState("");
    const [g5value, setG5value] = useState("");
    const [fatorvalue, setFatorvalue] = useState("");

    const [qvalueCalculated, setQvalueCalculated] = useState("");
    const [tvalueCalculated, setTvalueCalculated] = useState("");
    const [gsCalculated, setGsCalculated] = useState("");
    const [profvalueCalculated, setProfvalueCalculated] = useState("");
    const [ndvalueCalculated, setNdvalueCalculated] = useState("");
    const [lvalueCalculated, setLvalueCalculated] = useState("");
    const [g1valueCalculated, setG1valueCalculated] = useState("");
    const [g2valueCalculated, setG2valueCalculated] = useState("");
    const [g3valueCalculated, setG3valueCalculated] = useState("");
    const [g4valueCalculated, setG4valueCalculated] = useState("");
    const [g5valueCalculated, setG5valueCalculated] = useState("");
    const [fatorvalueCalculated, setFatorvalueCalculated] = useState("");

    const [calculated, setCalculated] = useState("");
    const [isDimensione, setIsDimensione] = useState(false);

    useEffect(() => {
        var tmp = Array<string>();
        var pontos = Number(gs);

        for (var i = 0; i < pontos; i++) {
            tmp.push("");

        }
        setGValues(tmp);

    }, [gs])
    function handleGchange(i: number, value: string) {
        const updated = gValues.map((gvalue, index) => {
            if (index === i) {
                return value;
            } else {
                return gvalue;
            }
        })
        setGValues(updated);
    }
    function calcular() {
        var ok = 0;
        if (gs === "3") {
            if (gValues[0] !== "" && gValues[1] !== "" && gValues[2] !== "") {
                setG1value(gValues[0]);
                setG2value(gValues[1]);
                setG3value(gValues[2]);
                setG1valueCalculated(gValues[0]);
                setG2valueCalculated(gValues[1]);
                setG3valueCalculated(gValues[2]);
                ok = 1;
            }
        } else {
            if (gs === "4") {
                if (gValues[0] !== "" && gValues[1] !== "" && gValues[2] !== "" && gValues[3] !== "") {
                    setG1value(gValues[0]);
                    setG2value(gValues[1]);
                    setG3value(gValues[2]);
                    setG4value(gValues[3]);
                    setG1valueCalculated(gValues[0]);
                    setG2valueCalculated(gValues[1]);
                    setG3valueCalculated(gValues[2]);
                    setG4valueCalculated(gValues[3]);
                    ok = 1;
                }
            } else {
                if (gValues[0] !== "" && gValues[1] !== "" && gValues[2] !== "" && gValues[3] !== "" && gValues[4] !== "") {
                    setG1value(gValues[0]);
                    setG2value(gValues[1]);
                    setG3value(gValues[2]);
                    setG4value(gValues[3]);
                    setG5value(gValues[4]);
                    setG1valueCalculated(gValues[0]);
                    setG2valueCalculated(gValues[1]);
                    setG3valueCalculated(gValues[2]);
                    setG4valueCalculated(gValues[3]);
                    setG5valueCalculated(gValues[4]);
                    ok = 1;
                }
            }
        }

        if (qvalue !== "" && tvalue !== "" && profvalue !== "" && ndvalue !== "" && lvalue !== "" && fatorvalue !== "" && ok === 1) {
            setIsDimensione(true);
            setQvalueCalculated(qvalue);
            setTvalueCalculated(tvalue);
            setProfvalueCalculated(profvalue);
            setNdvalueCalculated(ndvalue);
            setLvalueCalculated(lvalue);
            setCalculated(qvalue);
            setFatorvalueCalculated(fatorvalue);
            setGsCalculated(gs);
        } else {
            alert("preencha todos os campos");
        }
    }
    function setVazao(n: string) {
        setIsDimensione(false);
        setQvalue(n);
    }
    function setT(n: string) {
        setIsDimensione(false);
        setTvalue(n)
    }
    function setProf(n: string) {
        setIsDimensione(false);
        setProfvalue(n);
    }
    function setNd(n: string) {
        setIsDimensione(false);
        setNdvalue(n);
    }
    function setL(n: string) {
        setIsDimensione(false);
        setLvalue(n);
    }
    function setFator(n: string) {
        setIsDimensione(false);
        setFatorvalue(n);
    }
    return (
        <PageTemplate
            title="Floculação"
            topBar={true}
        >
            <ETA3Container>
                <Card>

                    <Entradas>
                        <Op>
                            <Title>Q (m³/s)
                                <span className="tooltiptext">teste</span>
                            </Title>
                            <Input
                                type="number"
                                onChange={e => setVazao(e.target.value)}
                            />
                        </Op>
                        <Op>
                            <Title>t (min)
                                <span className="tooltiptext">teste</span>
                            </Title>
                            <Input
                                type="number"
                                onChange={e => setT(e.target.value)}
                            />
                        </Op>
                        <Op>
                            <Title>Nº de canais
                                <span className="tooltiptext">teste</span>
                            </Title>
                            <Select name="" id="" onChange={(e) => {
                                const valor = e.target.value;
                                setGs(valor);
                            }}>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Select>
                        </Op>
                        <Op>
                            <Title>Profundidade
                                <span className="tooltiptext">teste</span>
                            </Title>
                            <Input
                                type="number"
                                onChange={e => setProf(e.target.value)}
                            />
                        </Op>
                        <Op>
                            <Title>Nº de decantadores
                                <span className="tooltiptext">teste</span>
                            </Title>
                            <Input
                                type="number"
                                onChange={e => setNd(e.target.value)}
                            />
                        </Op>
                    </Entradas>
                    <Entradas>
                        <Op>
                            <Title>Largura (m)
                                <span className="tooltiptext">teste</span>
                            </Title>
                            <Input
                                type="number"
                                onChange={e => setL(e.target.value)}
                            />
                        </Op>
                        {
                            gValues.map((gvalue, i) => {

                                return (

                                    <Op>
                                        <Title>G{i + 1} (1/s)
                                            <span className="tooltiptext">teste</span>
                                        </Title>
                                        <Input
                                            type="number"
                                            value={gvalue}
                                            onChange={(e) => handleGchange(i, e.target.value)}
                                        />
                                    </Op>
                                );
                            })
                        }
                    </Entradas>
                    <Dimensionar>
                        <Fator>
                            <Op>
                                <Title>Fator de correção (%)
                                    <span className="tooltiptext">teste</span>
                                </Title>
                                <Input
                                    type="number"
                                    onChange={e => setFator(e.target.value)}
                                />
                            </Op>
                            <Button onClick={calcular}>
                                Dimensionar
                            </Button>
                        </Fator>
                    </Dimensionar>
                </Card>
                {
                    isDimensione === true &&
                    <Result
                        qvalue={Number(qvalue)}
                        tvalue={Number(tvalue)}
                        ncvalue={Number(gs)}
                        profvalue={Number(profvalue)}
                        ndvalue={Number(ndvalue)}
                        lvalue={Number(lvalue)}
                        g1value={Number(g1value)}
                        g2value={Number(g2value)}
                        g3value={Number(g3value)}
                        g4value={Number(g4value)}
                        g5value={Number(g5value)}
                        fatorvalue={Number(fatorvalue)}
                    />
                }
                {
                    isDimensione === false && calculated !== "" &&
                    <Result
                        qvalue={Number(qvalueCalculated)}
                        tvalue={Number(tvalueCalculated)}
                        ncvalue={Number(gsCalculated)}
                        profvalue={Number(profvalueCalculated)}
                        ndvalue={Number(ndvalueCalculated)}
                        lvalue={Number(lvalueCalculated)}
                        g1value={Number(g1valueCalculated)}
                        g2value={Number(g2valueCalculated)}
                        g3value={Number(g3valueCalculated)}
                        g4value={Number(g4valueCalculated)}
                        g5value={Number(g5valueCalculated)}
                        fatorvalue={Number(fatorvalue)}
                    />
                }
            </ETA3Container>
        </PageTemplate>
    );
}

export default Floculacao;
