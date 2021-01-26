import styled from "styled-components"
export const Container=styled.div`
    max-width: 768px;
    margin: 0 auto;
`

export const ProfileWrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    margin: 0 auto;
    margin-top: 30px;
    & img{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        overflow: hidden;
    }
`
export const ProfileName=styled.p`
    color: #A1927F;
    font-size: 18px;
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
export const NavigatorWrapper=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
`