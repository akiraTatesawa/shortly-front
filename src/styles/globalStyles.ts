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

    main {
        margin-top: 70px;
    }

    :root {
        --surface-primary: #fff;
        --surface-secondary: #f4f4f5;
        --text-primary: #27272a;
        --text-secondary: #9c9c9c;

        --brand: #5d9040;
        --brand-hover: #8fbc6d;
        --brand-light: #80cc74;
        --border: #c3e7a2;
        --text-on-brand: #fff;

        --delete: #ea4f4f;
        --trophy: #ffd233;

        padding: 0 20px;
        width: 1040px;
        margin: 0 auto;
    }
`;
