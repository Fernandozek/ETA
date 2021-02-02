import React from 'react';
import styled from 'styled-components';
import TopBar,{BannerProps} from '../TopBar';

const MainHeader = styled.header`
    background-color: var(--primaria);
    
`

const Header: React.FC<BannerProps> =  (props) => {
    return(
        <MainHeader>
            <TopBar />
        </MainHeader>
    );
}

export default Header;