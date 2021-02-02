import styled from 'styled-components';
import logo from '../../../../assets/images/depura.png';
const Logo = styled.img.attrs({src: logo, alt:"Logo do TopoUfersa"})`
    height: 2.4rem;
    margin: 0 5px;
    @media(min-width: 900px){
        height: 4.0rem;
    }
`

export default Logo;