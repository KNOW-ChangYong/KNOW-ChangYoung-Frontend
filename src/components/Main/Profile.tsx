import * as S from "./styles"
import img from "./img.png"
const Profile : React.FC = () => {
    function Attendance(){
        const now=new Date();
        console.log(now.getHours());
        if(!(now.getHours()>=7 && now.getHours()<=9)){
            alert("출석체크 시간이 아닙니다");
            return;
        }
        console.log(now.getHours());

    }
    return(
        <S.ProfileWrapper>
            <S.Wrapper>
                <img src={img}></img>
                <S.ProfileName>정창용 <span>학생</span></S.ProfileName>
            </S.Wrapper>
            <S.AttendacneBT onClick={Attendance}>출석</S.AttendacneBT>
        </S.ProfileWrapper>
    )
};
    

export default Profile;