import { useState } from "react";
import ListItem from "./ListItem";
import * as S from "./styles"
const List : React.FC = () => {
    const [data, setData] = useState(["안녕","test"]);
    const test=new Date().toString();
    return (
        <S.ListWrapper>
            <S.ListTitle>오늘 …</S.ListTitle>
            <S.ListTime>{test}</S.ListTime>
            <S.ListTable>
                <thead>
                    <tr>
                        <th>프로필</th>
                        <th>이름 / 계급</th>
                        <th>출석 / 미출석</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((i)=>(
                            <ListItem></ListItem>
                        ))
                    }
                </tbody>
            </S.ListTable>
        </S.ListWrapper>        
    )
};
export default List;