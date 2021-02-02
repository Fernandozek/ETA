import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export default function FooterContent() {
    return (
        <FooterContainer>
            <h1>footer</h1>
        </FooterContainer>
    );
}