import { createGlobalStyle } from "styled-components"
export const GlobalStyled = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
        font-family: 'Noto Sans KR', sans-serif;
        list-style: none;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
    }
    body{
        margin: 0;
        background: #0F0A0F;
        overflow-y: hidden;
    }
`