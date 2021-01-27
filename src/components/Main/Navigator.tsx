import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetNav_All, SetNav_Private, SetNav_Today } from "../../actions/actions";
import * as S from "./styles"
import { RootState } from "typesafe-actions"

const Navigator : React.FC = () => {
    const navstate = useSelector((state: RootState) => (state.nav.state));
    const dispatch=useDispatch();
    useEffect(()=>{
        console.log(navstate);
    },[navstate])
    return (
        <S.NavigatorWrapper state={navstate}>
            <S.NavigatorBT onClick={()=>dispatch(SetNav_Today())}>오늘</S.NavigatorBT>
            <S.NavigatorBT onClick={()=>dispatch(SetNav_Private())}>전체</S.NavigatorBT>
            <S.NavigatorBT onClick={()=>dispatch(SetNav_All())}>개인</S.NavigatorBT>
        </S.NavigatorWrapper>
    )
};
export default Navigator;