import { AttendanceResponse } from "../../interfaces";

const ListItem = ({data}: {data:AttendanceResponse})=>  {
    return(
        <tr>
            <td>
                <img src="https://avatars.githubusercontent.com/u/78029308?s=200&v=4"></img>
            </td>
            <td>
                <p>{data.name} / {data.name=="이동욱" ? "선생님" : "학생"}</p>
            </td>
            <td>
                {
                    data.dateTime?
                        <p>{data.dateTime}</p>
                    :
                        <p>{data.attendanceCount} / {data.notAttendanceCount}</p>
                }
            </td>
        </tr>
    )

}
export default ListItem;