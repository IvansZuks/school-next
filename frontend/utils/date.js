export const calculate =  (dateVal) => {
    const date = new Date(dateVal);
    const now = new Date();
    const age = Math.trunc((now - date) / (3600 * 24 * 364 * 1000));

    return `Your age is: ${age}`;
};
