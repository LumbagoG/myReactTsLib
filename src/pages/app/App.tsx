// Library's
import React from "react";

// Components
import { CustomButton, ECustomButtonVariants } from "@lib";

/**
 * App component
 * @constructor
 */

export const App = (): JSX.Element => {
    const onClick = (variant: string) => {
        alert(`${variant} button clicked`);
    };

    return (
        <div className="App">
            <CustomButton onClick={() => onClick("primary")}>primary</CustomButton>

            <CustomButton onClick={() => onClick("disabled")} disabled>
                disabled
            </CustomButton>

            <CustomButton variant={ECustomButtonVariants.SUCCESS} onClick={() => onClick(ECustomButtonVariants.SUCCESS)}>
                {ECustomButtonVariants.SUCCESS}
            </CustomButton>

            <CustomButton variant={ECustomButtonVariants.WARNING} onClick={() => onClick(ECustomButtonVariants.WARNING)}>
                {ECustomButtonVariants.WARNING}
            </CustomButton>

            <CustomButton variant={ECustomButtonVariants.DANGER} onClick={() => onClick(ECustomButtonVariants.DANGER)}>
                {ECustomButtonVariants.DANGER}
            </CustomButton>
        </div>
    );
};
