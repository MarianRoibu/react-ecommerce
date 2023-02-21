import { css } from "styled-components"

export const mobile = (props) => {
    return css`
        @media only screen adn (max-width: 380px){
            ${props}
        }
    `;
};