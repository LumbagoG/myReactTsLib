// Библиотеки
import styled from "styled-components";

// Компонент кнопки
import {CustomButton, ECustomButtonVariants} from "./CustomButton";

/**
 *  Стилевой компонент кнопки
 */
export const CustomButtonStyled = styled(CustomButton)`
  background-color: var(
    --${(props) => (props.disabled ? "gray" : props.variant ?? "primary")}
  );
  border-radius: 6px;
  border: none;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  color: var(
    ${(props) =>
    props.variant &&
    (props.variant === ECustomButtonVariants.SUCCESS ??
        props.variant === ECustomButtonVariants.WARNING)
        ? "--dark"
        : "--light"}
  );
  cursor: ${(props) => (props.disabled ? "default" : "pointer")};
  font-weight: 600;
  letter-spacing: 1px;
  opacity: ${(props) => (props.disabled ? "0.6" : "1")};
  outline: none;
  padding: 0.8rem;
  text-transform: uppercase;
  transition: 0.4s;

  &:not([disabled]):hover {
    opacity: 0.8;
  }

  &:active {
    box-shadow: none;
  }
`;
