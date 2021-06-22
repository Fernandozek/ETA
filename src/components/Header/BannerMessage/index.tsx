import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    font-size: 2.4rem;
    color: var(--branco);
`
export interface BannerProps{
    imageSrc?: boolean;
    title?: string;
    topBar?: boolean;
}
const Message: React.FC<BannerProps> = (props) => {
    return(
            <Title>{props.title}</Title>
    );
}
export default Message;