// Library's
import styled from "styled-components";

// Components
import { CustomButton } from "./CustomButton";

// Enums
import { ECustomButtonVariants } from "@lib/components";

/**
 *  Styled
 */
export const CustomButtonStyled = styled(CustomButton)`
    background-color: ${(props) => (props.disabled ? "gray" : props.variant ?? "blue")};
    border-radius: 6px;
    border: none;
    color: ${(props) =>
        props.variant && (props.variant === ECustomButtonVariants.SUCCESS ?? props.variant === ECustomButtonVariants.WARNING)
            ? props.theme
            : "white"};
    cursor: ${(props) => (props.disabled ? "default" : "pointer")};
    font-weight: 600;
    letter-spacing: 1px;
    opacity: ${(props) => (props.disabled ? "0.6" : "1")};
    outline: none;
    padding: 0.8rem;
    text-transform: uppercase;
    transition: 0.4s;

    &:not([disabled]) :hover {
        opacity: 0.8;
    }

    &:active {
        box-shadow: none;
    }
`;
