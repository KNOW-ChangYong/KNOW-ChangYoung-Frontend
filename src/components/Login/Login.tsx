import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import * as S from "./styles"
function Login(){
    const [name, setName] = useState("");
    const [code,setCode] = useState("");
    function nameHandler(e : ChangeEvent<HTMLInputElement>){
        setName(e.target.value);
    }
    function codeHandler(e : ChangeEvent<HTMLInputElement>){
        setCode(e.target.value);
    }
    function submit(e: FormEvent){
        e.preventDefault();
        if(name==="" || code===""){
            alert("닉네임 또는 인증코드가 입력되지 않았습니다.");
            return;
        }
        axios.post(`https://changapi.eungyeol.live/auth?time=${new Date().getTime()}`,{
            id : code,
            nickname : name 
        })
        .then((res)=>{ localStorage.setItem("token",res.data.accessToken); window.location.href="/"})

    }
    return(
        <S.LoginWrapper onSubmit={submit}>
            <input onChange={codeHandler} value={code} placeholder="인증코드를 입력해주세요" type="text"></input>
            <input onChange={nameHandler} value={name} placeholder="닉네임을 입력해주세요" type="text"></input>
            <button>인증</button>
        </S.LoginWrapper>
    )
}
export default Login;