import React, { Component, FormEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import Floc from '../../Utils/Floc';
import Floc3 from '../../Utils/Floc3';
import Floc5 from '../../Utils/Floc5';
import { useState } from 'react';
import jsPDF from 'jspdf';
import Img3 from '../../assets/images/exemploFloc3.png';
import Img4 from '../../assets/images/exemploFloc.png';
import Img5 from '../../assets/images/exemploFloc5.png';
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
const CardFator = styled.div`
    width: 350px;
    background-color: var(--branco);
    border-radius: 8px;
    margin-left: auto;
    margin-right: 90px;
    margin-bottom: 30px;
    padding: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

`
const NotiFator = styled.div`
    width: 100%;
    text-align: center;
    h2{
        color: red;
        font-size: 15px;
    }
`
const NotiFatorOk = styled.div`
    width: 100%;
    text-align: center;
    h2{
        color: green;
        font-size: 15px;
    }
`
const InputFator = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
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
    cursor: pointer;
    outline: none;

    @media(min-width: 768px){
        font-size: 1.4rem;
    }
`
const Canvas = styled.div`
    width: 650px;
    height: 450px;
    margin-top: 20px;
    background-color: #909090;
`
const Resultados = styled.div`
    margin-top: 40px;
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
    display: inherit;
    flex-direction: column;
    align-items: inherit;
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
    margin: auto !important;
`
const Grid = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: auto auto auto auto auto;
`
const Section = styled.section`
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
    position: relative;
    
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
    values: any
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
                        <>

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
                        </>
                    );
                })
            }
        </>
    )
}

const Result: React.FC<ResultsProps> = (props) => {
    var teste = 0;
    const [fatorvalue, setFatorvalue] = useState(-1);
    const [fatorAcept, setFatorAcept] = useState(false);
    const [fatorvalueCalculated, setFatorvalueCalculated] = useState(0);
    const [isDimensione, setIsDimensione] = useState(false);
    const [calculated, setCalculated] = useState(0);
    const [secondTableCalculated, setSecondTableCalculated] = useState(0);
    const [image, setImage] = useState(null) as any;
    let canvas = useRef<HTMLCanvasElement>(null);

    if (props.g4value !== 0 && props.g5value === 0) {
        var [M22, M2, M11, q, Vol, A, B, a] = Floc.floc(props.qvalue, props.tvalue, props.ncvalue, props.profvalue, props.ndvalue, props.lvalue, props.g1value, props.g2value, props.g3value, props.g4value, fatorvalue);
    } else {
        if (props.g4value === 0) {
            var [M22, M2, M11, q, Vol, A, B, a] = Floc3.floc(props.qvalue, props.tvalue, props.ncvalue, props.profvalue, props.ndvalue, props.lvalue, props.g1value, props.g2value, props.g3value, fatorvalue);
        } else {
            var [M22, M2, M11, q, Vol, A, B, a] = Floc5.floc(props.qvalue, props.tvalue, props.ncvalue, props.profvalue, props.ndvalue, props.lvalue, props.g1value, props.g2value, props.g3value, props.g4value, props.g5value, fatorvalue);
        }
    }

    var secondTable = 0;
    var [V11, V12, V13, V14, V15, V16, V17, V18] = Floc.m11(M11);
    var firstTable = V18[0];

    if (M22 !== undefined) {
        var [V21, V22, V23, V24, V25, V26, V27, V28] = Floc.m22(M22);
        secondTable = V28[0];
        teste = 1;
    }

    function calcular() {
        if (fatorvalue > 0) {
            setFatorvalueCalculated(fatorvalue);
            setCalculated(fatorvalue);
            setIsDimensione(true);
            if (secondTable === 0)
                setSecondTableCalculated(V28[0]);
            else
                setSecondTableCalculated(secondTable);

            if (V28[0] <= 70)
                setFatorAcept(true)
        } else {
            alert("Digite um valor positivo para o Fator de correção!");
        }
    }
    function setFator(n: number) {
        setIsDimensione(false);
        setFatorvalue(n);
    }
    const jsPdfGenerator = () => {
        var doc = new jsPDF('p', 'pt');
        doc.setFont('courier');
        doc.setFontSize(10);
        doc.text('Universidade Federal Rural do Semi-Árido - UFERSA', 80, 50);
        doc.text('Este programa é destinado à realização do pré-dimensionamento da', 80, 63);
        doc.text('unidade de floculação hidráulica (fluxo vertical) em estações do', 80, 76);
        doc.text('tratamento de água do tipo convencional', 80, 89);

        doc.setLineWidth(0.5);
        doc.line(485, 95, 80, 95);

        doc.text('Dados de entrada', 80, 115);

        doc.text('Vazão: ', 100, 128);
        doc.text(`${props.qvalue}`, 140, 128);

        doc.text('Tempo mínimo: ', 230, 128);
        doc.text(`${props.tvalue}`, 313, 128);

        doc.text('Nº de canais: ', 380, 128);
        doc.text(`${props.ncvalue}`, 460, 128);

        doc.text('Profundidade: ', 100, 141);
        doc.text(`${props.profvalue}`, 180, 141);

        doc.text('Nº de decantadores: ', 230, 141);
        doc.text(`${props.ndvalue}`, 350, 141);

        doc.text('Largura: ', 380, 141);
        doc.text(`${props.lvalue}`, 430, 141);

        doc.text('canais: ', 100, 160);
        let canais = [props.g1value, props.g2value, props.g3value, props.g4value, props.g5value];
        let linha = 160;
        canais.map((e, index) =>{
            linha+=13;
            if(e !== 0){
                return(
                    doc.text(`Canal ${index+1} = ${e}`, 100, linha)
                )
            }
        })
        doc.text('canais: ', 100, 160);
        
        doc.line(485, 255, 80, 255);
        doc.text('Relatório analítico da unidade de Floculação', 80, 275);

        doc.text(`Vazão da água (m³/s) = ${Number(q).toFixed(4)}`, 100, 308);
        doc.text(`Volume de água (m³) = ${Number(Vol).toFixed(0)}`, 100, 321);
        doc.text(`Área superficial do floculador (m²) = ${Number(A)?.toFixed(4)}`, 100, 334);
        doc.text(`Largura do canal ou trecho considerado (m) = ${Number(B).toFixed(4)}`, 100, 347);
        doc.text(`Comprimento do canal ou trecho considerado (m) = ${Number(a).toFixed(4)}`, 100, 360);


        doc.text('n', 87, 406);
        doc.text('e', 117, 406);
        doc.text('V1 (m/s)', 155, 406);
        doc.text('V2 (m/s)', 215, 406);
        doc.text('Dhd (m)', 274, 406);
        doc.text('Dhl (m)', 331, 406);
        doc.text('Dht (m)', 387, 406);
        doc.text('G (1/s)', 440, 406);


        doc.line(485, 395, 80, 395);

        linha = 425;
        for (var i = 0; i < props.ncvalue; i++) {
            doc.text(`${V11[i].toFixed(0)}`, 84, linha);
            doc.text(`${V12[i].toFixed(4)}`, 105, linha);
            doc.text(`${V13[i].toFixed(4)}`, 160, linha);
            doc.text(`${V14[i].toFixed(4)}`, 220, linha);
            doc.text(`${V15[i].toFixed(4)}`, 275, linha);
            doc.text(`${V16[i].toFixed(4)}`, 333, linha);
            doc.text(`${V17[i].toFixed(4)}`, 388, linha);
            doc.text(`${V18[i].toFixed(4)}`, 438, linha);
            linha = linha + 15;
        }
        linha = linha - 5;
        doc.line(80, 395, 80, linha);
        doc.line(100, 395, 100, linha);
        doc.line(148, 395, 148, linha);
        doc.line(208, 395, 208, linha);
        doc.line(266, 395, 266, linha);
        doc.line(322, 395, 322, linha);
        doc.line(381, 395, 381, linha);
        doc.line(433, 395, 433, linha);
        doc.line(485, 395, 485, linha);
        doc.line(485, linha, 80, linha);

        if (M22 != undefined) {

            doc.text(`O canal 1 foi superior a 70 1/s, e usando um fator de correção de ${fatorvalue}%,`, 80, 519);
            doc.text(`tem-se:`, 80, 532);

            doc.line(485, 550, 80, 550);

            doc.text('n', 87, 562);
            doc.text('e', 117, 562);
            doc.text('V1 (m/s)', 155, 562);
            doc.text('V2 (m/s)', 215, 562);
            doc.text('Dhd (m)', 274, 562);
            doc.text('Dhl (m)', 331, 562);
            doc.text('Dht (m)', 387, 562);
            doc.text('G (1/s)', 440, 562);

            linha = 580;

            for (var i = 0; i < props.ncvalue; i++) {
                doc.text(`${V21[i].toFixed(0)}`, 84, linha);
                doc.text(`${V22[i].toFixed(4)}`, 105, linha);
                doc.text(`${V23[i].toFixed(4)}`, 160, linha);
                doc.text(`${V24[i].toFixed(4)}`, 220, linha);
                doc.text(`${V25[i].toFixed(4)}`, 275, linha);
                doc.text(`${V26[i].toFixed(4)}`, 333, linha);
                doc.text(`${V27[i].toFixed(4)}`, 388, linha);
                doc.text(`${V28[i].toFixed(4)}`, 438, linha);
                linha = linha + 15;
            }
            linha = linha - 5;
            doc.line(80, 550, 80, linha);
            doc.line(100, 550, 100, linha);
            doc.line(148, 550, 148, linha);
            doc.line(208, 550, 208, linha);
            doc.line(266, 550, 266, linha);
            doc.line(322, 550, 322, linha);
            doc.line(381, 550, 381, linha);
            doc.line(433, 550, 433, linha);
            doc.line(485, 550, 485, linha);
            doc.line(485, linha, 80, linha);

            doc.text('Legenda: ', 80, 670);
            doc.text('n = Número de espaçamento entre chicanas em cada câmara', 80, 683);
            doc.text('e = Espaçamento entre chicanas', 80, 696);
            doc.text('V1 (m/s) = Velocidade nos trechos retos', 80, 709);
            doc.text('V2 (m/s) = Velocidade nos trechos curvos', 80, 721);
            doc.text('Dhd (m) = Perda de carga distribuída(m)', 80, 734);
            doc.text('Dhl (m) = Perda de carga localizada', 80, 747);
            doc.text('Dht (m) = Perda de carga total', 80, 760);
            doc.text('G (1/s) = Gradiente de velocidade', 80, 773);
        } else {
            doc.text('Legenda: ', 80, 610);
            doc.text('n = Número de espaçamento entre chicanas em cada câmara', 80, 623);
            doc.text('e = Espaçamento entre chicanas', 80, 636);
            doc.text('V1 (m/s) = Velocidade nos trechos retos', 80, 649);
            doc.text('V2 (m/s) = Velocidade nos trechos curvos', 80, 662);
            doc.text('Dhd (m) = Perda de carga distribuída(m)', 80, 675);
            doc.text('Dhl (m) = Perda de carga localizada', 80, 688);
            doc.text('Dht (m) = Perda de carga total', 80, 701);
            doc.text('G (1/s) = Gradiente de velocidade', 80, 714);
        }

        if (canvas.current != null) {
            doc.addPage();
            doc.text('Universidade Federal Rural do Semi-Árido - UFERSA', 80, 50);
            doc.text('Este programa é destinado à realização do pré-dimensionamento da', 80, 63);
            doc.text('unidade de floculação hidráulica (fluxo vertical) em estações do', 80, 76);
            doc.text('tratamento de água do tipo convencional', 80, 89);

            doc.setLineWidth(0.5);
            doc.line(485, 95, 80, 95);
            doc.text('Detalhamento do pré-dimensionamento da unidade de Floculação', 80, 115);
            doc.addImage(canvas.current.toDataURL(), 'PNG', 15, 130, 580, 420);
        }
        // doc.save('Resultados Floculação.pdf');
        doc.output('dataurlnewwindow');
    }



    

    useEffect(() => {
        const img = new Image();
        if(props.ncvalue === 3){
            img.src = Img3;
        }else{
            if(props.ncvalue === 4){
                img.src = Img4;
            }else{
                img.src = Img5;
            }
        }
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
                a.download = 'Floculação.png';
                document.body.appendChild(a);
                a.click();
            }
        }
    }
    useEffect(() => {
        if (image && canvas) {
            if (canvas.current != null) {
                var v1 = Number(q) / (Number(a) * V12[0]);
                const ctx = canvas.current.getContext("2d") as any;
                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, 650, 450);
                ctx.drawImage(image, 0, 0, 650, 450);
                ctx.font = `12px Roboto`;
                ctx.fillText(`L = ${Number(B).toFixed(4)} m`, 297, 15);
                ctx.font = `9px Roboto`;
                ctx.fillText(`a = ${Number(a).toFixed(4)}m`, 7, 50);
                ctx.fillText(`a = ${Number(a).toFixed(4)}m`, 20, 90);
                ctx.fillText(`a = ${Number(a).toFixed(4)}m`, 20, 130);
                if(props.ncvalue === 4){
                    ctx.fillText(`a = ${Number(a).toFixed(4)}m`, 20, 170);
                    ctx.fillText(`e = ${V12[3]?.toFixed(4)}m`, 135, 160);
                }
                if(props.ncvalue === 5){
                    ctx.fillText(`a = ${Number(a).toFixed(4)}m`, 20, 170);
                    ctx.fillText(`a = ${Number(a).toFixed(4)}m`, 20, 210);
                    ctx.fillText(`e = ${V12[3]?.toFixed(4)}m`, 135, 160);
                    ctx.fillText(`e = ${V12[4]}m`, 135, 203);
                }
                ctx.fillText(`e = ${V12[0]?.toFixed(4)}m`, 105, 40);
                ctx.fillText(`e = ${V12[1]?.toFixed(4)}m`, 120, 80);
                ctx.fillText(`e = ${V12[2]?.toFixed(4)}m`, 120, 120);
                ctx.font = `9px Roboto`;
                ctx.fillText(`H =     ${props.profvalue} m`, 525, 320);
                ctx.font = `10px Roboto`;
                ctx.fillText(`1,5 e =`, 490, 375);
                ctx.fillText(`1,00 m`, 490, 390);
                ctx.fillText(`V1 = ${v1.toFixed(4)} m³`, 20, 320);
                ctx.fillText(`V1`, 107, 340);
                ctx.font = `7px Roboto`;
                ctx.fillText(`V2 = ${((2 / 3) * v1).toFixed(4)} m/s`, 105, 280);
                ctx.fillText(`0.10`, 140, 385);
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
                                <TableHead><span className="tooltiptext">Número de espaçamento entre chicanas em cada câmara</span>n</TableHead>
                                <TableHead><span className="tooltiptext">Espaçamento entre chicanas</span><i>e</i></TableHead>
                                <TableHead><span className="tooltiptext">Velocidade nos trechos retos (m/s)</span>V<sub>1</sub> (m/s)</TableHead>
                                <TableHead><span className="tooltiptext">Velocidade nos trechos curvos (m/s)</span>V<sub>2</sub> (m/s)</TableHead>
                                <TableHead><span className="tooltiptext">Perda de carga distribuída (m)</span>Δhd (m)</TableHead>
                                <TableHead><span className="tooltiptext">Perda de carga localizada (m)</span>Δhl (m)</TableHead>
                                <TableHead><span className="tooltiptext">Perda de carga total (m)</span>Δht (m)</TableHead>
                                <TableHead><span className="tooltiptext">Gradiente de velocidade (1/s)</span>G (1/s)</TableHead>
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
                                fatorvalue={fatorvalue}
                            />
                        </Table>
                    </Section>
                </CardResultados>
                {
                    firstTable > 70 &&
                    <CardFator>
                        <NotiFator>
                            <h2>O valor do canal 1 é maior que 70 1/s!</h2>
                            <p>Digite um fator de correção para corrigir.</p>
                        </NotiFator>
                        <InputFator>
                            <Op>
                                <Title>Fator de correção (%)
                                </Title>
                                <Input
                                    type="number"
                                    onChange={e => setFator(Number(e.target.value))}
                                />
                            </Op>
                            <Fator>
                                <Button onClick={calcular}>
                                    Dimensionar
                                </Button>
                            </Fator>
                        </InputFator>
                    </CardFator>
                }
                {
                    teste !== 0 && fatorvalueCalculated > 0 && isDimensione === true &&
                    <CardResultados>
                        {
                            secondTable <= 70 &&
                            <NotiFatorOk>
                                <h2>O valor do canal 1 foi corrigido com um fator de correção de {fatorvalue}%!</h2>
                            </NotiFatorOk>
                        }
                        {
                            secondTableCalculated > 70 &&
                            <NotiFator>
                                <h2>O valor do canal 1 continua maior que 70 1/s!</h2>
                                <p>Insira novamente um fator de correção.</p>
                            </NotiFator>
                        }
                        <Section>
                            <Table>
                                <TableHeadContainer>
                                    <TableHead><span className="tooltiptext">Número de espaçamento entre chicanas em cada câmara</span>n</TableHead>
                                    <TableHead><span className="tooltiptext">Espaçamento entre chicanas</span><i>e</i></TableHead>
                                    <TableHead><span className="tooltiptext">Velocidade nos trechos retos (m/s)</span>V<sub>1</sub> (m/s)</TableHead>
                                    <TableHead><span className="tooltiptext">Velocidade nos trechos curvos (m/s)</span>V<sub>2</sub> (m/s)</TableHead>
                                    <TableHead><span className="tooltiptext">Perda de carga distribuída (m)</span>Δhd (m)</TableHead>
                                    <TableHead><span className="tooltiptext">Perda de carga localizada (m)</span>Δhl (m)</TableHead>
                                    <TableHead><span className="tooltiptext">Perda de carga total (m)</span>Δht (m)</TableHead>
                                    <TableHead><span className="tooltiptext">Gradiente de velocidade (1/s)</span>G (1/s)</TableHead>
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
                                    fatorvalue={fatorvalueCalculated}
                                />
                            </Table>
                        </Section>
                    </CardResultados>
                }
                {
                    teste !== 0 && fatorvalueCalculated > 0 && isDimensione === false && calculated !== 0 &&
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
                                    fatorvalue={fatorvalueCalculated}
                                />
                            </Table>
                        </Section>
                    </CardResultados>
                }
                {
                    (secondTableCalculated <= 70 && V18[0] <= 70) &&
                    <PDFButton onClick={jsPdfGenerator}>Gerar PDF</PDFButton>
                }
                {
                    fatorAcept &&
                    <PDFButton onClick={jsPdfGenerator}>Gerar PDF</PDFButton>
                }
            </Resultados>
        </>
    );
}
const Floculacao: React.FC<ResultsProps> = (props) => {


    const [qms, setQms] = useState("");
    const [gs, setGs] = useState("3");
    const [gValues, setGValues] = useState<string[]>([]);
    const [valuesInputs, setValuesInputs] = useState({});
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

        if (qvalue !== "" && tvalue !== "" && profvalue !== "" && ndvalue !== "" && lvalue !== "" && ok === 1) {
            setIsDimensione(true);
            setQvalueCalculated(qvalue);
            setTvalueCalculated(tvalue);
            setProfvalueCalculated(profvalue);
            setNdvalueCalculated(ndvalue);
            setLvalueCalculated(lvalue);
            setCalculated(qvalue);
            setGsCalculated(gs);
        } else {
            alert("preencha todos os campos");
        }
        setValuesInputs(gs);
        // setValuesInputs({qvalueCalculated, tvalueCalculated, gsCalculated,profvalueCalculated,ndvalueCalculated, lvalueCalculated,  g1valueCalculated, g2valueCalculated, g3valueCalculated, g4valueCalculated, g5valueCalculated });
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
                                <span className="tooltiptext">Vazão</span>
                            </Title>
                            <Input
                                type="number"
                                onChange={e => setVazao(e.target.value)}
                            />
                        </Op>
                        <Op>
                            <Title>t (min)
                                <span className="tooltiptext">Tempo mínimo</span>
                            </Title>
                            <Input
                                type="number"
                                onChange={e => setT(e.target.value)}
                            />
                        </Op>
                        <Op>
                            <Title>Nº de canais
                                <span className="tooltiptext">Número de canais</span>
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
                                <span className="tooltiptext">Profundidade</span>
                            </Title>
                            <Input
                                type="number"
                                onChange={e => setProf(e.target.value)}
                            />
                        </Op>
                        <Op>
                            <Title>Nº de decantadores
                                <span className="tooltiptext">Número de decantadores</span>
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
                                <span className="tooltiptext">Largura em metros</span>
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
                                            <span className="tooltiptext">Canal {i + 1}</span>
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
                        values={valuesInputs}
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
                        values={valuesInputs}
                    />
                }
            </ETA3Container>
        </PageTemplate>
    );
}

export default Floculacao;
