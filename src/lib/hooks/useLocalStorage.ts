// Library's
import { useState } from "react";

// Types
import type { SetStateAction } from "react";

/**
 * Hook of local storage
 * @param key - Key item
 * @param defaultValue - Default item
 * @constructor
 */
export const UseLocalStorage = <T>(key: string, defaultValue?: T | (() => T)) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [state, setState] = useState<T>(() => {
        const storedState = localStorage.getItem(key);

        if (storedState) return JSON.parse(storedState) as T;

        return defaultValue instanceof Function ? defaultValue() : defaultValue;
    });

    const setValue = (value: SetStateAction<T>) => {
        const valueToStore = value instanceof Function ? value(state) : value;
        localStorage.setItem(key, JSON.stringify(valueToStore));
        setState(valueToStore);
    };

    return [state, setValue] as const;
};
