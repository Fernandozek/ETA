import styled from 'styled-components';
import logo from '../../../../assets/images/ufersa.jpg';
const Logo = styled.img.attrs({src: logo, alt:"Logo da UFERSA"})`
    height: 2.4rem;
    @media(min-width: 768px){
        height: 2rem;
    }
    @media(min-width: 900px){
        height: 3.5rem;
    }
`

export default Logo;