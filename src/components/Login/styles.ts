import styled from "styled-components"
export const LoginWrapper=styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    flex-direction: column;
    padding: 0 15%;
    & input{
        border: none;
        background: transparent;
        border-bottom: 1px solid #A1927F;
        width: 100%;
        padding: 5px 10px;
        outline: none;
        margin: 10px 0;
        color: #CB9B55;
    }
    & button{
        outline: none;
        border: none;
        background: white;
        width: 100%;
        margin-top: 30px;
        padding: 10px 0;
        background: #CB9B55;
        color: #eee;
        cursor: pointer;
        
    }
`