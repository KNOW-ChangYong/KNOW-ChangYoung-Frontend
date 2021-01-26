import Header from "../Header/Header"
import Profile from "./Profile";
import * as S from "./styles"
const Main : React.FC = () => (
    <S.Container>
        <Header></Header>
        <Profile></Profile>
    </S.Container>
);
    

export default Main;