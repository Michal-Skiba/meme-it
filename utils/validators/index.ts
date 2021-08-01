const regexps = Object.freeze({
  haveNumber: /^([^0-9]*)$/,
  haveLetter: /^([^a-zA-Z]*)$/,
});

const validationParameters = Object.freeze({
  minimumLoginLength: 3,
  minimumPasswordLength: 8,
});

const errors = Object.freeze({
  isRequired: "Value is required",
  loginToShort: `The login field must be at least ${validationParameters.minimumLoginLength} characters long`,
  passwordToShort: `The password field must be at least ${validationParameters.minimumPasswordLength} characters long`,
  passwordContainLetters: "The password field must contain at least one letter",
  passwordContainNumbers: "The password field must contain at least one number",
});

export const valueIsRequired = (value: string): string => {
  if (!value) {
    return errors.isRequired;
  }
  return "";
};

export const validateLogin = (loginValue: string): string => {
  if (!loginValue) {
    return errors.isRequired;
  }
  if (loginValue.length < validationParameters.minimumLoginLength) {
    return errors.loginToShort;
  }
  return "";
};

export const validatePassword = (passwordValue: string): string => {
  if (!passwordValue) {
    return errors.isRequired;
  }
  if (passwordValue.length < validationParameters.minimumPasswordLength) {
    return errors.passwordToShort;
  }
  if (passwordValue.match(regexps.haveNumber)) {
    return errors.passwordContainNumbers;
  }
  if (passwordValue.match(regexps.haveLetter)) {
    return errors.passwordContainLetters;
  }
  return "";
};

export const isErrorInObject = (errors: { [key: string]: string }): boolean => {
  let isError = false;
  for (const [key, value] of Object.entries(errors)) {
    if (value) {
      isError = true;
    }
  }
  return isError;
};
