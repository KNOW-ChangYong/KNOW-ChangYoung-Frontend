import Header from "../Header/Header"
import List from "./List";
import Navigator from "./Navigator";
import Profile from "./Profile";
import Saying from "./Saying";
import * as S from "./styles"
import background from "./backgroundclock.png"
const Main : React.FC = () => (
    <S.Container>
        <Header></Header>
        <Profile></Profile>
        <S.BackgroundWrapper>
            <Saying></Saying>
            <Navigator></Navigator>
        </S.BackgroundWrapper>
        <List></List>
    </S.Container>
);
    

export default Main;