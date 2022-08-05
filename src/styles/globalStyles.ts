import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 14px;
        min-height: 100%;
        background-color: var(--surface-primary);
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: "Lexend Deca", sans-serif;
        color: var(--text-primary);
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    :root {
        --surface-primary: #fff;
        --text-primary: #27272a;
        --text-secondary: #9c9c9c;

        --brand: #5d9040;
        --brand-hover: #8fbc6d;
        --brand-light: #80cc74;
        --border: #78b159;
        --delete: #ea4f4f;
        --text-on-brand: #fff;
    }
`;
