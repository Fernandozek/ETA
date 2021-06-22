import React from 'react';
import styled from 'styled-components';
import Page from '../Page';

const PageContainer = styled.main`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Container: React.FC = (props) => {
    return(
        <Page>
            <PageContainer>
                {props.children}
            </PageContainer>
        </Page>
    );
}

export default Container;