

export const reqiredField = value => {
    if (value) return undefined;
    return "Field is required";
};