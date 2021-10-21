import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import perfil from '../../../assets/images/user.png';

const User = styled.div`
    
    display: flex;
    align-items: center;
    @media(min-width: 768px){
        padding: 0;
        margin-left: auto;
        margin-right: 10%;
    }
`

const UserImg = styled.img.attrs({src: perfil, alt: "foto do perfil"})`
    height: 60px;
    border-radius: 60px;
`



export default function Perfil(){
    return(
        <>
            <User>
                <div>
                    <UserImg />
                </div>
            </User>
        </>
    );

}