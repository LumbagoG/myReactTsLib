// Library's
import React from "react";
import type { MouseEventHandler, PropsWithChildren } from "react";

// Enums
import { ECustomButtonVariants } from "@lib/components";

// Types
import type { TCustomButton } from "./types/TCustomButton";

/**
 * Button component
 * @constructor
 */
export const CustomButton: React.FC<PropsWithChildren<TCustomButton>> = ({
    children,
    disabled,
    onClick,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    variant = ECustomButtonVariants.PRIMARY,
    ...restProps
}) => {
    const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (disabled) return;
        onClick && onClick(e);
    };

    return (
        <button disabled={disabled} onClick={handleClick} {...restProps}>
            {children}
        </button>
    );
};
