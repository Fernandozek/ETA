import React from 'react';
import styled from 'styled-components';
import FooterContent from '../Content';

const FooterContainer = styled.footer`
    background-color: var(--fundo);

    @media(min-width: 768px){
        
    }
`


export default function Footer(){
    return(
        <FooterContainer>
            <FooterContent />
        </FooterContainer>
    );
}