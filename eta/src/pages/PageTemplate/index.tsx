import React from 'react';
import Header from '../../components/Header/Container';
import {BannerProps} from '../../components/Header/TopBar';
import Container from '../../components/Container';
import Footer from '../../components/Footer/Container';

const PageTemplate: React.FC<BannerProps> = (props) =>{
    return(
        <>
            <Header />
            <Container>
                {props.children}
            </Container>
            <Footer />
        </>
    );
}

export default PageTemplate;