import React from 'react';
import styled from 'styled-components';
import Img from '../../../assets/images/eta.png';
import BannerImg from '../BannerImg';
import BannerMessage from '../BannerMessage';

const BannerContainer = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

` 
export interface BannerProps{
    imageSrc?: boolean;
    title?: string;
    topBar?: boolean;
}
const Banner: React.FC<BannerProps> = (props) =>{
    return(
        <BannerContainer>
            {props.imageSrc &&
                <BannerImg 
                    src={Img}
                    alt="Logo do Metrics"
                />    
            }
            {props.title &&
                <BannerMessage {...props}/>
            }
        </BannerContainer>
    );
}

export default Banner;