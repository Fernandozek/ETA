import React, { Component } from 'react';
import styled from 'styled-components';
import PageTemplate from '../PageTemplate';
import { FiMail } from 'react-icons/fi';
import {AiOutlineGlobal } from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import { Link } from 'react-router-dom';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    @media(min-width: 768px){
        flex-direction: row;
        align-items:baseline;
        width: 100%;
    }
    
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    @media(min-width: 768px){
        width: 500px;
        align-items: initial;
        margin-left: auto;
        margin-right: 50px;
    }
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
    background-color: var(--branco);
    border-radius: 8px;
    padding-bottom: 50px;
    .Login{
        background-color: var(--text);
    }
    .Facebook{
        background-color: #2F80ED;
    }
    .Google{
        background-color: #E33D3D;
    }
    @media(min-width: 768px){
        width: 350px;
    }
`
const TitlePage = styled.h1`
    color: var(--primaria-dark);
    font-size: 2.2rem;
    @media(min-width: 768px){
        text-align: left;
    }
`
const Description = styled.p`
    text-align: center;
    width: 80%;
    font-size: 1.4rem;
    color: var(--color-description);
    margin: 10px 0;
    @media(min-width: 768px){
        width: 500px;
        text-align: left;
        margin-bottom: 40px;
    }
`
const SocialNetworks = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    height: 100px;
    align-items: center;
    color: var(--text);
    font-size: 1.4rem;
    align-items: initial;
    
`
const Icon = styled.span`
    font-size: 1.6rem;
    color: var(--text);
    margin-right: 10px;
`
const Email = styled.a`
    color: var(--text);
    font-weight: normal;
    text-decoration: none;

    :hover {
        color: var(--cinza);
    }
`
const CardTop = styled.div`
    margin: 10px 0;
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
`

const NovaConta = styled(Link)`
    font-size: 1.6rem;
    text-decoration: none;
    font-weight: normal;
    color: var(--primaria-dark);
`
const TitleCard = styled.h1`
    color: var(--gray2);
`
const Form = styled.form`
    width: 90%;
    
`
const InputTitle = styled.h2`
    font-size: 1.2rem;
    color: var(--text);
    font-weight: bold;
    margin: 5px 0;
`
const Input = styled.input`
    width: 100%;
    height: 35px;
    padding: 0 10px;
    margin-bottom: 5px;
    border-radius: 8px;
    background-color: var(--branco);
    border: 1px solid var(--gray-dark);
    outline: none;
`
const Password = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    i{
        font-size: 1.5rem;
        position: absolute;
        top: 10px;
        right: 5px;
        cursor: pointer;
        color: var(--text);
    }
`

const InputBottom = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    justify-content: space-between;
    color: var(--text);
    & ${Input}{
        width: 15px;
        margin-right: 5px;
        background-color: var(--secundaria);
    }
    div{
        display: flex;
        align-items: center;
    }
    
`
const LinkSenha = styled(Link)`
    text-decoration: none;
    color: var(--color-complementos);
`
const Button = styled(Link)`
    width: 90%;
    height: 40px;
    margin-bottom: 10px;
    color: var(--branco);
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
class Login extends Component{
    state = {
        isPasswordShown : false
    }
    togglePasswordVisiblity = () => {
        const {isPasswordShown} = this.state;
        this.setState({isPasswordShown: !isPasswordShown});
    }
    render(){

        const { isPasswordShown } = this.state; 

        return(
            <PageTemplate
                
            >
                <LoginContainer>
                    <Content>
                        <TitlePage>Seja bem-vindo ao Eta</TitlePage>
                        <Description>
                            O tratamento convencional consiste na implantação de unidades separadas, que
                            desempenham atividades de tratamento singulares; seja na desestabilização das partículas
                            sólidas (coagulação), formação dos flocos (floculação), remoção de partículas sólidas por
                            meio de sedimentação (decantação), remoção de partículas sólidas remanescentes,
                            dissolvidas e microrganismos (filtração), e o processo de desinfecção, que tem o objetivo
                            de remover organismos patogênicos, tais como: vírus e bactérias.
                        </Description>
                        <SocialNetworks>
                            <li>
                                <Icon>
                                    <AiOutlineGlobal />
                                </Icon>
                                eta.com.br
                            </li>
                            <li>
                                <Icon>
                                    <FiMail />
                                </Icon>
                                <Email href="mailto: siteeta@.com.br ">
                                    siteeta@.com.br
                                </Email>
                            </li>
                            <li>
                                <Icon>
                                    <GoLocation />
                                </Icon>
                                Endereço: xxxxxx-xxxxx, 00000000
                            </li>
                        </SocialNetworks>
                    </Content>
                    <Card>
                        <CardTop>
                            <TitleCard>Fazer login</TitleCard>
                            <NovaConta to="/criarconta">Crie uma Conta</NovaConta>
                        </CardTop>
                        <Form>
                            <InputTitle>E-mail</InputTitle>
                            <Input type="email"></Input>
                            <InputTitle>Senha</InputTitle>
                            <Password>
                                <Input autoComplete="off" type={(isPasswordShown) ? "text" : "password"}></Input>
                                <i className={`fa ${isPasswordShown ? "fa-eye-slash" : "fa-eye"} password-icon`} onClick={this.togglePasswordVisiblity}></i>
                            </Password>
                            <InputBottom>
                                <div>
                                    <Input type="checkbox"/> Lembrar-me
                                </div>
                                
                                <LinkSenha to="/">Esqueci minha senha</LinkSenha>
                            </InputBottom>
                        </Form>
                        <Button to="/" className="Login">Login</Button>
                        <Button to="/" className="Facebook">Facebook</Button>
                        <Button to="/" className="Google">Google</Button>
                    </Card>
                </LoginContainer>
            </PageTemplate>
        );
    }
}

export default Login;