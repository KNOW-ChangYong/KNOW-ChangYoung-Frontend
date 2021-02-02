import { start } from "repl";

function test(){
    function getFormatDate(date: Date){
        var year = date.getFullYear();
        var month = (1 + date.getMonth());
        month = month >= 10 ? month : '0' + month;
        var day = date.getDate();
        day = day >= 10 ? day : '0' + day;
        return year + '-' + month + '-' + day;
    }
    function time(){
        const now=new Date();
        const startTime = new Date(`${getFormatDate(now)} 6:00:00`)
        const endTime = new Date(`${getFormatDate(now)}} 8:01:00`)
        console.log(now.getDay)
        alert(now);
        alert(startTime);
        alert(endTime);
    }
    return(
        <button onClick={time}>시간체크</button>
    )
}
export default test;