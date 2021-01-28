import styled from "styled-components"
import backgroundclock from "./backgroundclock.png"
export const Container=styled.div`
    max-width: 768px;
    margin: 0 auto;
`

export const ProfileWrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
    & img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        overflow: hidden;
        object-fit: cover;
    }
`
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
`
export const ProfileName=styled.p`
    color: #A1927F;
    font-size: 18px;
    margin-left: 10px;
    & span{
        font-size: 14px;
    }
`
export const AttendacneBT=styled.div`
    border: 1px solid #A1927F;
    border-radius: 5px;
    font-size: 16px;
    color: #CB9B55;
    cursor: pointer;
    padding: 6px 15px;
`
export const NavigatorWrapper=styled.div<{state : string}>`
    display: flex;
    align-items: center;
    margin: 0 auto;
    margin-top: 55px;
    justify-content: center;
    width: 92%;
    &::before, &::after{
        content: "";
        display: flex;
        height: 1px;
        z-index: -100;
        flex: 1 1 0%;
        background: rgba(134, 134, 134, 0.19);
    }
    & div:nth-child(1){
        margin-left: 10px;
    }
    & div:nth-child(3){
        margin-right: 10px;
    }
    & div:nth-child(${props=>props.state=="today" ? 1 : props.state=="all" ? 2 : 3}){
        background: #CB9B55 !important;
        color: white !important;
    }
    
`

export const NavigatorBT=styled.div`
    border:1px solid #AE8F81;
    color: #AE8F81;
    border-radius: 5px;
    cursor: pointer;
    padding: 7px 15px;
    font-size: 14px;
    transition: 0.3s;
    
`
export const ListWrapper=styled.div`
    list-style: none;
    min-height: 100vh;
    width: 92%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin: 0 auto;
    margin-top: 15px;
`
export const ListTable= styled.table`
    width: 100%;
    border-spacing: 0;
    /*background: white;
    color: #CB9B55;
    border-radius: 5px;
    font-size: 10px;*/
    & th{
        padding: 3px 0;
    }
    & thead{
        background: #EEEEEE;
        color: #CB9B55;
        font-size: 12px;
    }
    & th:first-child{
        border-radius:10px 0 0 10px;
    }
    & th:nth-child(2){
        text-align: left;
    }
    & td{
        text-align: center;
        color: white;
        font-size: 13px;
    }
    & td:nth-child(2){
        text-align: left;
    }
    & th:last-child{
    border-radius:0 10px 10px 0;
    }
    & img{
        width: 40px;
        height: 40px;
        margin-top: 10px;
        background: white;
        border-radius: 50%;
        object-fit: cover;
    }
`
export const ListTitle=styled.h3`
    color: #cc9b55;
`
export const ListTime=styled.p`
    color:#A1927F;
    margin: 10px 0;
    font-size: 10px;
`
export const Sayingwrapper=styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #A1927F;
    width: 90%;
    margin: 15px auto;
    padding: 45px 0;
    & ::after, & ::before{
        content: "";
        display: flex;
        height: 1px;
        z-index: -100;
        flex: 1 1 0%;
        background: rgba(134, 134, 134, 0.19);
    }
`
export const SayingContent=styled.div`
    color: #CB9B55;
    font-size: 20px;
`
export const SayingAdder=styled.div`
    color: #A1927F;
    margin-top: 12px;
    font-size: 14px;
`

export const BackgroundWrapper=styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    z-index: 1;
    &::after{
        width: 100%;
        height: 220px;
        content: "";
        background: url("${backgroundclock}");
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.1;
    }
`
export const FooterWrapper=styled.div`
    width: 100%;
    text-align: center;
    padding: 30px 20px;
    & img{
        width: 35px;
        height: 35px;
        cursor: pointer;
    }
    & p {
        font-size: 12px;
    }
`