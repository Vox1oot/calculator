const getFormat = (value: number): string => {
    if (value > 9999999999) {
        return Number(value).toExponential(2).toString();
    }

    if (!Number.isInteger(value)) {
        const fractionalLenght = String(value).split('.')[1].length;
        const fractionalNumber = fractionalLenght > 2 ? Number(value).toFixed(3) : value;
        return fractionalNumber.toString().replace('.', ',');
    }

    return value.toString();
};

export default getFormat;
