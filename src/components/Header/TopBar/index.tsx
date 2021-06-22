import React from 'react';
import styled from 'styled-components';
import Menu from '../Menu';
import Perfil from '../Perfil';

const TopBarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--primaria-dark);
    height: 7rem;
    @media(min-width: 768px){
        justify-content: center;
    }
`
export interface BannerProps{
    
}

export default function TopBar(){
    return(
        <TopBarContainer>
            <Menu />
            <Perfil />
        </TopBarContainer>
    );
}