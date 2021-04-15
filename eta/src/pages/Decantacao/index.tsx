import React, { useState } from 'react';
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
const Consideracoes = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
const Atendida = styled.div`
    max-width: 200px;
    padding: 15px;
    font-weight: bold;
    text-align: center;
    background-color:#b4ffb4;
    color: #000000;
`
const NAtendida = styled.div`
    max-width: 200px;
    padding: 15px;
    font-weight: bold;
    text-align: center;
    background-color:#ff7070;
    color: #000000;
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
interface ResultsProps {
    q: number,
    vs: number,
    ns: number,
    prof: number
}
const Result: React.FC<ResultsProps> = (props) => {
    const [V1, V2, V3] = Dec.dec(props.q, props.vs, props.ns, props.prof);
    return (
        <Resultados>
            <Left>
                <CardResultados>
                    <TitleCard>Painel de resultados</TitleCard>
                    <Grid>
                        <Item>
                            <Name>As (m²)
                                <span className="tooltiptext">Área superficial útil da zona de decantação</span>
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
                                <span className="tooltiptext">Largura do decantador</span>
                            </Name>
                            <Value>{V1[2].toFixed(0)}</Value>
                        </Item>
                        <Item>
                            <Name>L (m)
                                <span className="tooltiptext">Comprimento do decantador</span>
                            </Name>
                            <Value>{V1[3].toFixed(4)}</Value>
                        </Item>
                        <Item>
                            <Name>V<sub>0</sub> (cm/s)
                                <span className="tooltiptext">Velocidade horizontal</span>
                            </Name>
                            <Value>{V1[4].toFixed(4)}</Value>
                        </Item>
                        <Item>
                            <Name>Ql (m³/s)
                                <span className="tooltiptext">Vazão que passa pela unidade</span>
                            </Name>
                            <Value>{V2[0].toFixed(4)}</Value>
                        </Item>
                        <Item>
                            <Name>Lv (m)
                                <span className="tooltiptext">Comprimento do total do vertedor</span>
                            </Name>
                            <Value>{V2[1].toFixed(4)}</Value>
                        </Item>
                        <Item>
                            <Name>Lcalha (m)
                                <span className="tooltiptext">Comprimento das calhas</span>
                            </Name>
                            <Value>{V2[2].toFixed(4)}</Value>
                        </Item>
                        <Item>
                            <Name>Nº de calhas
                                <span className="tooltiptext">Número de calhas</span>
                            </Name>
                            <Value>{V2[3].toFixed(0)}</Value>
                        </Item>
                        <Item>
                            <Name>S entre calhas (m)
                                <span className="tooltiptext">Espaçamento entre calhas</span>
                            </Name>
                            <Value>{V2[4].toFixed(4)}</Value>
                        </Item>
                    </Grid>
                </CardResultados>
                <CardResultados>
                    <TitleCard>Painel de considerações</TitleCard>
                    <Consideracoes>
                        {
                           V3[0] < 20000 &&
                           <Atendida>
                                <p>
                                    Condição satisfeita:<br />
                                    Re menor que 20000
                                </p>
                           </Atendida> 
                        }
                        {
                           V3[0] >= 20000 &&
                           <NAtendida>
                                <p>
                                    Condição satisfeita:<br />
                                    Re maior ou igual a 20000
                                </p>
                           </NAtendida> 
                        }
                        {
                            V3[0] >= 10000 &&
                            <Atendida>
                                <p>
                                    Sistema com capacidade acima de 10.000 m³/dia - V0 = 0,75. <br />
                                (Condição atendida!)
                            </p>
                            </Atendida>
                        }
                        {
                            V3[0] < 10000 &&
                            <NAtendida>
                                <p>
                                    Sistema com capacidade abaixo de 10.000 m³/dia - V0 = 0,75. <br />
                                (Condição não atendida!)
                            </p>
                            </NAtendida>
                        }
                        {
                            V3[1] >= 3 && V3[1] <= 4 &&
                            <Atendida>
                                <p>
                                    L/B = 3 ou 4 <br />
                                (Condição atendida!)
                            </p>
                            </Atendida>
                        }
                        {
                            V3[1] < 3 || V3[1] > 4 &&
                            <NAtendida>
                                <p>
                                    L/B != 3 ou 4 <br />
                                (Condição não atendida!)
                            </p>
                            </NAtendida>
                        }
                    </Consideracoes>
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
                            <TitleValue>L/B</TitleValue>
                            <Value>{V3[1].toFixed(5)}</Value>
                        </ItemRight>
                    </GridRight>
                    {

                    }
                </CardResultados>

            </Right>
        </Resultados>
    );
}
const Decantacao: React.FC<ResultsProps> = (props) => {

    var pontos = 5;
    var tmp = [];
    for (var i = 0; i < pontos; i++) {
        tmp.push(i);
    }

    const [q, setQ] = useState("");
    const [vs, setVs] = useState("");
    const [nsedimentacao, setNsedimentacao] = useState("");
    const [profundidade, setProfundidade] = useState("");

    const [calculated, setCalculated] = useState("");
    const [isDimensione, setIsDimensione] = useState(false);
    const [qCalculated, setQCalculated] = useState("");
    const [vsCalculated, setVsCalculated] = useState("");
    const [nsedimentacaoCalculated, setNsedimentacaoCalculated] = useState("");
    const [profundidadeCalculated, setProfundidadeCalculated] = useState("");

    function calcular() {
        if (q !== "" && vs !== "" && nsedimentacao !== "" && profundidade !== "") {
            setIsDimensione(true);
            setQCalculated(q);
            setVsCalculated(vs);
            setNsedimentacaoCalculated(nsedimentacao);
            setProfundidadeCalculated(profundidade);
            setCalculated(q);
        } else {
            alert("preencha todos os campos");
        }
    }

    function setVazao(n: string) {
        setIsDimensione(false);
        setQ(n);
    }
    function setvs(n: string) {
        setIsDimensione(false);
        setVs(n)
    }
    function setSedmentacao(n: string) {
        setIsDimensione(false);
        setNsedimentacao(n);
    }
    function setProfund(n: string) {
        setIsDimensione(false);
        setProfundidade(n);
    }
    return (
        <PageTemplate
            title="Decantação"
            topBar={true}
        >
            <ETA2Container>
                <Card>
                    <Entradas>
                        <Op>
                            <Title>Q (m³/s)</Title>
                            <Input
                                type="number"

                                onChange={e => setVazao(e.target.value)}
                            />
                        </Op>
                        <Op>
                            <Title>vs (m/dia)
                                <span className="tooltiptext">velocidade de sedimentação</span>
                            </Title>
                            <Input
                                type="number"

                                onChange={e => setvs(e.target.value)}
                            />
                        </Op>
                        <Op>
                            <Title>Nº un. de sedimentação</Title>
                            <Input
                                type="number"

                                onChange={e => setSedmentacao(e.target.value)}
                            />
                        </Op>
                        <Op>
                            <Title>Profundidade (m)</Title>
                            <Input
                                type="number"

                                onChange={e => setProfund(e.target.value)}
                            />
                        </Op>
                    </Entradas>
                    <Dimensionar>
                        <Button onClick={calcular}>
                            Dimensionar
                            </Button>
                    </Dimensionar>
                </Card>
                {
                    isDimensione === true &&
                    <Result
                        q={Number(q)}
                        vs={Number(vs)}
                        ns={Number(nsedimentacao)}
                        prof={Number(profundidade)}
                    />
                }
                {
                    isDimensione === false && calculated !== "" &&
                    <Result
                        q={Number(qCalculated)}
                        vs={Number(vsCalculated)}
                        ns={Number(nsedimentacaoCalculated)}
                        prof={Number(profundidadeCalculated)}
                    />
                }
            </ETA2Container>
        </PageTemplate>
    );
}

export default Decantacao;