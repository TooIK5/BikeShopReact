
function confPass(value, firstFieldVal) {
  if (!value || firstFieldVal === value) {
    return Promise.resolve();
  }
  return Promise.reject(new Error('Пароли не совпадают'));
}

function pass(value) {
  let pattern = /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  let isMatch = value.match(pattern);
  if (!isMatch || !value) {
    return Promise.reject(new Error('Пароль должен содержать 8 символов, и минимум и одну цифру'));
  }
  return Promise.resolve();
}

function mail(value) {
  let pattern = /^[a-zA-Z_0-9]+[a-zA-Z0-9]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  let isMatch = value.match(pattern);
  if (!isMatch || !value) {
    return Promise.reject(new Error('Почта должна иметь формат: xxxxxxxx@google.com'));
  }
  return Promise.resolve();
}

function name(value) {
  let pattern = /^[a-zA-Z0-9]{1,7}$/;
  let isMatch = value.match(pattern);
  if (!isMatch || !value) {
    return Promise.reject(new Error('Имя должно иметь от 1 до 6 латинских символов и цифры'));
  }
  return Promise.resolve();
}

function phone(value) {
  if (value && value.length !== 9) {
    return Promise.reject(new Error('Номер должен иметь 9 цифр'));
  }
  return Promise.resolve();
}

export { confPass, pass, mail, phone, name };