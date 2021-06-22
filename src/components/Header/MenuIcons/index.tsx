import styled from 'styled-components';

interface MenuIconProps {
    open?: boolean;
}

const MenuIcon = styled.div`
    font-size: 3rem;
    color: ${(props: MenuIconProps) => props.open ? 'var(--branco)' : 'var(--cinza)'};
    z-index: 2;

    @media(min-width: 768px){
        display: none;
    }
`
export const IconBack = styled.div`
    color: var(--color-text-button);
    font-size: 2rem;
    :hover{
        color: var(--secundaria);
    }
`

export default MenuIcon;