import axios from "axios";

declare global {
    interface Window {
      Kakao: any;
    }
  }
function paginate(array : any, page_size : number, page_number : number) {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}
function kakao(){
    async function sendDefault(){
        const { data } = await axios.get("https://changapi.eungyeol.live/attendance/attendancestatus")
        console.log(`${(data.lastDayGraph*100).toFixed(1)}% -> ${(data.todayGraph*100).toFixed(1)}% ( ${(data.todayGraph*100-data.lastDayGraph*100).toFixed(1)}% )`)
        const now:Date = new Date();
        if(now.getHours()===8){
            let content:any=[];
            for(let i=1;i<=data.studentResponses.length;i++){
                if(paginate(data.studentResponses,3,i).length===0) break;
                content=[...content,{
                    title: i===1 ? `최종 미출석자 : ${data.studentResponses.length}명` : 'and',
                    description: `${(paginate(data.studentResponses,3,i).map((i : any)=> i.name)).join(", ")}`,
                    imageUrl: '',
                    link: {
                        mobileWebUrl: 'https://developers.kakao.com',
                        webUrl: 'https://developers.kakao.com',
                    },
                }]
            }
            content=[...content, {
                title: '출석률 변동 : ',
                description: `${(data.lastDayGraph*100).toFixed(1)}% -> ${(data.todayGraph*100).toFixed(1)}% ( ${(data.todayGraph*100-data.lastDayGraph*100).toFixed(1)}% )`,
                imageUrl: '',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                    webUrl: 'https://developers.kakao.com',
                },
            },]
            console.log(content);
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
            const desc = (now.getMinutes() > 40) ? `미출석자 : ${(data.studentResponses.map((i : any)=> i.name)).join(", ")}` : "아래 버튼을 클릭하면 바로 출석이 완료됩니다. "
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