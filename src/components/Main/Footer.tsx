import * as S from "./styles"
import Github from "./Github.png"
function Footer(){
    return(
        <S.FooterWrapper>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
                
                <p></p>
                <img onClick={()=>window.open("https://github.com/KNOW-ChangYong")} src={Github}></img>
            </div>
        </S.FooterWrapper>
    )
}
export default Footer