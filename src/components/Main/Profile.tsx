import * as S from "./styles"
import img from "./img.png"
const Profile : React.FC = () => (
    <S.ProfileWrapper>
       <img src={img}></img>
       <S.ProfileName>정창용 <span>학생</span></S.ProfileName>
       <S.AttendacneBT>출석</S.AttendacneBT>
    </S.ProfileWrapper>
);
    

export default Profile;