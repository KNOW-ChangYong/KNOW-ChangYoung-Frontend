import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { AttendanceResponse } from "../../interfaces";
import ListItem from "./ListItem";
import * as S from "./styles"
const List : React.FC = () => {
    const [data, setData] = useState<AttendanceResponse[] | null>(null);
    const test=new Date().toString();
    const navstate = useSelector((state: RootState) => (state.nav.state));
    function getFormatDate(date: Date){
        var year = date.getFullYear();
        var month: number | string = (1 + date.getMonth());
        month = month >= 10 ? month : '0' + month;
        var day: number | string = date.getDate();
        day = day >= 10 ? day : '0' + day;
        return year + '-' + month + '-' + day;
    }
    async function getAttendance(){
        let temp;
        if(navstate=="today") temp=await axios.get(`https://changapi.eungyeol.live/attendance/${getFormatDate(new Date())}`)
        else if(navstate=="private") temp=await axios.get(`https://changapi.eungyeol.live/attendance/profile/${localStorage.userId}`)
        else temp=await axios.get("https://changapi.eungyeol.live/attendance")
        setData(temp.data)
    }
    useEffect(()=>{
        getAttendance();
    },[navstate])
    return (
        <S.ListWrapper>
            <S.ListTitle>{navstate=="today" ? "오늘" : navstate=="all" ? "전체" : "개인"} …</S.ListTitle>
            <S.ListTime>{test}</S.ListTime>
            <S.ListTable>
                <thead>
                    <tr>
                        <th>프로필</th>
                        <th>이름 / 계급</th>
                        <th>출석 / 미출석</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map((i,index)=>(
                            <ListItem key={index} data={i}></ListItem>
                        ))
                    }
                </tbody>
            </S.ListTable>
        </S.ListWrapper>        
    )
};
export default List;