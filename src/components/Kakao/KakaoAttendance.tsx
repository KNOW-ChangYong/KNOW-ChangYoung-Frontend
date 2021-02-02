import axios from "axios";
import { useEffect } from "react";

function KakaoAttendance(){
    function Attendance(){
        const now=new Date();
        const startTime = new Date(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} 6:00:00`)
        const endTime = new Date(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} 8:01:00`)
        if(!(now>=startTime && now<=endTime)){
            alert("출석체크 시간이 아닙니다");
            return;
        }
        axios.post(`https://changapi.eungyeol.live/attendance`,"",{
            headers: {
                'Content-Type' : "application/json; charset=UTF-8",
                Authorization : `Bearer ${localStorage.token}`
            }
        })
        .then((res)=>{alert("출석체크에 성공하였습니다."); window.location.href="/";})
        .catch((e)=>{ e.response.data.status===429 ? alert("이미 출석된 상태입니다.") : alert("출석체크 시간이 아닙니다."); window.location.href="/" })
        
    }
    useEffect(()=>{
        Attendance()
    },[])
    return(
        <div>출석체크 중....</div>
    )
}
export default KakaoAttendance;