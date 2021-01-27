import { useState } from "react";
import * as S from "./styles"
const Navigator : React.FC = () => {
    const [state,setState] = useState(1)
    return (
        <S.NavigatorWrapper state={state}>
            <S.NavigatorBT onClick={()=>setState(1)}>오늘</S.NavigatorBT>
            <S.NavigatorBT onClick={()=>setState(2)}>전체</S.NavigatorBT>
            <S.NavigatorBT onClick={()=>setState(3)}>개인</S.NavigatorBT>
        </S.NavigatorWrapper>
    )
};
export default Navigator;