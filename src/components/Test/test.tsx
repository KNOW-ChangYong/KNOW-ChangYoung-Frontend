import { start } from "repl";

function test(){
    function time(){
        const now=new Date();
        const startTime = new Date(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} 6:00:00`)
        const endTime = new Date(`${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} 8:01:00`)
        alert(now);
        alert(startTime);
        alert(endTime);
    }
    return(
        <button onClick={time}>시간체크</button>
    )
}
export default test;