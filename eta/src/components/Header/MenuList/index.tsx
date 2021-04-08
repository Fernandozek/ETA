import styled from 'styled-components';

const MenuList = styled.ul`
    list-style: none;
    margin-left: 2rem;
    margin-top: 1rem;
    padding: 0;
    li {
        ul{
            li{
                padding: 0;
                display: inline-block;
                margin-left: 0;
            }
        }
        margin-bottom: 1rem;
        font-size: 2rem;
    }
    .MenuLink{
        color: var(--branco);
        text-decoration: none;
        display: inline-block;
        text-align: center;
        padding: 0;
        @media(min-width: 768px){
            color: var(--branco);
        }
    }
    .MenuLink:hover{
        background-color: #828282;
    }
    @media(min-width: 768px){
        display: flex;
        margin: 0;
        li {
            margin-left: 1rem;
            margin-bottom: 0;
            color: var(--branco);
        }
    }
`

export default MenuList;