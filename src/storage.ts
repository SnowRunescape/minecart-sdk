export const storage  = {
    get: (key: string) => JSON.parse(localStorage.getItem(key) ?? ""),
    set: (key: string, value: {}) => localStorage.setItem(key, JSON.stringify(value)),
}