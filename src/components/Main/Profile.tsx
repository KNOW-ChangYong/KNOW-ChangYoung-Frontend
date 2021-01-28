import * as S from "./styles"
import axios from "axios";
import { useEffect, useState } from "react";
const Profile : React.FC = () => {
    const [name,setName] = useState("이동욱");
    function Attendance(){
        const now=new Date();
        if(!(now.getHours()>=6 && now.getHours()<=9)){
            alert("출석체크 시간이 아닙니다");
            return;
        }
        axios.post(`https://changapi.eungyeol.live/attendance`,"",{
            headers: {
                'Content-Type' : "application/json; charset=UTF-8",
                Authorization : `Bearer ${localStorage.token}`
            }
        })
        .then((res)=>alert("출석체크에 성공하였습니다."))
        .catch((e)=>{ e.response.data.error==="Conflict" ? alert("이미 출석된 상태입니다.") : alert("출석체크 시간이 아닙니다.") })
    }
    useEffect(()=>{
        axios.get(`https://changapi.eungyeol.live/student`,{
            headers: {
                'Content-Type' : "application/json; charset=UTF-8",
                Authorization : `Bearer ${localStorage.token}`
            }
        })
        .then((res)=>{setName(res.data.name); localStorage.setItem("userId", res.data.userId)})
        .catch((e)=>console.log(e))
    },[])
    return(
        <S.ProfileWrapper>
            <S.Wrapper>
                <img src={require(`./userimages/${name}.jpg`).default}></img>
                <S.ProfileName>{name} <span>{name=="이동욱" ? "선생님" : "학생"}</span></S.ProfileName>
            </S.Wrapper>
            <S.AttendacneBT onClick={Attendance}>출석</S.AttendacneBT>
        </S.ProfileWrapper>
    )
};
    

export default Profile;