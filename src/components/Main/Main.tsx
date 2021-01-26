import Header from "../Header/Header"
import Navigator from "./Navigator";
import Profile from "./Profile";
import * as S from "./styles"
const Main : React.FC = () => (
    <S.Container>
        <Header></Header>
        <Profile></Profile>
        <Navigator></Navigator>
    </S.Container>
);
    

export default Main;