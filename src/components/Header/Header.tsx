import ListIco from "./ListIco";
import Logo from "./logo.png"
import * as S from "./styles"
const Header : React.FC = () => (
    <S.HeaderWrapper>
        <div></div>
        <img src={Logo}></img>
        <ListIco></ListIco>
    </S.HeaderWrapper>
);
    

export default Header;