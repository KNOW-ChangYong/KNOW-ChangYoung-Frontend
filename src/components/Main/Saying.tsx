import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {  ModalState } from "../../actions/actions";
import * as S from "./styles"
interface sayingResponse{
    content : string
    name : string
}
const Saying : React.FC = () => {
    const dispatch =useDispatch();
    const [data,setData]=useState<sayingResponse>({content: "배고프다", name: "안은결"});
    useEffect(()=>{
        axios.get("https://changapi.eungyeol.live/saying")
        .then((res)=>{
            setData(res.data);
        })
    },[])
    return (
        <S.Sayingwrapper onClick={()=>dispatch(ModalState("saying"))}>
            <S.SayingContent>{data.content}</S.SayingContent>
            <S.SayingAdder>- {data.name} -</S.SayingAdder>
        </S.Sayingwrapper>        
    )
};
export default Saying;