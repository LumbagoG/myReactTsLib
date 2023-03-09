// Провайдеры
import { CustomThemeProvider } from "@lib/providers";
import { customTheme } from "@lib/styles";
import { mainColors } from "@lib";

/**
 * Параметры историй
 */
export const parameters = {
    viewport: {},
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

/**
 * Глобальный декоратор историй
 * @param Story
 */
const withGlobalStyle = (Story: any) => {
    return (
        <CustomThemeProvider theme={customTheme(mainColors, {})}>
            <Story />
        </CustomThemeProvider>
    );
};

export const decorators = [withGlobalStyle];
