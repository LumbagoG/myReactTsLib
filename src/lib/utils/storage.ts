/**
 * Storage util
 */
export const storage = {
    /**
     * Set to storage item
     * @param key - Key item
     * @param value - Value item
     */
    set: <T>(key: string, value: T) => {
        localStorage.setItem(key, JSON.stringify(value));
    },

    /**
     * Get item in storage
     * @param key - Key item
     * @param defaultValue - Default value item
     */
    get: <T>(key: string, defaultValue?: T): T => {
        const value = localStorage.getItem(key);
        return (value ? JSON.parse(value) : defaultValue) as T;
    },

    /**
     * Remove item in storage
     * @param key - Key item
     */
    remove: (key: string) => {
        localStorage.removeItem(key);
    },
};
