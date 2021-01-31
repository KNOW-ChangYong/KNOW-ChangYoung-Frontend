declare global {
    interface Window {
      Kakao: any;
    }
  }
function kakao(){
    function sendDefault(){
        const now:Date = new Date();
        if(now.getHours()===8){
            const content = [
                {
                    title: '취미의 특징, 탁구',
                    description: '스포츠',
                    imageUrl: '',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
                    },
                },
                {
                    title: '취미의 특징, 탁구',
                    description: '스포츠',
                    imageUrl: '',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
                    },
                },
            ]
            window.Kakao.Link.sendDefault({
                objectType : 'list',
                headerTitle: '출석체크 마감',
                headerLink: {
                    mobileWebUrl: 'https://chang14.netlify.app',
                    webUrl: 'https://chang14.netlify.app',
                },
                contents: content,
                buttons: [
                    {
                        title: '더보기',
                        link: {
                            mobileWebUrl: 'https://chang14.netlify.app',
                            webUrl: 'https://chang14.netlify.app',
                        },
                    },
                ],


            })
        }
        else{
            const title=`${now.getHours()}시 ${now.getMinutes()}분 출석알림`;
            const desc = (now.getMinutes() > 40) ? "미출석자 : 안녕 방가워 내이름은 하니" : "아래 버튼을 클릭하면 바로 출석이 완료됩니다. "
            window.Kakao.Link.sendDefault({
                objectType : 'feed',
                content: { 
                    title: title, 
                    description: desc, 
                    imageUrl: "http://k.kakaocdn.net/dn/pRhZb/btqUYZT4CMW/DM14Izrf3Aymd7rIxWg3OK/kakaolink40_original.png", 
                    link: { mobileWebUrl: "https://chang14.netlify.app", 
                    webUrl: "https://chang14.netlify.app" } 
                },
                buttons: [
                    {
                    title: '출석 하기',
                    link: {
                        mobileWebUrl: 'https://chang14.netlify.app/attendance',
                        webUrl: 'https://chang14.netlify.app/attendance',
                    },
                    },
                ],


            })
        }
    }
    return(
        <>
            <button onClick={sendDefault}>카카오 전송</button>
        </>        
    )
}
export default kakao;