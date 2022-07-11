const emailValidation = (email) => {
  const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;
  const validateEmail = reg.test(email);
  return validateEmail;
};

export default emailValidation;
