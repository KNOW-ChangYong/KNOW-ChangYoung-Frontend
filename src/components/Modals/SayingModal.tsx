import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import * as S from "./styles"
function SayingModal(){
    const [say, setSay] = useState("");
    function sayHandler(e : ChangeEvent<HTMLInputElement>){
        setSay(e.target.value);
    }
    function submit(e: FormEvent){
        e.preventDefault();
        if(say==="" ){
            alert("명언이 입력되지 않았습니다.");
            return;
        }
        axios.post(`https://changapi.eungyeol.live/saying`,{
            content : say
        },{
            headers: {
                'Content-Type' : "application/json; charset=UTF-8",
                Authorization : `Bearer ${localStorage.token}`
            }
        })
        .then((res)=>alert("명언이 등록되었습니다."))

    }
    return(
        <S.Modal_Wrapper>
            <S.SayingWrapper onSubmit={submit}>
                <input onChange={sayHandler} value={say} type="text"></input>
                <button>명언말하기</button>
            </S.SayingWrapper>
        </S.Modal_Wrapper>
    )
}
export default SayingModal;