import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { RiCloseFill } from 'react-icons/ri';
import MenuIcons from '../MenuIcons';
import Sigeca from '../Logos/Sigeca';
import Depura from '../Logos/Depura';
import Ucc from '../Logos/Ucc';
import Ufersa from '../Logos/Ufersa';

interface MenusProps {
    open?: boolean;
}
const SubMenu = styled.li`
    color: var(--branco);
    width: 100px;
    
    font-size: 16px;
    ul{
        min-width: 120px;
        max-width: 120px;
        height: 120px;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
    ul li:hover{
        min-width: 120px;
        max-width: 120px;
        
        background-color: var(--primaria);
    }
    
    ul ul{
        margin-top: 40px;
        display: none;
    }
    ul li{
        width: 120px;
        height: 40px;
        display: flex;
        align-items: center;   
    }
    p{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    i{
        .IconDown{
            padding-top: 15px;
            text-align: center;
            width: 20px;
            height: 30px;
            font-size: 23px;
        }
    }
    @media(max-width: 767px){
        ul:hover{
            height: 210px;
        }
    }
    @media(min-width: 768px){
        position: static;
        height: 23px;
        width: 80px;
        ul {
            flex-direction: column;
        }
    }
    @media(min-width: 1000px){
        width: 120px;
    }
`
const SubLink = styled(Link)`
    text-decoration: none;
    color: var(--branco);
`
const SubSubMenu = styled.li`
    width: 120px;
    position: static;
    flex-direction: column;
    @media(min-width: 768px){
        display: flex;
        position: absolute;
        flex-direction: row;

        ul li{
            position: relative;
            left: 100;
            width: 120px;
        }
    }
    @media(min-width: 1000px){
        width: 130px;
        p{
            display: flex;
            align-items: center;
            justify-content: center;
            min-width: 120px;
        }
    }
    ul{
        width: 120px;
        height: 80px;
    }
`
const SubSubLink = styled(Link)`
    text-decoration: none;
    color: var(--branco);
`
const Logos = styled.div`
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media(min-width: 768px){
        margin-top: 20px;
        width: 200px;
    }
    @media(min-width: 900px){
        width: 360px;
    }
`
const MenuContainer = styled.div`
    margin: 0 1.6rem;
    width: 90%;
    display: flex;
    & ${MenuIcons}{
        position: fixed;
        right: 16px;
        top: 16px;
    }
    @media(min-width: 768px){
        align-items: center;
        justify-content: center;
    }
    @media(min-width: 1000px){
    }
`
const Menus = styled.nav`
    z-index: 1;
    width: 170px;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${(props: MenusProps) => props.open ? 'translateX(100%)' : 'translateX(0)'};
    background-color: var(--primaria);
    transition: 0.3s;
    padding-top: 20px;
    
    ul{
        margin-left: 0;
        width: 100%;
        padding: 0;
    }
    ul li{
        max-width: 125px;
    }
    ul ul{
        display: none;
    }
    ul li:hover > ul{
        display: block;
    }
    @media(min-width: 768px){
        max-width: 560px;
        transform: none;
        display: flex;
        position: static;
        height: 100%;
        flex: 1;
        background-color: transparent;
        justify-content: space-between;  
    }
    @media(min-width: 1000px){
        min-width: 650px;
    }
`
const Lista = styled.li`
    color: white;
    display: flex;
    max-width: 190px;
    height: 70px;
    padding: 0;
    display: inline-block;
    text-align: initial;
    line-height: 70px;
    font-size: 16px;
    ul li:hover{
        transition: 0.3s;
    }
    @media(max-width: 1000px){
        max-width: 100px;
    }
`
const MenuList = styled.ul`
    list-style: none;
    margin-left: 2rem;
    margin-top: 1rem;
    padding: 0;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    li ul li{
        background-color: var(--SubMenuFundo);
    }
    li 
    .MenuLink{
        color: var(--branco);
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 0;
    }
    @media(min-width: 768px){
        display: flex;
        justify-content: space-between;
        margin: 0;
        li{
            margin-right: 5px;
            margin-bottom: 0;
            color: var(--branco);
        }
    }
    @media(min-width: 768px){
        flex-direction: row;
    }
    @media(min-width: 1000px){
        margin: 0;
        max-width: 630px;
        li {
            margin-bottom: 0;
            font-size: 18px;
        }
        .MenuLink{
            color: var(--color-botao-texto);
        }
    }
`
export default function Menu() {

    const [open, setOpen] = useState(true);

    return (
        <MenuContainer>
            {open &&
                <MenuIcons open={open} onClick={() => setOpen(!open)}>
                    <FiMenu />
                </MenuIcons>
            }
            {!open &&
                <MenuIcons open={open} onClick={() => setOpen(!open)}>
                    <RiCloseFill />
                </MenuIcons>
            }
            <Menus open={open}>
                <MenuList>
                    <Lista><Link to="/" className="MenuLink" >início</Link></Lista>
                    <Lista><Link to="/coagulacao" className="MenuLink" >Coagulação</Link></Lista>
                    <Lista><Link to="/floculacao" className="MenuLink" >Floculação</Link></Lista>
                    <Lista><Link to="/decantacao" className="MenuLink" >Decantação</Link></Lista>
                    <Lista><Link to="/filtracao" className="MenuLink" >Filtração</Link></Lista>

                </MenuList>

            </Menus>
            

        </MenuContainer>
    );
}