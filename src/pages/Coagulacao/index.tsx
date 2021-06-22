import React, { Component, useState } from 'react';
import styled from 'styled-components';
import Coag from '../../Utils/Coag';
import PageTemplate from '../PageTemplate';
import { Link } from 'react-router-dom';
import { boolean, dotDivide } from 'mathjs';
import Img from '../../assets/images/exampleParshall.png';

import jsPDF from 'jspdf';


interface ResultsProps {
    q: number,
    v: number[],
}
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
        width: 235px;
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
const InputErr = styled.input`
    margin-top: 10px;
    width: 80px;
    padding: 5px;
    font-size: 1.4rem;
    border: 1px solid red;  
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
const Resultados = styled.div`
    margin-top: 30px;
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
    .TitleValue{
        font-size: 1.5rem;
        margin-bottom: 10px;
        color: var(--primaria);
    }
`
const Value = styled.p`
    color: var(--gray-dark);
`
const TitleValue = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--primaria);
    position: relative;
    display: inline-block;
    
    .tooltipvalue {
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

    .tooltipvalue::after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: #555 transparent transparent transparent;
    }

    :hover .tooltipvalue {
        visibility: visible;
        opacity: 1;
    }
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
    points: number,
    vet: number[]
}
const PDFButton = styled.button`
    width: 100px;
    height: 40px;
    background-color: var(--primaria);
    border-radius: 8px;
    border: none;
    cursor: pointer;
    outline: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
`
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
                            <TableData>{props.vet[0]?.toFixed(4)}</TableData>
                            <TableData>{props.vet[1]?.toFixed(4)}</TableData>
                            <TableData>{props.vet[2]?.toFixed(4)}</TableData>
                            <TableData>{props.vet[3]?.toFixed(4)}</TableData>
                            <TableData>{props.vet[4]?.toFixed(4)}</TableData>
                            <TableData>{props.vet[5]?.toFixed(4)}</TableData>
                            <TableData>{props.vet[6]?.toFixed(4)}</TableData>
                            <TableData>{props.vet[7]?.toFixed(4)}</TableData>
                        </TableRowContainer>
                    );
                })
            }
        </>
    )
}

const Result: React.FC<ResultsProps> = (props) => {
    
    const [V, H, O] = Coag.coag(Number(props.q), props.v);

    const jsPdfGenerator = () => {
        var doc = new jsPDF('p', 'pt');
        doc.setFont('courier');
        doc.setFontSize(10);
        doc.text('Universidade Federal Rural do SemiÁrido - UFERSA', 80, 50);
        doc.text('Esta programa é destinado à realização de um pré-dimensionamento de', 80, 63);
        doc.text('clarificação em uma estação de tratamento de água convencional', 80, 76);
        
        doc.setLineWidth(0.5);
        doc.line(485,89,80,89);
        
        doc.text('Resultados da Coagulação', 80, 105);

        doc.text('Velocidades Obtidas (m/s)', 80, 135);
        doc.text(`V  = ${V[0].toFixed(4)}`, 100, 158);
        doc.setFontSize(8);
        doc.text('s', 105, 160);
        doc.setFontSize(10);
        doc.text(`V  = ${V[1].toFixed(4)}`, 100, 171);
        doc.setFontSize(8);
        doc.text('1', 105, 173);
        doc.setFontSize(10);
        doc.text(`V  = ${V[2].toFixed(4)}`, 100, 184);
        doc.setFontSize(8);
        doc.text('2', 105, 186);
        doc.setFontSize(10);
        doc.text(`V  = ${V[3].toFixed(4)}`, 100, 197);
        doc.setFontSize(8);
        doc.text('3', 105, 199);
        doc.setFontSize(10);

        doc.line(485,230,80,230);

        doc.text('Alturas obtidas (m)', 80, 260);
        doc.text(`H  = ${H[0].toFixed(4)}`, 100, 283);
        doc.setFontSize(8);
        doc.text('0', 106, 285);
        doc.setFontSize(10);
        doc.text(`H  = ${H[1].toFixed(4)}`, 100, 296);
        doc.setFontSize(8);
        doc.text('1', 106, 298);
        doc.setFontSize(10);
        doc.text(`H  = ${H[2].toFixed(4)}`, 100, 309);
        doc.setFontSize(8);
        doc.text('2', 106, 311);
        doc.setFontSize(10);
        doc.text(`H  = ${H[3].toFixed(4)}`, 100, 321);
        doc.setFontSize(8);
        doc.text('3', 106, 323);
        doc.setFontSize(10);

        doc.line(485,350,80,350);

        doc.text(`D'(m) = ${O[0].toFixed(4)}`, 100, 375);
        doc.text(`q (m³/s/m) = ${O[1].toFixed(4)}`, 100, 388);
        doc.text(`E (m) = ${O[2].toFixed(4)}`, 100, 401);
        doc.setFontSize(8);
        doc.text('0', 106, 403);
        doc.setFontSize(10);
        doc.text(`Fr = ${O[3].toFixed(4)}`, 100, 414);
        doc.setFontSize(8);
        doc.text('1', 111, 416);
        doc.setFontSize(10);
        doc.text(`hf (m) = ${O[4].toFixed(4)}`, 100, 427);

        doc.line(485,450,80,450);

        doc.text('Tempo de mistura (s)', 80, 470);
        doc.text(`T = ${O[5].toFixed(4)}`, 100, 483);
        doc.text('Gradiente de velocidade (s-1)', 80, 509);
        doc.text(`G = ${O[5].toFixed(4)}`, 100, 522);

        doc.save('Resultados Coagulacão.pdf');
        //doc.output('dataurlnewwindow');
    }

    return (
        <>
            {
                <Resultados>
                    <Left>
                        <CardResultados>
                            <TitleCard>Velocidades Obtidas (m/s)</TitleCard>
                            <Grid>
                                <Item>
                                    <Name>V<sub>s</sub>
                                        <span className="tooltiptext">Velocidade na seção de medição</span>
                                    </Name>
                                    <Value>{V[0].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>V<sub>1</sub>
                                        <span className="tooltiptext">Velocidade antes do ressalto</span>
                                    </Name>
                                    <Value>{V[1].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>V<sub>2</sub>
                                        <span className="tooltiptext">Velocidade no ressalto</span>
                                    </Name>
                                    <Value>{V[2].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>V<sub>3</sub>
                                        <span className="tooltiptext">Velocidade na seção de saída do Parshall</span>
                                    </Name>
                                    <Value>{V[3].toFixed(4)}</Value>
                                </Item>
                            </Grid>
                        </CardResultados>
                        <CardResultados>
                            <TitleCard>Alturas obtidas (m)</TitleCard>
                            <Grid>
                                <Item>
                                    <Name>h<sub>0</sub>
                                        <span className="tooltiptext">Altura de água na seção de medição</span>
                                    </Name>
                                    <Value>{H[0].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>h<sub>1</sub>
                                        <span className="tooltiptext">Altura de água antes do ressalto</span>
                                    </Name>
                                    <Value>{H[1].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>h<sub>2</sub>
                                        <span className="tooltiptext">Altura do ressalto</span>
                                    </Name>
                                    <Value>{H[2].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>h<sub>3</sub>
                                        <span className="tooltiptext">Altura na seção de saída</span>
                                    </Name>
                                    <Value>{H[3].toFixed(4)}</Value>
                                </Item>
                            </Grid>
                        </CardResultados>
                        <CardResultados>
                            <Grid>
                                <Item>
                                    <Name>D' (m)
                                        <span className="tooltiptext">Largura do Parshall na seção de medição</span>
                                    </Name>
                                    <Value>{O[0].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>q (m³/s/m)
                                        <span className="tooltiptext">Vazão específica na garganta do Parshall</span>
                                    </Name>
                                    <Value>{O[1].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>E<sub>0</sub> (m)
                                        <span className="tooltiptext">Carga hidráulica disponível</span>
                                    </Name>
                                    <Value>{O[2].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>Fr<sub>1</sub>
                                        <span className="tooltiptext">Número de Froude</span>
                                    </Name>
                                    <Value>{O[3].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <Name>hf (m)
                                        <span className="tooltiptext">Perda de carga no ressalto</span>
                                    </Name>
                                    <Value>{O[4].toFixed(4)}</Value>
                                </Item>
                            </Grid>
                        </CardResultados>
                    </Left>
                    <Right>
                        <CardResultados>
                            <GridRight>
                                <Item>
                                    <TitleValue>T
                                        <span className="tooltipvalue">Tempo de mistura (s)</span>
                                    </TitleValue>
                                    <Value>{O[5].toFixed(4)}</Value>
                                </Item>
                                <Item>
                                    <TitleValue>G
                                        <span className="tooltipvalue">Gradiente de velocidade (s<sup>-1</sup>)</span>
                                    </TitleValue>
                                    <Value>{O[6].toFixed(4)}</Value>
                                </Item>
                            </GridRight>
                        </CardResultados>
                                <PDFButton onClick={jsPdfGenerator}>Gerar PDF</PDFButton>
                    </Right>
                </Resultados>
            }
        </>
    )
}

const Coagulacao: React.FC<ResultsProps> = (props) => {

    
    const [errInput, setErrInput] = useState(true);

    var v: any = [];
    const [options, setOptions] = useState("-1");
    const [num, setNum] = useState("");
    const [acepted, setAcepted] = useState(false);
    const [calculated, setCalculated] = useState("");
    const [isDimensione, setIsDimensione] = useState(false);
    const [vetCalculated, setVetCalculated] = useState([]);
    const [valueChecked, setValueChecked] = useState(false);

    function calcular() {
        if (num != "" && options != "-1" && acepted === true) {
            setIsDimensione(true);
            setCalculated(num);
            var v = [] as any;
            v = Coag.valoresParshal(Number(options));
            setVetCalculated(v);

        } else if (options === "-1") {
            alert("Selecione um medidor parshall");
        } else if (num === "") {
            alert("Preencha o campo!");
        } else if(acepted === false){
            alert("Selecione um valor dentro do intervalo válido!");
        }
    }

    function setVazao(n: string) {
        setNum(n);
        var valor = Number(n);
        if (options === "0") {
            if (valor >= 0.0008 && valor <= 1.4272) {
                setAcepted(true);
            }else{
                setAcepted(false);
            }
        }else{
            if (options === "1") {
                if (valor >= 0.0014 && valor <= 0.1104) {
                    setAcepted(true);
                }else{
                    setAcepted(false);
                }
            }else{
                if (options === "2") {
                    if (valor >= 0.0025 && valor <= 0.252) {
                        setAcepted(true);
                    }else{
                        setAcepted(false);
                    }
                }else{
                    if (options === "3") {
                        if (valor >= 0.0031 && valor <= 0.4559) {
                            setAcepted(true);
                        }else{
                            setAcepted(false);
                        }
                    }else{
                        if (options === "4") {
                            if (valor >= 0.0042 && valor <= 0.6966) {
                                setAcepted(true);
                            }else{
                                setAcepted(false);
                            }
                        }else{
                            if (options === "5") {
                                if (valor >= 0.0119 && valor <= 0.937) {
                                    setAcepted(true);
                                }else{
                                    setAcepted(false);
                                }
                            }else{
                                if (options === "6") {
                                    if (valor >= 0.0173 && valor <= 1.4272) {
                                        setAcepted(true);
                                    }else{
                                        setAcepted(false);
                                    }
                                }else{
                                    if (options === "7") {
                                        if (valor >= 0.0368 && valor <= 1.9227) {
                                            setAcepted(true);
                                        }else{
                                            setAcepted(false);
                                        }
                                    }else{
                                        if (options === "8") {
                                            if (valor >= 0.0453 && valor <= 2.4239) {
                                                setAcepted(true);
                                            }else{
                                                setAcepted(false);
                                            }
                                        }else{
                                            if (options === "9") {
                                                if (valor >= 0.0736 && valor <= 2.9308) {
                                                    setAcepted(true);
                                                }else{
                                                    setAcepted(false);
                                                }
                                            }else{
                                                if (options === "10") {
                                                    if (valor >= 0.085 && valor <= 3.4377) {
                                                        setAcepted(true);
                                                    }else{
                                                        setAcepted(false);
                                                    }
                                                }else{
                                                    if (options === "11") {
                                                        if (valor >= 0.0991 && valor <= 3.9502) {
                                                            setAcepted(true);
                                                        }else{
                                                            setAcepted(false);
                                                        }
                                                    }else{
                                                        setAcepted(false);
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if(acepted == true){
            setIsDimensione(false);
        }

    }
    function checked(n: boolean) {
        if (n === true) {
            setValueChecked(true);
        } else {
            setValueChecked(false);
        }
    }
    v = Coag.valoresParshal(Number(options));
    return (
        <PageTemplate
            title="Coagulação"
            topBar={true}
        >
            <EtaContainer>
                <Card>
                    <Parshall>
                        <Title>Selecione o Medidor Parshall</Title>
                        <Selecione onChange={(e) => {
                            const opt = e.target.value;
                            setOptions(opt);
                        }}>
                            <option value="-1"></option>
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
                            <Name>Q (m³/s)
                                <span className="tooltiptext">Vazão no canal de coagulação (m³/s)</span>
                            </Name>
                            {
                                acepted === true &&
                                <Input
                                    type="number"
                                    value={num}
                                    onChange={e => setVazao(e.target.value)}
                                />
                            }
                            
                            {
                                acepted === false &&
                                <InputErr 
                                    type="number"
                                    value={num}
                                    onChange={e => setVazao(e.target.value)}
                                />
                            }
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
                                points={4}
                                vet={v}
                            />
                        </Table>
                    </Section>
                    <Dimensionar>
                        <Checkbox>
                            <input type="checkbox"
                                onChange={e => checked(e.target.checked)}
                            />
                            <p>Mostrar modelo</p>
                        </Checkbox>
                        <Button onClick={calcular}>
                            Dimensionar
                        </Button>
                    </Dimensionar>
                    {
                        valueChecked === true &&
                        <img src={Img} height="200px" alt="" />
                    }
                </Card>
                {
                    isDimensione === true &&
                    <Result
                        q={Number(num)}
                        v={vetCalculated}

                    />
                }
                {
                    isDimensione === false && calculated !== "" &&
                    <Result
                        q={Number(calculated)}
                        v={vetCalculated}

                    />
                }

            </EtaContainer>
        </PageTemplate>
    );
}

export default Coagulacao;
