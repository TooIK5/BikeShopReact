export const requiredField = value => {
    if (!value) return 'Field is\'nt required';
};

export const maxLengthCreator = (MaxLength) => (value) => {
    if(value && value.length > MaxLength) return `Max length is ${MaxLength} symbols`;
};
