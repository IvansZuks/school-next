export const calculateAge = (date) => {
    const tempDate = new Date(date);
    const tempNow = new Date();
    
    return `Your age is: ${Math.trunc((tempNow - tempDate) / (3600 * 24 * 364 * 1000))}`;
};
