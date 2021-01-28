import { AttendanceResponse } from "../../interfaces";
const ListItem = ({data}: {data:AttendanceResponse})=>  {
    return(
        <tr>
            <td>
                <img src={require(`./userimages/${data.name}.jpg`).default}></img>
            </td>
            <td>
                <p>{data.name} / {data.name=="이동욱" ? "선생님" : "학생"}</p>
            </td>
            <td>
                {
                    data.dateTime?
                        <p>{data.dateTime.toString().replace("T","일 ")}</p>
                    :
                        <p>{data.attendanceCount} / {data.notAttendanceCount}</p>
                }
            </td>
        </tr>
    )

}
export default ListItem;