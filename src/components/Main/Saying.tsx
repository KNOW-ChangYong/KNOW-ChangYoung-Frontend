import * as S from "./styles"
const Saying : React.FC = () => {
    return (
        <S.Sayingwrapper>
            <S.SayingContent>배고프다</S.SayingContent>
            <S.SayingAdder>- 안은결 -</S.SayingAdder>
        </S.Sayingwrapper>        
    )
};
export default Saying;