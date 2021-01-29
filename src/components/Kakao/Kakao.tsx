declare global {
    interface Window {
      Kakao: any;
    }
  }
function kakao(){
    function sendCustom(){
        window.Kakao.Link.sendCustom({
            templateId: 46103
        })
    }
    return(
        <>
            <button onClick={sendCustom}>카카오 전송</button>
        </>        
    )
}
export default kakao;