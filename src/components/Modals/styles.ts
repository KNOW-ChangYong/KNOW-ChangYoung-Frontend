import styled from 'styled-components';
export const Modal_overlay=styled.div`
    background: black;
    opacity: 0.3;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
` 
export const Modal_Container=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 999;
    top: 0;
`
export const Modal_Wrapper=styled.div`
    background: white;
    min-width: 300px;
    padding: 16px;
    position: relative;
    z-index: 99;
    border-radius: 10px;
`
export const SayingWrapper=styled.form`
    display: flex;
    padding: 50px 5px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    & input{
        border: none;
        outline: none;
        border-bottom: 3px solid #CB9B55;
        margin-bottom: 50px;
        width: 100%;
        padding: 0 5px;
        border-radius: none;
    }
    & button{
        border: none;
        outline: none;
        background: white;
        border:2px solid #CB9B55;
        color: #CB9B55;
        width: 100%;
        border-radius: 5px;
        padding: 15px 0;
        font-size: 15px;
    }
`