import React, { Component } from 'react';
import styled from 'styled-components';
import PageTemplate from '../../../pages/PageTemplate';

const EtaContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 50px 0;
`
const Parshall = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-around;
`
const Selecione = styled.select`

`
const Title = styled.h2`
    color: var(--h2);
`
const Section = styled.section`
    margin-top: 20px;
`
const Entrada = styled.div`
    display: inline;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
margin-top: 10px;
    width: 80px;
    padding: 5px;
    border: none;  
    border-radius: 8px;
    outline: none;
`
class Eta1 extends Component{
    render(){
        return(
            <PageTemplate>
                <EtaContainer>
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
                        <Input type="number"/>
                    </Entrada>   

                </Section>

                </EtaContainer>
            </PageTemplate>
        );
    }
}

export default Eta1;