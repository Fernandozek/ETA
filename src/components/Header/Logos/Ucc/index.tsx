import styled from 'styled-components';
import logo from '../../../../assets/images/ucc.png';
const Logo = styled.img.attrs({src: logo, alt:"Logo da Universidade Católica de Córdoba"})`
    height: 2.4rem;
    @media(min-width: 768px){
        width: 5rem;
        height: 2rem;
    }
    @media(min-width: 900px){
        width: 10rem;
        height: 3.5rem;
    }
`

export default Logo;