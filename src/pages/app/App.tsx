import React from "react";

import { CustomButton, ECustomButtonVariants } from "@my-react-ts/lib";

function App() {
    // обработчик нажатия кнопки
    // принимает вариант кнопки
    const onClick = (variant: string) => {
        // выводим сообщение в консоль инструментов разработчика в браузере
        alert(`${variant} button clicked`);
    };

  return (
    <div className="App">
        {/* дефолтная кнопка */}
        <CustomButton onClick={() => onClick("primary")}>primary</CustomButton>

        {/* заблокированная кнопка */}
        <CustomButton onClick={() => onClick("disabled")} disabled>
            disabled
        </CustomButton>
        {/* успех */}

        <CustomButton
            variant={ECustomButtonVariants.SUCCESS}
            onClick={() => onClick(ECustomButtonVariants.SUCCESS)}
        >
            {ECustomButtonVariants.SUCCESS}
        </CustomButton>

        {/* предупреждение */}
        <CustomButton
            variant={ECustomButtonVariants.WARNING}
            onClick={() => onClick(ECustomButtonVariants.WARNING)}
        >
            {ECustomButtonVariants.WARNING}
        </CustomButton>

        {/* опасность */}
        <CustomButton
            variant={ECustomButtonVariants.DANGER}
            onClick={() => onClick(ECustomButtonVariants.DANGER)}
        >
            {ECustomButtonVariants.DANGER}
        </CustomButton>
    </div>
  )
}

export default App
