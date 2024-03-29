import React, { Component, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Filtr from '../../Utils/Filtr';
import PageTemplate from '../PageTemplate';
import Eta1 from '../../components/Home/ETA1';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import Img1 from '../../assets/images/exemploFilt.png';
import { dotDivide } from 'mathjs';

const EtaContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 90%;
    padding: 50px 0px;
`
const Card = styled.div`
    width: 80%;
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

const TopCard = styled.div`
    width: 100%;
    padding: 0 20px;
    display: grid;
    grid-gap: 30px;
    grid-template-columns: auto auto;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    @media(min-width: 768px){
        grid-gap: 20px;
        grid-template-columns: auto auto auto auto;
    }
`
const Item = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
`
const Title = styled.h2`
    text-align: center;
    font-size: 1.2rem;
    color: var(--gray-dark);
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

const InputCard = styled.input`
    min-width: 60px;
    max-width: 90px;
    height: 40px;
    border-radius: 8px;
    border: 2px solid var(--gray);
    outline: none;
    padding: 10px;
    font-size: 16px;
    text-align: center;
`
const Section = styled.section`
    margin: 20px 0;
    @media(min-width: 768px){
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`
const TableHead = styled.th`
    padding: 10px 5px; 
    font-size: 0.7rem;
    color: var(--gray-dark);
    background-color: var(--gray-light);
    @media(min-width: 768px){
        font-size: 1.2rem;
    }
`
const Table = styled.table`
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
    text-align: center;
    border-radius: 8px;
    padding: 20px 0;
`
const TableHeadContainer = styled.thead`
    color: #fff;
    ${TableHead}:first-child{
        border-radius: 8px 0 0 0;
        border-left: none;
    }
    ${TableHead}:last-child{
        border-radius: 0 8px 0 0;
        border-right: none;
    }

`
const TableData = styled.td`
    padding: 5px 5px; 
    font-size: 0.8rem;
    color: var(--gray-dark);
    
    input{
        width: 100%;
        height: 35px;
        border: none;
        text-align: center;
        padding: 3px;
        outline: none;
    }
    @media(min-width: 768px){
        font-size: 1.3rem;
    }
    position: relative;
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
const TableRowContainer = styled.tr`
    width: 100%;
    background-color: var(--gray-light);
    border-radius: 0 0 8px 8px;    
    ${TableData}:first-child{
        border-left: none;
    }
    ${TableData}:first-child{
        border-left: none;
    }
    
`
const BottomCard = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`
const Entradas = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Inputs = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${Entradas}:first-child{
        margin-bottom: 20px;
    }
`
const Dimensionar = styled.div`
    width: 20%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    width: 150px;
    background-color: var(--secundaria);
    border: none;
    font-weight: bold;
    color: var(--branco);
    border-radius: 8px;
    height: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

`
const Resultados = styled.div`
    margin-top: 40px;
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
const ResultContainer = styled.div`
    display: flex;
    flex-direction: column;
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
const Canvas = styled.div`
    width: 650px;
    height: 450px;
    margin-top: 20px;
    background-color: #909090;
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
const Name = styled.h2`
    font-size: 1.3rem;
    margin-bottom: 10px;
    color: var(--gray-dark);
`
const Value = styled.p`
    color: var(--gray-dark);
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
`
const PDFButton = styled.button`
    width: 100px;
    height: 40px;
    margin: 0 auto;
    background-color: var(--primaria);
    border-radius: 8px;
    border: none;
    cursor: pointer;
    outline: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: bold;
`
interface ResultsProps {
    Q: number,
    taxaFiltracao: number,
    ndecantadores: number,
    ldecantador: number,
    lCalhaLavagem: number,
    nCalhas: number,
    vazaoAr: number,
    altura: number,
    porosidade: number,
    cEsfericidade: number,
    d10: number,
    d102: number,
    a1: number,
    a2: number,
    a3: number,
    a4: number,
    a5: number,
    a6: number,
    a7: number,
    an1: number,
    an2: number,
    an3: number,
    an4: number,
    an5: number,
    an6: number,
    an7: number
}
const Result: React.FC<ResultsProps> = (props) => {

    const [hf, vMf, V1, V2, V3, V4] = Filtr.filtr(props.Q, props.taxaFiltracao, props.ndecantadores, props.ldecantador, props.lCalhaLavagem, props.a2, props.an2, props.a7, props.an7, props.a3, props.an3, props.a4, props.an4, props.a5, props.an5, props.porosidade, props.vazaoAr, props.nCalhas, props.a1, props.an1, props.altura, props.a6, props.an6, props.cEsfericidade, props.d10, props.d102);

    const jsPdfGenerator = () => {
        var doc = new jsPDF('p', 'pt');
        doc.setFont('courier');
        doc.setFontSize(10);
        doc.text('Universidade Federal Rural do Semi-Árido - UFERSA', 80, 50);
        doc.text('Este programa é destinado à realização do pré-dimensionamento da', 80, 63);
        doc.text('unidade de filtração rápida (camada dupla de antracito e areia)', 80, 76);
        doc.text('em estações do tratamento de água do tipo convencional', 80, 89);

        doc.setLineWidth(0.5);
        doc.line(485, 95, 80, 95);

        doc.text('Dados de entrada = ', 80, 128);
        doc.text('Vazão (m³/s) = ' + props.Q, 100, 148);
        doc.text('Taxa de Filtração (m³/m²dia) = ' + props.taxaFiltracao, 100, 161);
        doc.text('Número de decantadores = ' + props.ndecantadores, 100, 173);
        doc.text('Largura do decantador (m) = ' + props.ldecantador, 100, 186);
        doc.text('Largura da calha de lavagem (m) = ' + props.lCalhaLavagem, 100, 199);
        doc.text('Número de calhas = ' + props.lCalhaLavagem, 100, 211);
        doc.text('Vazão de ar q (l/s/m²) = ' + props.vazaoAr, 100, 224);
        doc.text('Taxa de Filtração (m³/m²dia) = ' + props.taxaFiltracao, 100, 237);
        doc.text('Altura = ' + props.ndecantadores, 360, 148);
        doc.text('Porosidade = ' + props.ldecantador, 360, 161);
        doc.text('C. Esfericidade = ' + props.lCalhaLavagem, 360, 173);
        doc.text('d10 (mm) = ' + props.lCalhaLavagem, 360, 186);
        doc.text('d60 (mm) = ' + props.lCalhaLavagem, 360, 199);

        doc.text('areia: ', 80, 260);
        doc.text('Altura (m) = ' + props.a1, 100, 273);
        doc.text('Def (mm) = ' + props.a2, 100, 286);
        doc.text('C.U = ' + props.a3, 100, 299);
        doc.text('Massa Específica (kg/m³) = ' + props.a4, 100, 312);
        doc.text('Porosidade = ' + props.a5, 100, 325);
        doc.text('C. esfericidade = ' + props.a6, 100, 338);
        doc.text('d10 (mm) = ' + props.a7, 100, 351);

        doc.text('Antracito: ', 340, 260);
        doc.text('Altura (m) = ' + props.an1, 360, 273);
        doc.text('Def (mm) = ' + props.an2, 360, 286);
        doc.text('C.U = ' + props.an3, 360, 299);
        doc.text('Massa Específica (kg/m³) = ' + props.an4, 360, 312);
        doc.text('Porosidade = ' + props.an5, 360, 325);
        doc.text('C. esfericidade = ' + props.an6, 360, 338);
        doc.text('d10 (mm) = ' + props.an7, 360, 351);

        doc.text('Relatório analítico da unidade de Filtração', 80, 371);

        doc.text('Velocidades Obtidas (m/s)', 80, 391);

        doc.text(`Área total de filtração (m²) = ${V4[0]}`, 100, 406);
        doc.text(`Número de filtros = ${V4[1]}`, 100, 419);
        doc.text(`Área de cada filtro (m²) = ${V4[2]}`, 100, 432);
        doc.text(`Dimensões do filtro L (m) = ${V4[3]}`, 100, 445);
        doc.text(`Dimensões do filtro Y (m) = ${V4[4]?.toFixed(4)} `, 100, 458);

        doc.text('Lavagem de filtros / Lâmina mínima de água sobre o leito filtrante', 80, 483);

        doc.text(`Vazão de água de lavagem (m³/s) = ${V1[0]?.toFixed(4)}`, 100, 498);
        doc.text(`Volume de lavagem (m³) = ${V1[1]?.toFixed(4)}`, 100, 511);
        doc.text(`Volume de reservação (m³) = ${V1[2]?.toFixed(4)}`, 100, 524);
        doc.text(`Tubulação de água de lavagem (mm) = ${V1[3]}`, 100, 537);
        doc.text(`Vazão de ar (L/s) = ${V1[4]} `, 100, 550);
        doc.text(`Lâmina da água (m) = ${V1[5]?.toFixed(4)} `, 100, 563);

        doc.text('Calhas de água de lavagem', 80, 588);

        doc.text(`Dimenssões de calha B (m) = ${V2[0]?.toFixed(4)}`, 100, 603);
        doc.text(`Dimenssões de calha h (m) = ${V2[1]?.toFixed(4)}`, 100, 616);
        doc.text(`Consideração = ${V2[2]} - H0 - ${V2[3]}`, 100, 629);
        doc.text(`Consideração = ${V2[4]?.toFixed(4)} - S - ${V2[5]}`, 100, 642);
        doc.text(`S entre calhas (m) = ${V2[6]?.toFixed(4)}`, 100, 655);

        doc.text('Perdas de carga', 80, 680);

        doc.text(`Areia = ${hf[0]?.toFixed(4)}`, 100, 695);
        doc.text(`Antracito = ${hf[1]?.toFixed(4)}`, 100, 708);
        doc.text(`Total = ${hf[2]?.toFixed(4)}`, 100, 721);
        doc.text(`Camada Suporte = ${hf[3]?.toFixed(4)}`, 100, 734);

        doc.text('Velocidade mpinima de fluidificação (m/s)', 80, 756);

        doc.text(`Areia = ${vMf[0]?.toFixed(4)}`, 100, 771);
        doc.text(`Antracito = ${vMf[1]?.toFixed(4)}`, 100, 784);
        doc.text(`Bifásico = ${vMf[2]?.toFixed(4)}`, 100, 797);
        
        if(canvas.current != null){
            doc.addPage();
            doc.text('Universidade Federal Rural do Semi-Árido - UFERSA', 80, 50);
            doc.text('Este programa é destinado à realização do pré-dimensionamento da', 80, 63);
            doc.text('unidade de filtração rápida (camada dupla de antracito e areia)', 80, 76);
            doc.text('em estações do tratamento de água do tipo convencional', 80, 89);

            doc.setLineWidth(0.5);
            doc.line(485, 95, 80, 95);
            doc.text('Detalhamento do pré-dimensionamento da unidade de Filtração', 80, 115);
            doc.addImage(canvas.current.toDataURL(), 'PNG', 15, 130, 550, 350);
        }
        // doc.save('Resultados Filtração.pdf');
        doc.output('dataurlnewwindow');
    }
    const [image, setImage] = useState(null) as any;
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const img = new Image();
        img.src = Img1;
        if (img !== null) {
            img.onload = () => setImage(img);
        }

    }, [])

    const download = () => {
        if (image) {
            let canva = canvas.current;
            if (canva !== null) {
                const a = document.createElement('a');
                a.href = canva.toDataURL();
                a.download = 'Filtração.png';
                document.body.appendChild(a);
                a.click();
            }
        }
    }
    useEffect(() => {
        if (image && canvas) {
            if (canvas.current != null) {
                const ctx = canvas.current.getContext("2d") as any;
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, 650, 450);
                ctx.drawImage(image, 0, 0, 650, 450);
                ctx.font = `12px Roboto`;
                ctx.fillText(`${V1[3]} m`, 578, 59);
                ctx.fillText(`L = ${V4[3]?.toFixed(4)} m`, 210, 26);
                ctx.font = `10px Roboto`;
                ctx.fillText(`Y = ${V4[4]?.toFixed(4)} m`, 30, 196);
                ctx.font = `12px Roboto`;
                ctx.fillText(`${V1[5]?.toFixed(2)} m`, 490, 120);
                ctx.fillText(`${V2[1]?.toFixed(2)} m`, 490, 185);
                ctx.fillText(`${props.an1.toFixed(2)} m`, 490, 242);
                ctx.fillText(`${props.a1.toFixed(2)} m`, 490, 267);
                ctx.fillText(`${props.altura.toFixed(2)} m`, 490, 288);
                ctx.fillText(`${V2[1]?.toFixed(4)} m`, 300, 420);
                ctx.fillText(`${V2[0]?.toFixed(4)} m`, 235, 447);
                ctx.fillText(`espaço entre calhas = ${V2[6]?.toFixed(4)} m`, 380, 420);
            }
        }
    }, [image, canvas]);

    return (
        <>
            <Canvas id="canvas">
                <canvas width={650} height={450} ref={canvas}></canvas>
            </Canvas>
            <PDFButton onClick={() => download()}>Download</PDFButton>
            <Resultados>
                <ResultContainer>
                    <CardResultados>
                        <TitleCard>Velocidades Obtidas (m/s)</TitleCard>
                        <Grid>
                            <Item>
                                <Name>Área total de filtração (m²)</Name>
                                <Value>{V4[0]}</Value>
                            </Item>
                            <Item>
                                <Name>Número de filtros</Name>
                                <Value>{V4[1]}</Value>
                            </Item>
                            <Item>
                                <Name>Área de cada filtro (m²)</Name>
                                <Value>{V4[2]}</Value>
                            </Item>
                            <Item>
                                <Name>Dimensões do filtro L e Y (m)</Name>
                                <Value>{V4[3]?.toFixed(4)}</Value><br />
                                <Value>{V4[4]?.toFixed(4)}</Value>
                            </Item>
                        </Grid>
                    </CardResultados>
                    <CardResultados>
                        <TitleCard>Lavagem de filtros / Lâmina mínima de água sobre o leito filtrante</TitleCard>
                        <Grid>
                            <Item>
                                <Name>Vazão de água de lavagem (m³/s)</Name>
                                <Value>{V1[0]?.toFixed(4)}</Value>
                            </Item>
                            <Item>
                                <Name>Volume de lavagem (m³)</Name>
                                <Value>{V1[1]?.toFixed(4)}</Value>
                            </Item>

                            <Item>
                                <Name>Volume de reservação (m³)</Name>
                                <Value>{V1[2]?.toFixed(4)}</Value>
                            </Item>
                            <Item>
                                <Name>Tubulação de água de lavagem (mm)</Name>
                                <Value>{V1[3]}</Value>
                            </Item>
                            <Item>
                                <Name>Vazão de ar (L/s)</Name>
                                <Value>{V1[4]}</Value>
                            </Item>
                            <Item>
                                <Name>Lâmina da água (m)</Name>
                                <Value>{V1[5]?.toFixed(4)}</Value>
                            </Item>
                        </Grid>
                    </CardResultados>
                    <CardResultados>
                        <TitleCard>Calhas de água de lavagem</TitleCard>
                        <Grid>
                            <Item>
                                <Name>Dimenssões de calha B e h (m)</Name>
                                <Value>{V2[0]?.toFixed(4)}</Value><br />
                                <Value>{V2[1]?.toFixed(4)}</Value>
                            </Item>
                            <Item>
                                <Name>Consideração</Name>
                                <Value>{V2[2]?.toFixed(4)}</Value>
                                <Value>- H0 -</Value>
                                <Value>{V2[3]?.toFixed(4)}</Value>
                            </Item>
                            <Item>
                                <Name>Consideração</Name>
                                <Value>{V2[4]?.toFixed(4)}</Value>
                                <Value>- S -</Value>
                                <Value>{V2[5]?.toFixed(4)}</Value>
                            </Item>
                            <Item>
                                <Name>S entre calhas (m)</Name>
                                <Value>{V2[6]?.toFixed(4)}</Value>
                            </Item>
                        </Grid>
                    </CardResultados>
                    <CardResultados>
                        <TitleCard>Vertedor de saída</TitleCard>
                        <Grid>
                            <Item>
                                <Name>Dimenssões de vertedor B e h (m)</Name>
                                <Value>{V3[0]}</Value><br />
                                <Value>{V3[1]?.toFixed(4)}</Value>
                            </Item>
                            <Item>
                                <Name>Consideração</Name>
                                <Value>{V3[2]?.toFixed(0)}</Value><br />
                                <Value>
                                    {
                                        (Number(V3[2]) > 1000) &&
                                        <p>
                                            Superior a 1000
                                        </p> ||
                                        <p>
                                            Inferior a 1000
                                        </p>
                                    }
                                </Value>
                            </Item>
                        </Grid>
                    </CardResultados>
                    <CardResultados>
                        <TitleCard>Perdas de carga</TitleCard>
                        <Grid>
                            <Item>
                                <Name>Areia</Name>
                                <Value>{hf[0]?.toFixed(4)}</Value>
                            </Item>
                            <Item>
                                <Name>Antracito</Name>
                                <Value>{hf[1]?.toFixed(4)}</Value>
                            </Item>
                            <Item>
                                <Name>Total</Name>
                                <Value>{hf[2]?.toFixed(4)}</Value>
                            </Item>
                            <Item>
                                <Name>Camada Suporte</Name>
                                <Value>{hf[3]?.toFixed(4)}</Value>
                            </Item>
                        </Grid>
                    </CardResultados>
                    <CardResultados>
                        <TitleCard>Velocidade mpinima de fluidificação (m/s)</TitleCard>
                        <Grid>
                            <Item>
                                <Name>Areia</Name>
                                <Value>{vMf[0]?.toFixed(4)}</Value>
                            </Item>
                            <Item>
                                <Name>Antracito</Name>
                                <Value>{vMf[1]?.toFixed(4)}</Value>
                            </Item>
                            <Item>
                                <Name>Bifásico</Name>
                                <Value>{vMf[2]?.toFixed(4)}</Value>
                            </Item>
                        </Grid>
                    </CardResultados>
                    <PDFButton onClick={jsPdfGenerator}>Gerar PDF</PDFButton>
                </ResultContainer>
            </Resultados>
        </>
    );
}

export default function Coagulacao() {
    var pontos = 4;
    var tmp = [];
    for (var i = 0; i < pontos; i++) {
        tmp.push(i);
    }
    const areia: string[] = [];
    const VAreia: number[] = [];
    const AreiaCalculated: number[] = [];

    const antracito: string[] = [];
    const VAntracito: number[] = [];
    const AntracitoCalculated: number[] = [];

    const [num, setNum] = useState("");

    const [a1, setA1] = useState("");
    const [a2, setA2] = useState("");
    const [a3, setA3] = useState("");
    const [a4, setA4] = useState("");
    const [a5, setA5] = useState("");
    const [a6, setA6] = useState("");
    const [a7, setA7] = useState("");
    const [a1C, setA1C] = useState("");
    const [a2C, setA2C] = useState("");
    const [a3C, setA3C] = useState("");
    const [a4C, setA4C] = useState("");
    const [a5C, setA5C] = useState("");
    const [a6C, setA6C] = useState("");
    const [a7C, setA7C] = useState("");

    const [an1, setAn1] = useState("");
    const [an2, setAn2] = useState("");
    const [an3, setAn3] = useState("");
    const [an4, setAn4] = useState("");
    const [an5, setAn5] = useState("");
    const [an6, setAn6] = useState("");
    const [an7, setAn7] = useState("");
    const [an1C, setAn1C] = useState("");
    const [an2C, setAn2C] = useState("");
    const [an3C, setAn3C] = useState("");
    const [an4C, setAn4C] = useState("");
    const [an5C, setAn5C] = useState("");
    const [an6C, setAn6C] = useState("");
    const [an7C, setAn7C] = useState("");

    const [Q, setQ] = useState("");
    const [taxaFiltracao, setTaxaFiltracao] = useState("");
    const [ndecantadores, setNDecantadres] = useState("");
    const [ldecantador, setLDecantador] = useState("");
    const [lCalhaLavagem, setLCalhaLavagem] = useState("");
    const [nCalhas, setNCalhas] = useState("");
    const [vazaoAr, setVazaoAr] = useState("");
    const [altura, setAltura] = useState("");
    const [porosidade, setPorosidade] = useState("");
    const [cEsfericidade, setCEsfericidade] = useState("");
    const [d10, setD10] = useState("");
    const [d102, setD102] = useState("");

    const [calculated, setCalculated] = useState("");
    const [isDimensione, setIsDimensione] = useState(false);
    const [QCalculated, setQCalculated] = useState("");
    const [taxaFiltracaoCalculated, setTaxaFiltracaoCalculated] = useState("");
    const [ndecantadoresCalculated, setNDecantadresCalculated] = useState("");
    const [ldecantadorCalculated, setLDecantadorCalculated] = useState("");
    const [lCalhaLavagemCalculated, setLCalhaLavagemCalculated] = useState("");
    const [nCalhasCalculated, setNCalhasCalculated] = useState("");
    const [vazaoArCalculated, setVazaoArCalculated] = useState("");
    const [alturaCalculated, setAlturaCalculated] = useState("");
    const [porosidadeCalculated, setPorosidadeCalculated] = useState("");
    const [cEsfericidadeCalculated, setCEsfericidadeCalculated] = useState("");
    const [d10Calculated, setD10Calculated] = useState("");
    const [d102Calculated, setD102Calculated] = useState("");

    function calcular() {
        var cont = 0;
        if (a1 === "" || a2 === "" || a3 === "" || a4 === "" || a5 === "" || a6 === "" || an7 === "" || an1 === "" || an2 === "" || an3 === "" || an4 === "" || an5 === "" || an6 === "" || an7 === "") {
            cont++;
        }
        if (Q != "" && taxaFiltracao != "" && ndecantadores != "" && ldecantador != "" && lCalhaLavagem != "" && nCalhas != "" && vazaoAr != "" && altura != "" && porosidade != "" && cEsfericidade != "" && d10 != "" && d102 != "" && cont === 0) {
            setIsDimensione(true);
            setCalculated(Q);
            setQCalculated(Q);
            setTaxaFiltracaoCalculated(taxaFiltracao);
            setNDecantadresCalculated(ndecantadores);
            setLDecantadorCalculated(ldecantador);
            setLCalhaLavagemCalculated(lCalhaLavagem);
            setNCalhasCalculated(nCalhas);
            setVazaoArCalculated(vazaoAr);
            setAlturaCalculated(altura);
            setPorosidadeCalculated(porosidade);
            setCEsfericidadeCalculated(cEsfericidade);
            setD10Calculated(d10);
            setD102Calculated(d102);

            setA1C(a1);
            setA2C(a2);
            setA3C(a3);
            setA4C(a4);
            setA5C(a5);
            setA6C(a6);
            setA7C(a7);
            setAn1C(an1);
            setAn2C(an2);
            setAn3C(an3);
            setAn4C(an4);
            setAn5C(an5);
            setAn6C(an6);
            setAn7C(an7);
        } else {
            alert("preencha todos os campos");
        }
    }
    function setVazao(e: string) {
        setIsDimensione(false);
        setQ(e);
    }
    function settaxaFiltracao(e: string) {
        setIsDimensione(false);
        setTaxaFiltracao(e);
    }
    function setDecantadores(e: string) {
        setIsDimensione(false);
        setNDecantadres(e);
    }
    function setDecantador(e: string) {
        setIsDimensione(false);
        setLDecantador(e);
    }
    function setCalhaLavagem(e: string) {
        setIsDimensione(false);
        setLCalhaLavagem(e);
    }
    function setCalhas(e: string) {
        setIsDimensione(false);
        setNCalhas(e);
    }
    function setVAr(e: string) {
        setIsDimensione(false);
        setVazaoAr(e);
    }
    function setAlt(e: string) {
        setIsDimensione(false);
        setAltura(e);
    }
    function setPorosid(e: string) {
        setIsDimensione(false);
        setPorosidade(e);
    }
    function setEsfericidade(e: string) {
        setIsDimensione(false);
        setCEsfericidade(e);
    }
    function setD1(e: string) {
        setIsDimensione(false);
        setD10(e);
    }
    function setD2(e: string) {
        setIsDimensione(false);
        setD102(e);
    }
    return (
        <PageTemplate
            title="Filtração"
            topBar={true}
        >
            <EtaContainer>
                <Card>
                    <TopCard>
                        <Item>
                            <Title>
                                Vazão (m³/s)</Title>
                            <InputCard
                                type="number"
                                onChange={(e) => setVazao(e.target.value)}
                            />
                        </Item>
                        <Item>
                            <Title>Taxa de Filtração (m³/m²dia)</Title>
                            <InputCard
                                type="number"
                                onChange={(e) => settaxaFiltracao(e.target.value)}
                            />
                        </Item>
                        <Item>
                            <Title>
                                <span className="tooltipvalue">Número de decantadores</span>
                                Nº de decantadores
                                </Title>
                            <InputCard
                                type="number"
                                onChange={(e) => setDecantadores(e.target.value)}
                            />
                        </Item>
                        <Item>
                            <Title>Largura do decantador (m)</Title>
                            <InputCard
                                type="number"
                                onChange={(e) => setDecantador(e.target.value)}
                            />
                        </Item>
                    </TopCard>
                    <Section>

                        <Table>
                            <TableHeadContainer>
                                <TableHead></TableHead>
                                <TableHead>Altura (m)</TableHead>
                                <TableHead>Def (mm)</TableHead>
                                <TableHead>C.U</TableHead>
                                <TableHead>Massa Específica (kg/m³)</TableHead>
                                <TableHead>Porosidade</TableHead>
                                <TableHead>C. esfericidade</TableHead>
                                <TableHead>d10 (mm)</TableHead>
                            </TableHeadContainer>
                            <TableRowContainer >
                                <TableData>Areia</TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setA1(e.target.value);
                                        }}
                                    />
                                </TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setA2(e.target.value);
                                        }}
                                    />
                                </TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setA3(e.target.value);
                                        }}
                                    />
                                </TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setA4(e.target.value);
                                        }}
                                    />
                                </TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setA5(e.target.value);
                                        }}
                                    />
                                </TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setA6(e.target.value);
                                        }}
                                    />
                                </TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setA7(e.target.value);
                                        }}
                                    />
                                </TableData>
                            </TableRowContainer>
                            <TableRowContainer >
                                <TableData>Antracito</TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setAn1(e.target.value);
                                        }}
                                    />
                                </TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setAn2(e.target.value);
                                        }}
                                    />
                                </TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setAn3(e.target.value);
                                        }}
                                    />
                                </TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setAn4(e.target.value);
                                        }}
                                    />
                                </TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setAn5(e.target.value);
                                        }}
                                    />
                                </TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setAn6(e.target.value);
                                        }}
                                    />
                                </TableData>
                                <TableData>
                                    <input
                                        type="text"
                                        onChange={(e) => {
                                            setAn7(e.target.value);
                                        }}
                                    />
                                </TableData>
                            </TableRowContainer>
                        </Table>
                    </Section>
                    <BottomCard>
                        <Inputs>
                            <Entradas>

                                <Item>
                                    <Title>Largura da calha de lavagem (m)</Title>
                                    <InputCard
                                        type="number"
                                        onChange={(e) => setCalhaLavagem(e.target.value)}
                                    />
                                </Item>
                                <Item>
                                    <Title>
                                        <span className="tooltipvalue">Número de calhas</span>
                                        Nº de calhas
                                    </Title>
                                    <InputCard
                                        type="number"
                                        onChange={(e) => setCalhas(e.target.value)}
                                    />
                                </Item>
                                <Item>
                                    <Title>Vazão de ar q (l/s/m²)</Title>
                                    <InputCard
                                        type="number"
                                        onChange={(e) => setVAr(e.target.value)}
                                    />
                                </Item>
                            </Entradas>
                            <Entradas>
                                <Item>
                                    <Title>Altura</Title>
                                    <InputCard
                                        type="number"
                                        onChange={(e) => setAlt(e.target.value)}
                                    />
                                </Item>
                                <Item>
                                    <Title>Porosidade</Title>
                                    <InputCard
                                        type="number"
                                        onChange={(e) => setPorosid(e.target.value)}
                                    />
                                </Item>
                                <Item>
                                    <Title>C. Esfericidade</Title>
                                    <InputCard
                                        type="number"
                                        onChange={(e) => setEsfericidade(e.target.value)}
                                    />
                                </Item>
                                <Item>
                                    <Title>d<sub>10</sub> (mm)</Title>
                                    <InputCard
                                        type="number"
                                        onChange={(e) => setD1(e.target.value)}
                                    />
                                </Item>
                                <Item>
                                    <Title>d<sub>60</sub> (mm)</Title>
                                    <InputCard
                                        type="number"
                                        onChange={(e) => setD2(e.target.value)}
                                    />
                                </Item>
                            </Entradas>
                        </Inputs>
                        <Dimensionar>
                            <Button onClick={calcular}>Dimensionar</Button>
                        </Dimensionar>
                    </BottomCard>
                </Card>
                <TableRowContainer>

                </TableRowContainer>
                {
                    isDimensione === true &&
                    <Result
                        Q={Number(Q)}
                        taxaFiltracao={Number(taxaFiltracao)}
                        ndecantadores={Number(ndecantadores)}
                        ldecantador={Number(ldecantador)}
                        lCalhaLavagem={Number(lCalhaLavagem)}
                        nCalhas={Number(nCalhas)}
                        vazaoAr={Number(vazaoAr)}
                        altura={Number(altura)}
                        porosidade={Number(porosidade)}
                        cEsfericidade={Number(cEsfericidade)}
                        d10={Number(d10)}
                        d102={Number(d102)}
                        a1={Number(a1)}
                        a2={Number(a2)}
                        a3={Number(a3)}
                        a4={Number(a4)}
                        a5={Number(a5)}
                        a6={Number(a6)}
                        a7={Number(a7)}
                        an1={Number(an1)}
                        an2={Number(an2)}
                        an3={Number(an3)}
                        an4={Number(an4)}
                        an5={Number(an5)}
                        an6={Number(an6)}
                        an7={Number(an7)}
                    />
                }
                {
                    isDimensione === false && calculated !== "" &&
                    <Result
                        Q={Number(QCalculated)}
                        taxaFiltracao={Number(taxaFiltracaoCalculated)}
                        ndecantadores={Number(ndecantadoresCalculated)}
                        ldecantador={Number(ldecantadorCalculated)}
                        lCalhaLavagem={Number(lCalhaLavagemCalculated)}
                        nCalhas={Number(nCalhasCalculated)}
                        vazaoAr={Number(vazaoArCalculated)}
                        altura={Number(alturaCalculated)}
                        porosidade={Number(porosidadeCalculated)}
                        cEsfericidade={Number(cEsfericidadeCalculated)}
                        d10={Number(d10Calculated)}
                        d102={Number(d102Calculated)}
                        a1={Number(a1C)}
                        a2={Number(a2C)}
                        a3={Number(a3C)}
                        a4={Number(a4C)}
                        a5={Number(a5C)}
                        a6={Number(a6C)}
                        a7={Number(a7C)}
                        an1={Number(an1C)}
                        an2={Number(an2C)}
                        an3={Number(an3C)}
                        an4={Number(an4C)}
                        an5={Number(an5C)}
                        an6={Number(an6C)}
                        an7={Number(an7C)}
                    />
                }
            </EtaContainer>
        </PageTemplate>
    );
}

