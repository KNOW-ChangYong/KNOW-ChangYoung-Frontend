import { useEffect } from "react";
import Header from "../Header/Header"
import Footer from "./Footer";
import List from "./List";
import Navigator from "./Navigator";
import Profile from "./Profile";
import Saying from "./Saying";
import * as S from "./styles"
const Main : React.FC = () => {
    useEffect(()=>{
        if(!localStorage.token){
            window.location.href="/login"
        }
    },[])
    return(
        <S.Container>
            <Header></Header>
            <Profile></Profile>
            <S.BackgroundWrapper>
                <Saying></Saying>
                <Navigator></Navigator>
            </S.BackgroundWrapper>
            <List></List>
            <Footer></Footer>
        </S.Container>
    )
};
    

export default Main;